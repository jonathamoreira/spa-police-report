import { useState } from "react";
import axios from "axios";
import {
  FormWrapper,
  FormCard,
  Input,
  FormTitle,
  Button,
  Title,
} from "../../styles/FormStyled";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:4000/protocolo", formData, {
        //"https://apicrash.onrender.com/crash"
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage("Protocolo criado com sucesso!");
      setFormData({
        name: "",
        phone: "",
        plate1: "",
        plate2: "",
        address: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("Erro ao criar o protocolo.");
    }
  };

  return (
    <FormWrapper>
      <FormCard onSubmit={handleSubmit}>
        <Title>Registrar Ocorrência</Title>

        <FormTitle>Nome</FormTitle>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormTitle>Telefone</FormTitle>
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <FormTitle>Placa 1</FormTitle>
        <Input
          name="plate1"
          value={formData.plate1}
          onChange={handleChange}
          required
        />

        <FormTitle>Placa 2 (opcional)</FormTitle>
        <Input name="plate2" value={formData.plate2} onChange={handleChange} />

        <FormTitle>Endereço</FormTitle>
        <Input
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <FormTitle>Descrição</FormTitle>
        <Input
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <Button type="submit">Enviar</Button>
        {message && <p>{message}</p>}
      </FormCard>
    </FormWrapper>
  );
};

export default CreateCrash;
