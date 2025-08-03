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
  const { logout, userName } = useAuth(); // Assume que useAuth fornece logout
  const navigate = useNavigate(); // Para redirecionar após o logout

  const handleLogout = () => {
    logout();
    navigate("/admin/login"); // Redireciona para a página de login após o logout
  };
  return (
    <HeaderContainer>
      <HamburgerButton onClick={toggleSidebar}>☰</HamburgerButton>
      <HeaderTitle>
        {userName ? `Bem-vindo, ${userName}!` : "Bem-vindo, Administrador!"}
      </HeaderTitle>
      <UserDisplay>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </UserDisplay>
    </HeaderContainer>
  );
};

export default AdminHeader;
