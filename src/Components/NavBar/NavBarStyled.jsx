import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-primary);
  padding: 1rem 2rem;
  color: var(--color-text-dark);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column; // Empilha os elementos em telas pequenas
    padding: 12px;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 24px;
    margin-right: 10px;
    transition: font-size 0.3s;

    @media (max-width: 768px) {
      font-size: 16px; // Fonte menor em telas menores
    }
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    color: var(--color-text-dark);
  }
`;

export const BlinkLink = styled.h2`
  a {
    color: var(--color-text-dark);
    font-size: 18px;
    text-decoration: none;
    animation: blink 2s infinite;
    text-shadow: 1px 1px 2px var(--color-text-shadow);

    &:hover {
      color: var(--color-highlight);
      transform: scale(1.05);
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    margin-top: 10px;
  }
`;

export const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  background: none;
  border: none;
  padding: 0;

  span {
    width: 25px;
    height: 3px;
    background-color: var(--color-text-dark);
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 0;
  padding: 0;
  font-weight: bold;

  li a {
    text-decoration: none;
    color: inherit;
    letter-spacing: 0.5px;
    text-shadow: 0 1px 2px var(--color-text-shadow);
  }

  li {
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.3s, transform 0.2s ease;

    &:hover {
      color: var(--color-highlight);
      transform: translate(-2px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: var(--color-primary);
    position: relative;
    overflow: hidden;
    max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in-out;

    li {
      padding: 1rem 12px;
      font-size: 16px;
    }
  }
`;
