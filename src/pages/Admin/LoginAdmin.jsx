// src/pages/Admin/LoginAdmin.jsx
import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom"; // Importe useNavigate
import { AuthContext } from "../../Context/AuthContext";
import api from "../../services/api";
import {
  FormWrapper, // Importe o FormWrapper para o layout de fundo
  FormCard, // Importe o FormCard para o card do formulário
  FormTitle, // Importe FormTitle para o título
  StyledForm, // Importe StyledForm para o formulário
  Input, // Importe Input para os campos de entrada
  Button, // Importe Button para o botão de submit
  Message, // Importe Message para mensagens de erro/sucesso
  RegisterPrompt, // Para a mensagem "Não tem conta?"
  RegisterButton, // Para o botão de registro
} from "../../styles/FormStyled"; // Caminho para seu FormStyled.js

export default function LoginAdmin() {
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Novo estado para mensagens de erro
  const [success, setSuccess] = useState(""); // Novo estado para mensagens de sucesso
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook para navegação programática

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Limpa erros anteriores
    setSuccess(""); // Limpa sucessos anteriores

    if (!matricula || !password) {
      setError("Por favor, preencha a matrícula e a senha.");
      return;
    }

    try {
      const response = await api.post("/admin/login", {
        matricula: Number(matricula),
        password,
      });
      const { token, name, role } = response.data; // Supondo que o token seja retornado na resposta
      if (token && role && name) {
        login(token, name, role);
        //login(response.data.token, "admin");
        setSuccess(`Login de ${name} realizado com sucesso!`); // Mensagem de sucesso
        // Redireciona o admin para o painel após um pequeno delay para ver a mensagem de sucesso
        setTimeout(() => {
          navigate("/admin/painel");
        }, 1500);
      } else {
        setError("Login realizado, seja bem-vindo!"); // Mensagem generica
        login(token, role, "Admin"); // Faz o login, mas com um nome genérico
        setTimeout(() => {
          navigate("/admin/painel");
        }, 1500);
      }
    } catch (err) {
      console.error("Erro no login do admin:", err);
      setError(
        err.response?.data?.message ||
          "Erro no login do admin. Tente novamente."
      );
    }
  };

  return (
    <FormWrapper>
      {" "}
      {/* Container principal com o fundo */}
      <FormCard>
        {" "}
        {/* Card que envolve o formulário */}
        <FormTitle>Login Admin</FormTitle>
        <StyledForm onSubmit={handleLogin}>
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
          <Button type="submit">Entrar</Button>
        </StyledForm>
        <RegisterPrompt>
          Não tem uma conta de admin?
          <RegisterButton onClick={() => navigate("/admin/register")}>
            Registre-se aqui
          </RegisterButton>
        </RegisterPrompt>
      </FormCard>
    </FormWrapper>
  );
}
