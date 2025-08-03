import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoLink } from "./NavBarStyled";
import {
  Nav,
  TopBar,
  LogoContainer,
  Hamburger,
  NavLinks,
  BlinkLink,
} from "./NavBarStyled";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <TopBar>
        <LogoContainer>
          <LogoLink to="/" onClick={closeMenu}>
            <h1>Autarquia Municipal de Trânsito</h1>
          </LogoLink>
          <Link to="/admin/login" onClick={closeMenu}>
            <img src="/img-logo.png" alt="imagem" />
          </Link>
        </LogoContainer>

        <Hamburger onClick={() => setIsOpen(!isOpen)} type="button">
          <span />
          <span />
          <span />
        </Hamburger>
      </TopBar>

      <BlinkLink>
        <Link to="/user/login" onClick={closeMenu}>
          Bateu? Chama a equipe aqui
        </Link>
      </BlinkLink>

      <NavLinks $isOpen={isOpen}>
        <li>
          <Link to="/operacional" onClick={closeMenu}>
            Operacional
          </Link>
        </li>
        <li>
          <Link to="/servicos" onClick={closeMenu}>
            Serviços
          </Link>
        </li>
        <li>
          <Link to="/educacao" onClick={closeMenu}>
            Educação
          </Link>
        </li>
        <li>
          <Link to="/contatos" onClick={closeMenu}>
            Contatos
          </Link>
        </li>
      </NavLinks>
    </Nav>
  );
};
