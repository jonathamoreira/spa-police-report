import { useState } from "react";

import { useNavigate } from "react-router-dom"; // Importe useNavigate
import api from "../../services/api"; // Importe o serviço de API
import {
  FormWrapper,
  FormCard,
  FormTitle,
  StyledForm,
  Input,
  Button,
  Message,
  RegisterPrompt,
  RegisterButton,
} from "../../styles/FormStyled";
export default function RegisterAdmin() {
  // Renomeado para RegisterAdmin
  const [name, setName] = useState("");
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Novo estado para mensagens de erro
  const [success, setSuccess] = useState(""); // Novo estado para mensagens de sucesso
  const navigate = useNavigate(); // Hook para navegação programática

  const handleCadastro = async (e) => {
    e.preventDefault();
    setError(""); // Limpa erros anteriores
    setSuccess(""); // Limpa sucessos anteriores

    if (!name || !matricula || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Envia os dados do novo administrador para o backend
      await api.post("/admin/", {
        name,
        matricula: Number(matricula),
        password,
      });
      setSuccess(
        "Administrador cadastrado com sucesso! Redirecionando para o login..."
      );
      setName("");
      setMatricula("");
      setPassword("");
      // Redireciona para a página de login após o registro bem-sucedido
      setTimeout(() => {
        navigate("/admin/login");
      }, 2000);
    } catch (err) {
      console.error("Erro no cadastro do admin:", err);
      setError(
        err.response?.data?.message || "Erro no cadastro. Tente novamente."
      );
    }
  };

  return (
    <FormWrapper>
      <FormCard>
        <FormTitle>Cadastro de Administrador</FormTitle>
        <StyledForm onSubmit={handleCadastro}>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Matrícula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Message type="error">{error}</Message>}
          {success && <Message type="success">{success}</Message>}
          <Button type="submit">Cadastrar</Button>
        </StyledForm>
        <RegisterPrompt>
          Já tem uma conta de admin?
          <RegisterButton onClick={() => navigate("/admin/login")}>
            Faça login aqui
          </RegisterButton>
        </RegisterPrompt>
      </FormCard>
    </FormWrapper>
  );
}
