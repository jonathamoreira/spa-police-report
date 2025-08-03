import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook
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
  const navigate = useNavigate(); // Instancia o hook

  const handleCadastro = async (e) => {
    e.preventDefault();
    console.log("handleCadastro foi chamado!");
    try {
      await api.post("/user/register", {
        name,
        email,
        password,
      });
      alert("Usuário cadastrado com sucesso!");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/user/login"); // Redireciona para a página de login
    } catch (err) {
      alert(
        "Erro no cadastro: " +
          (err.response?.data?.message || "Tente novamente")
      );
    }
  };

  return (
    <FormWrapper>
      <FormCard>
        <StyledForm onSubmit={handleCadastro}>
          <FormTitle>Cadastro de Usuário</FormTitle>
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
