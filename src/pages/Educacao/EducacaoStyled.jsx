// src/pages/Educacao/EducacaoStyled.jsx
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  Title as SharedTitle,
  SubTitle as SharedSubTitle,
  Text as SharedText,
  Button as SharedButton,
  FormCard as SharedFormCard,
} from "../../styles/FormStyled";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

export const EducacaoPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// --- Seção Hero e Carrossel de Fundo ---
export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 5rem 1rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    min-height: 75vh;
  }
`;

export const HeroCarouselItem = styled(motion.div)`
  position: absolute; /* Mudança para permitir sobreposição */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; /* Evita que a imagem se repita */
  background-color: var(
    --color-primary
  ); /* Adiciona uma cor de fundo para o espaço vazio */
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
  }
`;

export const HeroContent = styled.div`
  color: white;
  z-index: 10;
  max-width: 800px;
  padding: 0 1rem;

  ${SharedTitle} {
    font-size: 3.8rem;
    margin-bottom: 1.5rem;
    color: #fff;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  ${SharedText} {
    font-size: 1.4rem;
    margin-bottom: 3rem;
    color: #eee;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10;
  animation: ${bounce} 2s infinite;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    color: var(--color-tertiary);
  }
`;

// --- Seção de Últimas Ações ---
export const LatestActionsSection = styled.section`
  padding: 6rem 1rem;
  background-color: var(--color-tertiary);
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  ${SharedSubTitle} {
    font-size: 2.8rem;
    color: var(--color-primary);
    margin-bottom: 4rem;
    position: relative;
    display: inline-block;
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export const ActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ActionCard = styled(SharedFormCard)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 3.5rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
    line-height: 1;
  }

  p {
    font-size: 1rem;
    color: var(--color-text-dark);
    line-height: 1.5;
  }
`;

// --- Seção de Formulário ---
export const RequestFormSection = styled.section`
  padding: 4rem 1rem;
  background-color: var(--color-background-light);
  text-align: center;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  ${SharedSubTitle} {
    font-size: 2.8rem;
    color: var(--color-primary);
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

  ${SharedFormCard} {
    max-width: 550px;
    margin: 0 auto;
    padding: 2.5rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

// --- Seção Final ---
export const FinalCtaSection = styled.section`
  padding: 3rem 1rem;
  background-color: var(--color-primary);
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: white;
    max-width: 800px;
    margin: 0 auto 2rem;
  }

  ${SharedSubTitle} {
    color: white;
    margin-bottom: 1rem;
  }
`;
