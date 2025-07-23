// src/pages/Admin/AdminPainelStyled.js
import styled from "styled-components";

export const AdminPainelContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f7f6; /* Fundo suave para o painel */
  width: 100%;
  overflow-x: hidden; /* Evita rolagem indesejada */
`;

export const MainContent = styled.div`
  flex-grow: 1; /* Ocupa o restante do espaço */
  display: flex;
  flex-direction: column;
  transition: padding-left 0.3s ease; /* Transição suave para o padding */

  @media (min-width: 769px) {
    padding-left: ${({ isSidebarOpen }) =>
      isSidebarOpen ? "250px" : "0px"}; /* Ajuste para a sidebar */
    transition: padding-left 0.3s ease; /* Transição suave */
  }

  @media (max-width: 768px) {
    padding-left: 0; /* Remove o padding em telas pequenas */
  }
`;

export const Overlay = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
    z-index: 999; /* Um pouco menor que o z-index da sidebar */
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #ffffff; /* Fundo branco para o conteúdo principal */
  margin: 20px; /* Margem ao redor do conteúdo */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow-y: auto;

  @media (max-width: 768px) {
    margin: 10px;
    padding: 15px;
    width: calc(100% - 20px); /* Ajusta a largura com base na margem */
  }
`;
