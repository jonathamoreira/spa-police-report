// src/pages/User/CreateCrash.jsx
import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../Api/BaseUrl"; // Ajuste o caminho se necessário
import { useNavigate } from "react-router-dom";

// Importar todos os styled components necessários
import {
  FormWrapper,
  FormCard,
  Input,
  FormTitle,
  Button,
  Title,
  StyledForm,
  TextArea,
  Message,
} from "../../styles/FormStyled"; // Ajuste o caminho se necessário

const CreateCrash = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plate1: "",
    plate2: "",
    address: "",
    description: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  // Número de telefone para contato
  const contactPhone = "(XX) XXXXX-XXXX"; // Substitua pelo número real da equipe/central

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    if (
      !formData.name ||
      !formData.phone ||
      !formData.plate1 ||
      !formData.address ||
      !formData.description
    ) {
      setMessage("Por favor, preencha todos os campos obrigatórios.");
      setMessageType("error");
      return;
    }

    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        setMessage("Você precisa estar logado para registrar uma ocorrência.");
        setMessageType("error");
        navigate("/user/login");
        return;
      }

      await axios.post(`${BaseUrl.URL}/crash`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Em vez de exibir a mensagem aqui, vamos passá-la para o Dashboard
      // setMessage("Protocolo criado com sucesso!"); // Pode remover esta linha se a mensagem for apenas no dashboard
      // setMessageType("success");

      setFormData({
        name: "",
        phone: "",
        plate1: "",
        plate2: "",
        address: "",
        description: "",
      });

      // Redireciona para o dashboard, passando a mensagem e o telefone no state
      navigate("/usuario", {
        state: {
          successMessage:
            "Protocolo criado com sucesso! Uma viatura está sendo enviada ao local.",
          contactPhone: contactPhone,
          showConfirmation: true, // Flag para exibir a mensagem no dashboard
        },
      });
    } catch (err) {
      console.error("Erro ao criar o protocolo:", err);
      setMessage(
        "Erro ao criar o protocolo. Verifique seus dados e tente novamente."
      );
      setMessageType("error");
    }
  };

  return (
    <FormWrapper>
      <FormCard as="div">
        <Title>Registrar Nova Ocorrência</Title>
        <StyledForm onSubmit={handleSubmit}>
          <FormTitle>Nome Completo</FormTitle>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
          />
          <FormTitle>Telefone</FormTitle>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(XX) XXXXX-XXXX"
            required
          />
          <FormTitle>Placa do Veículo 1</FormTitle>
          <Input
            type="text"
            name="plate1"
            value={formData.plate1}
            onChange={handleChange}
            placeholder="Ex: ABC-1234 ou ABC1D23"
            maxLength="7"
            required
            className="uppercase"
          />
          <FormTitle>Placa do Veículo 2 (Opcional)</FormTitle>
          <Input
            type="text"
            name="plate2"
            value={formData.plate2}
            onChange={handleChange}
            placeholder="Ex: DEF-5678 (se houver outro veículo)"
            maxLength="7"
            className="uppercase"
          />
          <FormTitle>Endereço da Ocorrência</FormTitle>
          <Input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Rua, número, bairro, cidade, estado"
            rows="3"
            required
          />
          <FormTitle>Descrição Detalhada</FormTitle>
          <TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descreva o que aconteceu em detalhes"
            rows="5"
            required
            className="uppercase"
          />
          <Button type="submit">Registrar Ocorrência</Button>
          {message && <Message type={messageType}>{message}</Message>}
        </StyledForm>
      </FormCard>
    </FormWrapper>
  );
};

export default CreateCrash;
