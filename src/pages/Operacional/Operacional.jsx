import { useNavigate } from "react-router-dom";
import { FormWrapper, FormTitle, Button } from "../../styles/FormStyled";

export default function Operacional() {
  const navigate = useNavigate();

  const handleIrParaLogin = () => {
    navigate("/user/login");
  };

  return (
    <FormWrapper style={{ flexDirection: "column", textAlign: "center" }}>
      <FormTitle>Área Operacional</FormTitle>
      <p>
        Bem-vindo à área operacional da plataforma de ocorrências de trânsito.
      </p>
      <p>
        Para registrar ou consultar um protocolo, é necessário realizar o login.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <Button onClick={handleIrParaLogin}>Ir para Login</Button>
      </div>
    </FormWrapper>
  );
}
