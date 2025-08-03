import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../Context/AuthContext";
import api from "../../../services/api";
import {
  Container,
  Title,
  FormCard,
  DetailItem,
  Input,
  Button,
  ButtonCancel,
} from "../AdminCrashDetails/CrashDetailsStyled";

const EditAdminPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getToken } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    matricula: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const token = getToken();
        const response = await api.get(`/admin/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const admin = response.data;
        setFormData({
          name: admin.name,
          matricula: admin.matricula,
        });
      } catch (err) {
        console.error("Erro ao buscar detalhes do admin:", err);
        setError("Não foi possível carregar os dados do administrador.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, [id, getToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    const dataToUpdate = { ...formData };
    if (!dataToUpdate.password) {
      delete dataToUpdate.password;
    }

    try {
      const token = getToken();
      await api.put(`/admin/${id}`, dataToUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess("Admin atualizado com sucesso!");
      setTimeout(() => {
        navigate("/admin/painel/admins", { replace: true });
      }, 1500);
    } catch (err) {
      console.error("Erro ao atualizar admin:", err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Falha ao atualizar o administrador.");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p>Carregando dados do administrador...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <Container>
      <Title>Editar Administrador {id.substring(0, 8)}...</Title>
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
          <label htmlFor="matricula">Matrícula:</label>
          <Input
            type="text"
            id="matricula"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            required
          />
        </DetailItem>
        <DetailItem>
          <label htmlFor="password">Senha:</label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </DetailItem>

        <ButtonCancel
          type="button"
          onClick={() => navigate(-1)}
          disabled={saving}
        >
          Voltar
        </ButtonCancel>
        <Button type="submit" disabled={saving}>
          {saving ? "Salvando..." : "Salvar Alterações"}
        </Button>
      </FormCard>
    </Container>
  );
};

export default EditAdminPage;
