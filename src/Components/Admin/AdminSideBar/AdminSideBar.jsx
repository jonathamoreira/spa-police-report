// src/Components/Admin/AdminSidebar/AdminSidebar.jsx
import React from "react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarTitle,
  NavList,
  NavItem,
  StyledNavLink,
  CloseButton,
} from "./AdminSidebarStyled";

const AdminSidebar = ({ $isOpen, toggleSidebar }) => {
  // Recebendo $isOpen
  return (
    <SidebarContainer $isOpen={$isOpen}>
      {/* Botão "X" visível APENAS em telas menores */}
      {window.innerWidth <= 768 && (
        <CloseButton onClick={toggleSidebar}>X</CloseButton>
      )}

      <SidebarHeader>
        <SidebarTitle>Painel Admin</SidebarTitle>
      </SidebarHeader>
      <NavList>
        <NavItem>
          <StyledNavLink to="/admin/painel" onClick={toggleSidebar}>
            Dashboard
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/admin/painel/ocorrencias" onClick={toggleSidebar}>
            Ocorrências
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/admin/painel/usuarios" onClick={toggleSidebar}>
            Usuários
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/admin/painel/admins" onClick={toggleSidebar}>
            Administradores
          </StyledNavLink>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default AdminSidebar;
