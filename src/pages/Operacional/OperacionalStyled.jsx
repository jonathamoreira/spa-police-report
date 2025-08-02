import styled, { keyframes } from "styled-components";
import { Title, Text, Button, FormCard } from "../../styles/FormStyled";

// --- Keyframes para as animações ---
const zoomEffect = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// --- Styled Components Atualizados ---

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  padding: 5rem 1rem;

  ${Title} {
    font-size: 3.8rem;
    margin-bottom: 1.5rem;
    color: #fff;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    z-index: 10;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  ${Text} {
    font-size: 1.4rem;
    max-width: 800px;
    margin-bottom: 3rem;
    color: #eee;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    z-index: 10;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  ${Button} {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    z-index: 10;
    border-radius: 4px;
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: var(--color-secondary);
      border-color: var(--color-secondary);
      transform: scale(1.05);
    }
  }

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

export const CarouselBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: cover;
  background-position: center center;
  transition: background-image 1.5s ease-in-out;
  animation: ${zoomEffect} 6s infinite alternate;
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
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  &:hover {
    color: var(--color-secondary);
  }
`;

export const CasesSection = styled.section`
  padding: 6rem 1rem;
  background-color: var(--color-background-light);
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: 3.5rem;
  }

  ${Text} {
    margin-bottom: 3rem;
  }
`;

export const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CaseCard = styled(FormCard)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 4rem;
    color: var(--color-primary);
    margin-bottom: 1.5rem;
    line-height: 1;
  }

  h3 {
    font-size: 1.6rem;
    color: var(--color-text-dark);
    margin-bottom: 1rem;
    flex-grow: 1;
  }

  p {
    font-size: 1rem;
    color: var(--color-text-dark);
    line-height: 1.5;
  }
`;

export const FinalCtaSection = styled.section`
  padding: 5rem 1rem;
  background-color: var(--color-tertiary);
  text-align: center;

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: var(--color-text-dark);
  }

  ${Button} {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border-radius: 4px;
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: var(--color-secondary);
      border-color: var(--color-secondary);
      transform: scale(1.05);
    }
  }
`;
