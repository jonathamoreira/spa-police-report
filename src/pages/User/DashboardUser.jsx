import React, { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";

import {
  DashboardContainer,
  HeaderSection,
  WelcomeTitle,
  CreateProtocolButton,
  OccurrencesGrid,
  OccurrenceCard,
  ConfirmationBox,
  Message,
} from "./DashBoardStyled";

export default function DashboardUser() {
  const [occurrences, setOccurrences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [confirmationMessageText, setConfirmationMessageText] = useState("");
  const [confirmationContactPhone, setConfirmationContactPhone] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { token, userName } = useContext(AuthContext); // Pegue o user do contexto

  useEffect(() => {
    if (location.state && location.state.showConfirmation) {
      setConfirmationMessageText(location.state.successMessage);
      setConfirmationContactPhone(location.state.contactPhone);
      setShowConfirmationMessage(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      const state = { ...location.state };
      delete state.showConfirmation;
      delete state.successMessage;
      delete state.contactPhone;
      navigate(location.pathname, { replace: true, state });

      setTimeout(() => {
        setShowConfirmationMessage(false);
      }, 64000); // 64 segundos, mais razoável que 1 hora
    }
  }, [location, navigate]);

  useEffect(() => {
    const fetchOccurrences = async () => {
      if (!token) {
        setError("Usuário não autenticado. Redirecionando para o login...");
        setLoading(false);
        navigate("/user/login");
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await api.get("/crash/mine");

        const sortedOccurrences = response.data.sort((a, b) => {
          const dateA = new Date(a.createdAt || a.timestamp);
          const dateB = new Date(b.createdAt || b.timestamp);
          return dateB - dateA;
        });

        setOccurrences(sortedOccurrences);
      } catch (err) {
        console.error("Erro ao buscar ocorrências:", err);
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          setError(
            "Sua sessão expirou ou você não tem permissão. Por favor, faça login novamente."
          );
          navigate("/user/login");
        } else if (err.response && err.response.status === 404) {
          setOccurrences([]);
          setError("Você ainda não registrou nenhuma ocorrência.");
        } else {
          setError(
            "Não foi possível carregar suas ocorrências. Tente novamente mais tarde."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOccurrences();
  }, [token, navigate]);

  const handleCreateProtocol = () => {
    navigate("/protocolo");
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  return (
    <DashboardContainer>
      <HeaderSection>
        <WelcomeTitle>Bem-vindo(a),{userName || "Usuário"}</WelcomeTitle>

        <CreateProtocolButton onClick={handleCreateProtocol}>
          Registrar Novo Protocolo
        </CreateProtocolButton>
      </HeaderSection>

      {showConfirmationMessage && confirmationMessageText && (
        <ConfirmationBox>
          <p>{confirmationMessageText}</p>
          <p>
            Uma equipe acaba de ser acionada. <br />
            Em caso de dúvidas, ligue para:{" "}
            <a href={`tel:${confirmationContactPhone.replace(/\D/g, "")}`}>
              {confirmationContactPhone}
            </a>
          </p>
        </ConfirmationBox>
      )}

      {loading && <Message>Carregando suas ocorrências...</Message>}
      {error && <Message type="error">{error}</Message>}

      {!loading && !error && occurrences.length === 0 && (
        <Message>Você ainda não tem ocorrências registradas.</Message>
      )}

      <OccurrencesGrid>
        {occurrences.length > 0 &&
          occurrences.map((crash) => (
            <OccurrenceCard key={crash.id}>
              <h3>Protocolo: {crash._id.substring(0, 9)}</h3>
              <p>
                <strong>Nome:</strong> {crash.name}
              </p>
              <p>
                <strong>Telefone:</strong> {crash.phone}
              </p>
              <p>
                <strong>Placa 1:</strong> {crash.plate1}
              </p>
              {crash.plate2 && (
                <p>
                  <strong>Placa 2:</strong> {crash.plate2}
                </p>
              )}
              <p>
                <strong>Endereço:</strong> {crash.address}
              </p>
              <p>
                <strong>Descrição:</strong> {crash.description}
              </p>
              <p>
                <strong>Data:</strong>{" "}
                {formatDate(crash.createdAt || crash.timestamp)}
              </p>
            </OccurrenceCard>
          ))}
      </OccurrencesGrid>
    </DashboardContainer>
  );
}
