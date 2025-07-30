import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BaseUrl } from "../../../Api/BaseUrl";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import {
  Container,
  Title,
  FormCard,
  DetailItem,
  Input,
  Button,
  ButtonCancel,
} from "../AdminCrashDetails/CrashDetailsStyled";

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getToken } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getToken();
        const response = await axios.get(`${BaseUrl.URL}/user/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const user = response.data;
        setFormData({
          name: user.name,
          email: user.email,
          // Não incluímos a senha para evitar vazamento ou sobre-escrita acidental
        });
      } catch (err) {
        console.error("Erro ao buscar detalhes do usuário:", err);
        setError("Não foi possível carregar os dados do usuário.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
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

    try {
      const token = getToken();
      await axios.patch(`${BaseUrl.URL}/user/users/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess("Usuário atualizado com sucesso!");
      setTimeout(() => {
        navigate("/admin/painel/usuarios", { replace: true });
      }, 1000);
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Falha ao atualizar usuário.");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p>Carregando dados do usuário...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <Container>
      <Title>Editar Usuário {id.substring(0, 8)}...</Title>
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
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
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

export default EditUserPage;
