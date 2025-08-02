import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--color-white);
  padding: 20px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin: 20px 20px 0 20px;

  @media (min-width: 769px) {
    .hamburguer-button {
      display: none;
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
  color: var(--color-text-dark);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const HeaderTitle = styled.h2`
  color: var(--color-text-dark);
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
  background-color: var(--color-danger);
  color: var(--color-white);
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-danger-dark);
  }
`;
