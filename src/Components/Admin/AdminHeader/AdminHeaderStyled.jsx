// src/Components/Admin/AdminHeader/AdminHeaderStyled.js
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 20px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px; /* Arredondamento */
  margin: 20px 20px 0 20px; /* Margens para dentro do MainContent */

  @media (min-width: 769px) {
    .hamburguer-button {
      display: none; /* Esconde o botão hamburguer em telas grandes */
    }
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    margin: 10px 10px 0 10px;
  }
`;

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;

  @media (min-width: 769px) {
    display: none; /* Esconde o botão em desktop */
  }
`;

export const HeaderTitle = styled.h2`
  color: #333;
  margin: 0;
  font-size: 1.8em;

  @media (max-width: 768px) {
    font-size: 1.4em;
  }
`;

export const UserDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const LogoutButton = styled.button`
  background-color: #dc3545; /* Vermelho para logout */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;
