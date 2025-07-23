import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #92b936;
  padding: 12px 24px;
  color: #333333;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-right: 10px;
    font-size: 24px;
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  h1 {
    font-size: 24px;
    margin-right: 10px;
  }

  &:hover {
    color: #000; /* ou outro efeito visual */
  }
`;

export const BlinkLink = styled.h2`
  a {
    color: #333333;
    font-size: 18px;
    text-decoration: none;
    animation: blink 2s infinite;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

    &:hover {
      color: #e91e63;
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
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  margin-left: auto;

  span {
    width: 25px;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
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
    letter-spacing: 0cap.5px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  li {
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.3s, transform 0.2s ease;

    &:hover {
      color: rgb(250, 250, 14);
      transform: translate(-2px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-top: 10px;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;
