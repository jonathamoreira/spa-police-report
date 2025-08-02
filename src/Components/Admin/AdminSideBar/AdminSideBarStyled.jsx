// src/Components/Admin/AdminSidebar/AdminSidebarStyled.js

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: var(--color-background-dark);
  color: var(--color-text-light);
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (min-width: 769px) {
    transform: translateX(0);
    transition: none;
  }

  @media (max-width: 768px) {
    width: 250px;
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ $isOpen }) =>
      $isOpen ? "2px 0 15px rgba(0, 0, 0, 0.3)" : "none"};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: 1px solid var(--color-tertiary-dark);
  color: var(--color-white);
  font-size: 1.2em;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: 5px;
  &:hover {
    background-color: var(--color-background-dark);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--color-tertiary-dark);
  text-align: center;
`;

export const SidebarTitle = styled.h1`
  font-size: 1.8em;
  color: var(--color-primary);
  margin: 0;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

export const NavItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: var(--color-text-light);
  text-decoration: none;
  font-size: 1.1em;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--color-background-darker);
    color: var(--color-primary);
  }

  &.active {
    background-color: var(--color-primary);
    color: var(--color-white);
    font-weight: bold;
  }
`;
