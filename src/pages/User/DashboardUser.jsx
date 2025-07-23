// src/pages/User/DashboardUser.jsx
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom"; // Importe useLocation
import styled from "styled-components";

import { AuthContext } from "../../Context/AuthContext";
import { BaseUrl } from "../../Api/BaseUrl";

// Importar os styled components do seu arquivo FormStyled
import {
  FormWrapper,
  Title,
  Button,
  FormGrid,
  Message,
} from "../../styles/FormStyled";

// --- Styled Components específicos do DashboardUser ---
const DashboardContent = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-grow: 1;
`;

const CreateProtocolButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const OccurrenceCard = styled.div`
  background: linear-gradient(to right, #ffffff, #f0f0f0);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin-top: 0;
    color: #3689b9;
    font-size: 1.3rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
    margin-bottom: 0.8rem;
  }

  p {
    margin: 0;
    color: #444;
    font-size: 0.95rem;
  }

  strong {
    color: #2c3e50;
  }
`;

// Novo styled component para a caixa de mensagem de confirmação
const ConfirmationBox = styled.div`
  background: #e8f5e9; /* Um verde bem claro para sucesso */
  border: 1px solid #81c784; /* Borda verde */
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  p {
    font-size: 1.1rem;
    color: #388e3c; /* Texto verde escuro */
    margin-bottom: 1rem;
  }

  a {
    font-size: 1.2rem;
    color: #1b5e20; /* Verde bem escuro para o link */
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #000;
    }
  }
`;

// --- Fim Styled Components específicos do DashboardUser ---

export default function DashboardUser() {
  const [occurrences, setOccurrences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [confirmationMessageText, setConfirmationMessageText] = useState("");
  const [confirmationContactPhone, setConfirmationContactPhone] = useState("");

  const navigate = useNavigate();
  const location = useLocation(); // Hook para acessar o state da navegação
  const { token } = useContext(AuthContext);

  // Efeito para verificar a mensagem de sucesso do CreateCrash
  useEffect(() => {
    if (location.state && location.state.showConfirmation) {
      setConfirmationMessageText(location.state.successMessage);
      setConfirmationContactPhone(location.state.contactPhone);
      setShowConfirmationMessage(true);

      window.scrollTo({ top: 0, behavior: "smooth" }); // Rola para o topo da página

      // Limpa o state da location para que a mensagem não apareça novamente
      // se o usuário navegar para fora e voltar, ou recarregar a página
      const state = { ...location.state };
      delete state.showConfirmation;
      delete state.successMessage;
      delete state.contactPhone;
      navigate(location.pathname, { replace: true, state });

      // Opcional: fazer a mensagem desaparecer após alguns segundos
      setTimeout(() => {
        setShowConfirmationMessage(false);
        setConfirmationMessageText("");
        setConfirmationContactPhone("");
      }, 6400000); // 6400000 ms = 1 hora
    }
  }, [location, navigate]); // Dependências do useEffect

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

        const response = await axios.get(`${BaseUrl.URL}/crash/mine`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const sortedOccurrences = response.data.sort((a, b) => {
          const dateA = new Date(a.createdAt || a.timestamp);
          const dateB = new Date(b.createdAt || b.timestamp);
          return dateB - dateA;
        }); // Ordena do mais recente para o mais antigo

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

  return (
    <FormWrapper>
      <DashboardContent>
        <Title>Seu Painel de Ocorrências</Title>

        {showConfirmationMessage && confirmationMessageText && (
          <ConfirmationBox>
            <p>
              {confirmationMessageText} A equipe poderá entrar em contato para
              confirmar alguns dados.
            </p>
            <p>
              Em caso de dúvidas, ligue para:{" "}
              <a href={`tel:${confirmationContactPhone.replace(/\D/g, "")}`}>
                {confirmationContactPhone}
              </a>
            </p>
          </ConfirmationBox>
        )}

        <CreateProtocolButtonContainer>
          <Button onClick={handleCreateProtocol}>
            Registrar Novo Protocolo
          </Button>
        </CreateProtocolButtonContainer>

        {loading && <Message>Carregando suas ocorrências...</Message>}
        {error && <Message type="error">{error}</Message>}

        {!loading && !error && occurrences.length === 0 && (
          <Message>Você ainda não tem ocorrências registradas.</Message>
        )}

        <FormGrid>
          {occurrences.length > 0 &&
            occurrences.map((crash) => (
              <OccurrenceCard key={crash.id}>
                <h3>Protocolo: {crash.protocol}</h3>
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
                  {new Date(
                    crash.createdAt || crash.timestamp
                  ).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </OccurrenceCard>
            ))}
        </FormGrid>
      </DashboardContent>
    </FormWrapper>
  );
}
