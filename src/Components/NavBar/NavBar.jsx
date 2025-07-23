import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoLink } from "./NavBarStyled";
import {
  Nav,
  LogoContainer,
  Hamburger,
  NavLinks,
  BlinkLink,
} from "./NavBarStyled";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <LogoContainer>
        <LogoLink to="/">
          <h1>Autarquia Municipal de Trânsito</h1>
        </LogoLink>
        <img src="/img-logo.png" alt="imagem" />
      </LogoContainer>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <BlinkLink>
        <Link to="/operacional">Bateu? Chama a equipe aqui</Link>
      </BlinkLink>

      {/*
        <a
          href="https://wa.me/5585912345678"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bateu? Chama a equipe aqui
        </a>
        */}

      <NavLinks $isOpen={isOpen}>
        <li>
          <Link to="/operacional">Operacional</Link>
        </li>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
        <li>
          <Link to="/educacao">Educação</Link>
        </li>
        <li>
          <Link to="/contatos">Contatos</Link>
        </li>
      </NavLinks>
    </Nav>
  );
};
