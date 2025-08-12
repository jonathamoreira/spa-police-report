import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
  FormWrapper,
  FormCard,
  StyledForm,
  FormTitle,
  Input,
  Button,
} from "../../styles/FormStyled";

export default function CadastroUsuario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Novo estado para mensagens
  const [isSuccess, setIsSuccess] = useState(false); // Novo estado para rastrear o sucesso
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    console.log("handleCadastro foi chamado!");
    try {
      const response = await api.post("/user/register", {
        name,
        email,
        password,
      });
      // Se a resposta for 201, mostramos a mensagem do backend
      if (response.status === 201) {
        setMessage(response.data.message);
        setIsSuccess(true);
        alert(
          "Cadastro realizado com sucesso! Verifique seu e-mail para ativar sua conta."
        );
        // Limpamos os campos para um novo cadastro ou para manter a tela limpa
        setName("");
        setEmail("");
        setPassword("");
        navigate("/user/login"); // Redireciona para a página de login
      }
    } catch (err) {
      // Aqui, o erro 409 pode ser tratado de forma mais específica
      const errorMessage =
        err.response?.data?.error || "Erro no cadastro. Tente novamente.";
      setMessage(errorMessage);
      setIsSuccess(false);
    }
  };

  return (
    <FormWrapper>
      <FormCard>
        <StyledForm onSubmit={handleCadastro}>
          <FormTitle>Cadastro de Usuário</FormTitle>
          {/* Nova seção para exibir a mensagem */}
          {message && (
            <p style={{ color: isSuccess ? "green" : "red" }}>{message}</p>
          )}
          {/* ... seus Inputs e Button continuam aqui ... */}
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Cadastrar</Button>
        </StyledForm>
      </FormCard>
    </FormWrapper>
  );
}
