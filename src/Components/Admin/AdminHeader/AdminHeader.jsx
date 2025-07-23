// src/Components/Admin/AdminHeader/AdminHeader.jsx
import React from "react";
import { useAuth } from "../../../Context/AuthContext"; // Para o logout
import { useNavigate } from "react-router-dom"; // Para redirecionar após o logout
import {
  HeaderContainer,
  HeaderTitle,
  UserDisplay,
  LogoutButton,
  HamburgerButton,
} from "./AdminHeaderStyled";

const AdminHeader = ({ toggleSidebar }) => {
  const { logout } = useAuth(); // Assume que useAuth fornece logout
  // Você pode obter o nome do admin logado do contexto de autenticação ou de outra forma
  const navigate = useNavigate(); // Para redirecionar após o logout

  const handleLogout = () => {
    logout();
    navigate("/admin/login"); // Redireciona para a página de login após o logout
  };
  return (
    <HeaderContainer>
      <HamburgerButton onClick={toggleSidebar}>☰</HamburgerButton>
      <HeaderTitle>Bem-vindo, Administrador!</HeaderTitle>
      <UserDisplay>
        {/* <p>Olá, [Nome do Admin]</p> */} {/* Adicionar nome do admin aqui */}
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </UserDisplay>
    </HeaderContainer>
  );
};

export default AdminHeader;
