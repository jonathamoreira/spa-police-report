import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

import { Title, Text, Button } from "../../styles/FormStyled";

import {
  PageContainer,
  HeroSection,
  CarouselBackground,
  ScrollIndicator,
  CasesSection,
  CasesGrid,
  CaseCard,
  FinalCtaSection,
} from "./OperacionalStyled";

const carouselImages = ["/ope1.jpg", "/ope2.jpg", "/ope3.jpg", "/ope4.jpg"];

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
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const casesSectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
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
    if (casesSectionRef.current) {
      casesSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
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
          <ScrollIndicator
            $isVisible={showScrollIndicator}
            onClick={scrollToNextSection}
          >
            <FaArrowDown />
          </ScrollIndicator>
        </HeroSection>

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

        <FinalCtaSection>
          <p>
            Pronto para registrar uma ocorrência ou verificar o status de um
            protocolo?
          </p>
          <Button onClick={handleIrParaLogin}>Fazer Login Agora</Button>
        </FinalCtaSection>
      </PageContainer>
    </>
  );
}
