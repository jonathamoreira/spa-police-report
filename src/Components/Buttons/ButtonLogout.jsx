import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styled from "styled-components";

// Botão estilizado (pode adaptar ao seu padrão visual)
const LogoutButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #c9302c;
  }
`;

export default function ButtonLogout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/"); // redireciona para home
  };

  return <LogoutButton onClick={handleClick}>Sair</LogoutButton>;
}
