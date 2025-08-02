// src/pages/Home/HomeStyled.js

import styled, { keyframes } from "styled-components";
import { Title, Text, FormCard } from "../../styles/FormStyled";

// --- Keyframes para as animações ---

const zoomEffect = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

// --- Styled Components Atualizados ---

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: left;
  color: var(--color-white);
  position: relative;
  overflow: hidden;
  padding: 5rem 1rem;
  padding-top: calc(5rem + 80px);
  padding-bottom: 3rem;

  ${Title} {
    font-size: 4rem;
    margin-bottom: 5rem;
    color: var(--color-white);
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    z-index: 10;
    max-width: 500px;
    margin-left: 2%;

    @media (max-width: 768px) {
      font-size: 2.8rem;
      margin-bottom: 2rem;
    }
  }

  ${Text} {
    font-size: 1.4rem;
    max-width: 800px;
    margin-bottom: 3rem;
    color: var(--color-background-light);
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
    z-index: 10;
    margin-left: 2%;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 5;
  }
`;

export const CarouselBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: cover; /* ALTERAÇÃO: 'contain' para 'cover' */
  background-position: center;
  transition: background-image 1.5s ease-in-out;
  animation: ${zoomEffect} 6s infinite alternate;
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-white);
  font-size: 2.8rem;
  cursor: pointer;
  z-index: 10;
  animation: ${bounce} 2s infinite;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  &:hover {
    color: var(--color-primary);
  }
`;

export const ArticlesSection = styled.section`
  padding: 6rem 1rem;
  background-color: var(--color-white);
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: var(--color-text-dark);
    margin-bottom: 3.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  ${Text} {
    margin: 0 auto 3rem; /* CORREÇÃO: Removido o estilo inline */
    max-width: 800px;
  }
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ArticleCard = styled(FormCard)`
  background: var(--color-background-light);
  padding: 1.8rem;
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.5rem;
    color: var(--color-text-dark);
    margin-bottom: 0.8rem;
    flex-grow: 1;
  }

  p {
    font-size: 1rem;
    color: var(--color-text-dark);
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: bold;
    margin-top: auto;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SimpleCtaSection = styled.section`
  padding: 3rem 1rem;
  background-color: var(--color-tertiary);
  text-align: center;

  p {
    font-size: 1.2rem;
    margin-bottom: 0;
    color: var(--color-text-dark);
    max-width: 800px;
    margin: 0 auto;
  }
`;
