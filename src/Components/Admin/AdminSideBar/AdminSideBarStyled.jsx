// src/Components/Admin/AdminSidebar/AdminSidebarStyled.js
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #2c3e50; /* Cor escura para a sidebar */
  color: #ecf0f1; /* Texto claro */
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed; /* Fixa a sidebar */
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000; /* Garante que fique acima de outros elementos */

  // Estilos para desktop (acima de 768px)
  @media (min-width: 769px) {
    // Mostrar a sidebar por padrão em telas maiores
    transform: translateX(0); // Garante que esteja visível em desktop
    transition: none; // Remove a transição quando não é necessário
  }

  // Estilo para telas menores
  @media (max-width: 768px) {
    width: 250px;
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out; /* Transição suave para abrir/fechar */
    box-shadow: ${({ $isOpen }) =>
      $isOpen ? "2px 0 15px rgba(0, 0, 0, 0.3)" : "none"};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  font-size: 1.2em;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 769px) {
    display: none; // Esconde o botão "X" em desktop
  }
`;

export const SidebarHeader = styled.div`
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

export const SidebarTitle = styled.h1`
  font-size: 1.8em;
  color: #92b936; /* Cor de destaque */
  margin: 0;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1; /* Ocupa espaço disponível */
`;

export const NavItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.1em;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #34495e; /* Um tom mais claro no hover */
    color: #92b936;
  }

  &.active {
    background-color: #92b936; /* Cor de destaque para o link ativo */
    color: #ffffff;
    font-weight: bold;
  }
`;
