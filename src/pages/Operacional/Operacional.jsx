// src/pages/Operacional.jsx

import React, { useState, useEffect, useRef } from "react"; // Adicione useRef
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Button, Title, Text, FormCard } from "../../styles/FormStyled";

// Importe um ícone de seta para baixo (ex: FaArrowDown do Font Awesome)
import { FaArrowDown } from "react-icons/fa";

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

// --- Styled Components ---

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeroSection = styled.section`
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
  }

  ${Text} {
    font-size: 1.4rem;
    max-width: 800px;
    margin-bottom: 3rem;
    color: #eee;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    z-index: 10;
  }

  ${Button} {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    z-index: 10;
    border-radius: 50px;
    background-color: #92b936;
    border: 2px solid #92b936;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #708d2c;
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

const CarouselBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: cover;
  background-position: center;
  transition: background-image 1.5s ease-in-out;
  animation: ${zoomEffect} 6s infinite alternate;
`;

// --- NOVO STYLED COMPONENT PARA O ÍCONE FLUTUANTE ---
const ScrollIndicator = styled.div`
  position: absolute; /* Posição absoluta em relação à HeroSection */
  bottom: 30px; /* Distância da parte inferior */
  left: 50%;
  transform: translateX(-50%); /* Centraliza horizontalmente */
  color: white;
  font-size: 2.5rem; /* Tamanho do ícone */
  cursor: pointer;
  z-index: 10; /* Acima do overlay */
  animation: ${bounce} 2s infinite; /* Animação de pulo */
  opacity: ${(props) =>
    props.$isVisible ? 1 : 0}; /* Controla a visibilidade */
  transition: opacity 0.5s ease-in-out; /* Transição suave de opacidade */

  &:hover {
    color: #92b936; /* Mudar cor no hover */
  }
`;
// --- FIM NOVO STYLED COMPONENT ---

const CasesSection = styled.section`
  padding: 6rem 1rem;
  background-color: #f8f8f8;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 3.5rem;
  }

  ${Text} {
    margin-bottom: 3rem;
  }
`;

const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CaseCard = styled(FormCard)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
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
    color: #92b936;
    margin-bottom: 1.5rem;
    line-height: 1;
  }

  h3 {
    font-size: 1.6rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    flex-grow: 1;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }
`;

const FinalCtaSection = styled.section`
  padding: 5rem 1rem;
  background-color: #e0e6eb;
  text-align: center;

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: #444;
  }

  ${Button} {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    background-color: #92b936;
    border: 2px solid #92b936;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #708d2c;
      transform: scale(1.05);
    }
  }
`;

// Dados para o carrossel (ajuste com suas próprias imagens)
const carouselImages = ["/ope1.jpg", "/ope2.jpg", "/ope3.jpg", "/ope4.jpg"];

// Dados para os cards de casos
const caseTypes = [
  {
    icon: "⚠️",
    title: "Sinistro de Trânsito",
    description: "Acidentes com ou sem vítimas, colisões, capotamentos.",
  },
  {
    icon: "🚧",
    title: "Interrupção de Fluxo",
    description:
      "Bloqueio de vias, obras, eventos, congestionamentos atípicos.",
  },
  {
    icon: "⚡",
    title: "Fio de Alta Tensão Caído",
    description: "Cabos elétricos na via, risco de eletrocussão.",
  },
  {
    icon: "🚦",
    title: "Semáforo Apagado/Defeito",
    description: "Sinalização inoperante ou com mau funcionamento.",
  },
  {
    icon: "🚶‍♀️",
    title: "Denúncia de Calçada",
    description: "Obstruções, buracos ou irregularidades que afetam pedestres.",
  },
  {
    icon: "🗑️",
    title: "Descarte Irregular",
    description: "Acúmulo de lixo ou entulho que impede o tráfego.",
  },
];

export default function Operacional() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true); // Novo estado
  const casesSectionRef = useRef(null); // Ref para a seção de casos

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Lógica para esconder o indicador de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Esconde o indicador se o usuário rolou mais de 100px (aproximadamente após a HeroSection)
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIrParaLogin = () => {
    navigate("/user/login");
  };

  const scrollToNextSection = () => {
    // Rola suavemente para a próxima seção (CasesSection)
    if (casesSectionRef.current) {
      casesSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageContainer>
      <HeroSection>
        <CarouselBackground
          style={{
            backgroundImage: `url(${carouselImages[currentImageIndex]})`,
          }}
        />
        <Title>Bem-vindo à Área Operacional</Title>
        <Text>
          Sua plataforma para registrar e acompanhar ocorrências de trânsito e
          infraestrutura urbana com agilidade e eficiência. Nossa equipe está
          pronta para atuar.
        </Text>
        <Button onClick={handleIrParaLogin}>Acessar Plataforma</Button>

        {/* Renderiza o ícone de scroll aqui */}
        <ScrollIndicator
          $isVisible={showScrollIndicator}
          onClick={scrollToNextSection}
        >
          <FaArrowDown />
        </ScrollIndicator>
      </HeroSection>

      {/* Seção de Tipos de Casos - Adicione a ref aqui */}
      <CasesSection ref={casesSectionRef}>
        <h2>Quando Acionar a Equipe?</h2>
        <Text
          style={{
            marginBottom: "3.5rem",
            maxWidth: "800px",
            margin: "0 auto 3rem",
          }}
        >
          Confira os principais tipos de ocorrências que podem ser reportadas
          através de nossa plataforma para que a equipe operacional possa agir
          rapidamente.
        </Text>
        <CasesGrid>
          {caseTypes.map((caso, index) => (
            <CaseCard key={index}>
              <div className="icon">{caso.icon}</div>
              <h3>{caso.title}</h3>
              <p>{caso.description}</p>
            </CaseCard>
          ))}
        </CasesGrid>
      </CasesSection>

      {/* Seção de Chamada para Ação Final */}
      <FinalCtaSection>
        <p>
          Pronto para registrar uma ocorrência ou verificar o status de um
          protocolo?
        </p>
        <Button onClick={handleIrParaLogin}>Fazer Login Agora</Button>
      </FinalCtaSection>
    </PageContainer>
  );
}
