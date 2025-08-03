// src/pages/Admin/EditCrashPage/EditCrashPage.jsx
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { AuthContext } from "../../../Context/AuthContext";

// Importe seus componentes de estilo de formulário, se tiver (ex: FormContainer, Input, Button, Label, etc.)
import {
  Container,
  Title,
  DetailItem,
  Button,
  Input,
  ButtonCancel,
  TextArea,
  FormCard,
} from "./CrashDetailsStyled";
// Por enquanto, usaremos elementos HTML básicos.

const EditCrashPage = () => {
  const { id } = useParams(); // Obtém o ID da ocorrência da URL
  const navigate = useNavigate();
  const { getToken } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plate1: "",
    plate2: "",
    address: "",
    description: "",
    // Não inclua 'user' aqui, pois é preenchido no backend
    // Não inclua 'createdAt' ou '_id', pois são gerados ou imutáveis
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false); // Novo estado para o processo de salvamento
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // --- Efeito para carregar os dados da ocorrência existente ---
  useEffect(() => {
    const fetchCrashDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = getToken();
        if (!token) {
          throw new Error(
            "Token de autenticação não encontrado. Faça login novamente."
          );
        }

        const response = await api.get(`/crash/crashes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Preenche o formulário com os dados existentes
        const crash = response.data;
        setFormData({
          name: crash.name || "",
          phone: crash.phone || "",
          plate1: crash.plate1 || "",
          plate2: crash.plate2 || "",
          address: crash.address || "",
          description: crash.description || "",
        });
      } catch (err) {
        console.error(
          "Erro ao carregar detalhes da ocorrência para edição:",
          err
        );
        if (err.response && err.response.status === 404) {
          setError("Ocorrência não encontrada para edição.");
        } else if (
          err.response &&
          err.response.data &&
          err.response.data.message
        ) {
          setError(err.response.data.message);
        } else {
          setError("Falha ao carregar detalhes da ocorrência para edição.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      // Só tenta buscar se um ID for fornecido
      fetchCrashDetails();
    } else {
      setLoading(false);
      setError("ID da ocorrência não fornecido.");
    }
  }, [id, getToken]); // Dependências: refetch se o ID ou token mudar

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- Função para lidar com a submissão do formulário de edição ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const token = getToken();
      if (!token) {
        throw new Error(
          "Token de autenticação não encontrado. Faça login novamente."
        );
      }

      // Requisição PUT para o backend
      await api.patch(`/crash/crashes/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess("Ocorrência atualizada com sucesso!");
      setTimeout(() => {
        navigate(`/admin/painel/ocorrencias/${id}`, { replace: true }); // Volta para a página de detalhes após o sucesso
      }, 800);
    } catch (err) {
      console.error("Erro ao atualizar ocorrência:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Falha ao atualizar ocorrência.");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p>Carregando dados da ocorrência para edição...</p>; // Pode usar um spinner aqui
  }

  if (error) {
    return <p style={{ color: "red" }}>Erro: {error}</p>;
  }

  return (
    <Container>
      <Title>Editar Ocorrência {id.substring(0, 8)}...</Title>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <FormCard onSubmit={handleSubmit}>
        <DetailItem>
          <label htmlFor="name">Nome:</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </DetailItem>
        <DetailItem>
          <label htmlFor="phone">Telefone:</label>
          <Input
            type="text" // Mantenha como 'text' para permitir caracteres não numéricos
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </DetailItem>
        <DetailItem>
          <label htmlFor="plate1">Placa 1:</label>
          <Input
            type="text"
            id="plate1"
            name="plate1"
            value={formData.plate1}
            onChange={handleChange}
            required
          />
        </DetailItem>
        <DetailItem>
          <label htmlFor="plate2">Placa 2:</label>
          <Input
            type="text"
            id="plate2"
            name="plate2"
            value={formData.plate2}
            onChange={handleChange}
          />
        </DetailItem>
        <DetailItem>
          <label htmlFor="address">Endereço:</label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </DetailItem>
        <DetailItem>
          <label htmlFor="description">Descrição:</label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="5"
          ></TextArea>
        </DetailItem>

        <Button type="submit" disabled={saving}>
          {saving ? "Salvando..." : "Salvar Alterações"}
        </Button>
        <ButtonCancel
          type="button"
          onClick={() => navigate(-1)}
          disabled={saving}
        >
          Voltar
        </ButtonCancel>
      </FormCard>
    </Container>
  );
};

export default EditCrashPage;
