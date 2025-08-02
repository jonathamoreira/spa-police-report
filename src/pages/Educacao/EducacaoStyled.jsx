import styled, { keyframes } from "styled-components";
import {
  Title,
  SubTitle,
  Text,
  Button,
  FormCard,
  FormTitle,
  Input,
  TextArea,
} from "../../styles/FormStyled";

// --- Keyframes para as animações ---
const zoomEffect = keyframes`
  0% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
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

export const EducacaoPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Hero Section (agora com as novas cores)
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
  //padding-top: calc(5rem + 80px);

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

export const HeroCarouselBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: cover;
  background-position: center;
  transition: background-image 1.5s ease-in-out;
  animation: ${zoomEffect} 4s infinite alternate;
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
    color: var(--color-tertiary);
  }
`;

export const HighlightsSection = styled.section`
  padding: 6rem 1rem;
  background-color: var(--color-background-light);
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  ${SubTitle} {
    font-size: 2.8rem;
    color: var(--color-primary);
    margin-bottom: 4rem;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -10px;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: var(--color-secondary);
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const EducacaoCarouselContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 450px;
    object-fit: contain;
  }

  .slick-dots {
    bottom: 15px;
    li button:before {
      font-size: 10px;
      color: var(--color-primary);
    }
    li.slick-active button:before {
      color: var(--color-secondary);
    }
  }

  @media (max-width: 768px) {
    img {
      height: 300px;
    }
  }
`;

export const LatestActionsSection = styled.section`
  padding: 6rem 1rem;
  background-color: var(--color-tertiary);
  text-align: center;

  ${SubTitle} {
    font-size: 2.8rem;
    color: var(--color-primary);
    margin-bottom: 4rem;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -10px;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: var(--color-secondary);
      border-radius: 2px;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
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

export const ActionCard = styled(FormCard)`
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

export const RequestFormSection = styled.section`
  padding: 4rem 1rem;
  background-color: var(--color-background-light);
  text-align: center;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${SubTitle} {
    font-size: 2.8rem;
    color: var(--color-primary);
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -10px;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: var(--color-secondary);
      border-radius: 2px;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  ${FormCard} {
    max-width: 550px;
    margin: 0 auto;
    padding: 2.5rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  ${FormTitle} {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    color: var(--color-text-dark);
    text-align: left;
  }

  ${Input}, ${TextArea} {
    margin-bottom: 0.8rem;
    padding: 0.9rem;
    font-size: 0.95rem;
    border-radius: 4px;
  }

  ${Button} {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    border-radius: 4px;
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);

    &:hover {
      background-color: var(--color-secondary);
      border-color: var(--color-secondary);
      transform: scale(1.02);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const FinalCtaSection = styled.section`
  padding: 5rem 1rem;
  background-color: var(--color-primary);
  text-align: center;
  color: white;

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: white;
    max-width: 800px;
    margin: 0 auto 2rem;
  }

  ${SubTitle} {
    color: white;
    margin-bottom: 1rem;
  }

  ${Button} {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border-radius: 4px;
    background-color: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background-color: var(--color-secondary);
      border-color: var(--color-secondary);
      transform: scale(1.05);
    }
  }
`;
