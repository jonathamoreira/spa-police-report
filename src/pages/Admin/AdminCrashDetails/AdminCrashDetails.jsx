// src/pages/Admin/CrashDetailsPage/CrashDetailsPage.jsx
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContext";
import { BaseUrl } from "../../../Api/BaseUrl";
// Importe seus componentes de estilo ou defina-os aqui
import {
  Container,
  Title,
  DetailItem,
  Button,
  ButtonCancel,
} from "./CrashDetailsStyled";

const CrashDetailsPage = () => {
  const { id } = useParams(); // Hook para obter o ID da URL
  const navigate = useNavigate(); // Hook para navegação programática
  const { getToken } = useContext(AuthContext); // Para obter o token de autenticação

  const [crashDetails, setCrashDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null); // Limpa erros anteriores
      try {
        const token = getToken();
        if (!token) {
          throw new Error(
            "Token de autenticação não encontrado. Faça login novamente."
          );
        }

        const response = await axios.get(`${BaseUrl.URL}/crash/crashes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCrashDetails(response.data);
      } catch (err) {
        console.error("Erro ao buscar detalhes da ocorrência:", err);
        if (err.response && err.response.status === 404) {
          setError("Ocorrência não encontrada.");
        } else if (
          err.response &&
          err.response.data &&
          err.response.data.message
        ) {
          setError(err.response.data.message);
        } else {
          setError("Falha ao carregar os detalhes da ocorrência.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, getToken]); // Dependências: refetch se o ID na URL ou o token mudar

  const handleEdit = () => {
    // Implemente a navegação para a página/modal de edição
    navigate(`/admin/painel/ocorrencias/editar/${id}`); // Exemplo
  };

  const handleGoBack = () => {
    navigate("/admin/painel/ocorrencias"); // Volta para a página anterior na pilha do histórico
  };

  if (loading) {
    return <p>Carregando detalhes da ocorrência...</p>; // Substitua por um LoadingSpinner se tiver
  }

  if (error) {
    return <p style={{ color: "red" }}>Erro: {error}</p>;
  }

  if (!crashDetails) {
    return <p>Nenhum detalhe encontrado para esta ocorrência.</p>;
  }

  // Se tudo deu certo, exibe os detalhes
  return (
    <Container>
      <Title>Detalhes da Ocorrência {crashDetails._id.substring(0, 10)}</Title>
      <DetailItem>
        <strong>Nome:</strong> {crashDetails.name}
      </DetailItem>
      <DetailItem>
        <strong>Telefone:</strong> {crashDetails.phone}
      </DetailItem>
      <DetailItem>
        <strong>Placa 1:</strong> {crashDetails.plate1}
      </DetailItem>
      <DetailItem>
        <strong>Placa 2:</strong> {crashDetails.plate2 || "N/A"}
      </DetailItem>
      <DetailItem>
        <strong>Endereço:</strong> {crashDetails.address}
      </DetailItem>
      <DetailItem>
        <strong>Descrição:</strong> {crashDetails.description}
      </DetailItem>
      <DetailItem>
        <strong>Data de Criação:</strong>{" "}
        {new Date(crashDetails.createdAt).toLocaleString()}
      </DetailItem>
      {/* Adicione outros detalhes que desejar, como status, etc., se forem relevantes aqui */}

      <Button onClick={handleEdit}>Editar Ocorrência</Button>
      <ButtonCancel onClick={handleGoBack}>Voltar para a Lista</ButtonCancel>
    </Container>
  );
};

export default CrashDetailsPage;
