import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import api from "../../services/api";
import {
  FormWrapper,
  FormCard,
  FormTitle,
  StyledForm,
  Input,
  Button,
  RegisterPrompt,
  RegisterButton,
} from "../../styles/FormStyled";
import { AuthContext } from "../../Context/AuthContext";

export default function LoginUser() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("handleLogin foi chamado!");
    try {
      const response = await api.post("/user/login", {
        email,
        password: senha,
      });

      const { token, user } = response.data;
      const name = user.name;

      login(token, name, "user"); // atualiza o AuthContext

      setErro("");
      navigate("/usuario"); // Redireciona para o dashboard do usuário
    } catch (error) {
      console.error("Erro no login:", error);
      setErro("Email ou senha inválidos.");
    }
  };

  return (
    <FormWrapper>
      <FormCard>
        <FormTitle>Faça seu login</FormTitle>
        <StyledForm onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <Input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Button type="submit">Entrar</Button>
        </StyledForm>

        {erro && <p style={{ color: "red", marginTop: "1rem" }}>{erro}</p>}

        <RegisterPrompt>Não tem uma conta?</RegisterPrompt>
        <RegisterButton onClick={() => navigate("/user/register")}>
          Quero me registrar
        </RegisterButton>
      </FormCard>
    </FormWrapper>
  );
}
