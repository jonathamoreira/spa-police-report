// src/pages/Educacao/Educacao.jsx

import React, { useState, useEffect, useRef } from "react"; // Adicionado useEffect, useRef
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components"; // Adicionado keyframes
import { FaArrowDown } from "react-icons/fa"; // Ícone de seta para baixo

// Importar NavBar e Footer
import { NavBar } from "../../Components/NavBar/NavBar";
import { Footer } from "../../Components/Footer/Footer";

// Importar componentes estilizados do FormStyled para reuso
import {
  FormCard,
  FormTitle,
  StyledForm,
  Input,
  Button,
  TextArea,
  Title,
  Text,
  SubTitle, // SubTitle para cabeçalhos de seção
} from "../../styles/FormStyled";

// --- Keyframes para as animações (COPIADOS DE OPERACIONAL) ---
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

// --- Styled Components (AGORA SIM, ESPELHANDO OPERACIONAL.JSX) ---

export const EducacaoPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Hero Section (COPIADO E ADAPTADO DE OPERACIONAL)
export const HeroSection = styled.section`
  min-height: 80vh; /* Altura da hero section */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  padding: 5rem 1rem;
  padding-top: calc(5rem + 80px); /* Ajuste se a NavBar for fixa */

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
    /* Overlay escuro */
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

// Carousel de fundo para a Hero Section (COPIADO DE OPERACIONAL)
export const HeroCarouselBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: contain;
  //background-repeat: no-repeat;
  background-position: center;
  transition: background-image 1.5s ease-in-out;
  animation: ${zoomEffect} 6s infinite alternate; /* Animação de zoom */
`;

// Ícone de scroll na Hero Section (COPIADO DE OPERACIONAL)
export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10;
  animation: ${bounce} 2s infinite; /* Animação de pulo */
  opacity: ${(props) =>
    props.$isVisible ? 1 : 0}; /* Controla a visibilidade */
  transition: opacity 0.5s ease-in-out;

  &:hover {
    color: #92b936;
  }
`;

// SEÇÃO CARROSSEL DE DESTAQUE (similar a CasesSection, mas com Slider)
export const HighlightsSection = styled.section`
  padding: 6rem 1rem;
  background-color: #f8f8f8; /* Fundo claro */
  text-align: center;
  max-width: 1200px; /* Alinhar com a largura máxima dos cases */
  margin: 0 auto;

  ${SubTitle} {
    font-size: 2.8rem; /* Tamanho do título da seção */
    color: #2c3e50;
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
      background-color: #92b936;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const EducacaoCarouselContainer = styled.div`
  width: 100%;
  max-width: 800px; /* Largura do carrossel dentro da seção */
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 450px; /* Altura do carrossel */
    object-fit: cover;
  }

  .slick-dots {
    bottom: 15px;
    li button:before {
      font-size: 10px;
      color: #92b936;
    }
    li.slick-active button:before {
      color: #708d2c;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 300px;
    }
  }
`;

// SEÇÃO Últimas Ações Educativas (COMO CASESGRID E CASECARD)
export const LatestActionsSection = styled.section`
  padding: 6rem 1rem;
  background-color: #eaf1f7; /* Alterna a cor de fundo */
  text-align: center;

  ${SubTitle} {
    font-size: 2.8rem;
    color: #2c3e50;
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
      background-color: #92b936;
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
  max-width: 1200px; /* Largura máxima similar a CasesGrid */
  margin: 0 auto;
`;

export const ActionCard = styled(FormCard)`
  /* Reutiliza FormCard base */
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default; /* Não é clicável como os cases */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }

  .icon {
    /* Estilo para o ícone/emoji do card */
    font-size: 3.5rem; /* Menor que o da Operacional */
    color: #92b936;
    margin-bottom: 1rem;
    line-height: 1;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }
`;

// SEÇÃO DO FORMULÁRIO (MENOR, COM PADDING PARA AJUSTAR A ALTURA VISUAL)
export const RequestFormSection = styled.section`
  padding: 4rem 1rem; /* Padding ajustado para ser mais compacto */
  background-color: #f8f8f8; /* Alterna a cor de fundo */
  text-align: center;
  min-height: 50vh; /* Altura mínima para a seção */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza verticalmente o conteúdo */
  align-items: center;

  ${SubTitle} {
    font-size: 2.8rem;
    color: #2c3e50;
    margin-bottom: 3rem; /* Espaço menor para o título do form */
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
      background-color: #92b936;
      border-radius: 2px;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  ${FormCard} {
    max-width: 550px; /* LARGURA DO FORMULÁRIO BEM MENOR AGORA */
    margin: 0 auto;
    padding: 2.5rem; /* Padding ajustado para o tamanho menor */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); /* Sombra ajustada */
  }

  ${FormTitle} {
    font-size: 1.2rem; /* Título dos labels menor */
    margin-bottom: 0.8rem; /* Menos espaçamento */
    color: #333;
    text-align: left;
  }

  ${Input}, ${TextArea} {
    margin-bottom: 0.8rem; /* Menos espaçamento */
    padding: 0.9rem; /* Padding ajustado */
    font-size: 0.95rem;
    border-radius: 8px;
  }

  ${Button} {
    padding: 0.9rem 2rem; /* Padding ajustado */
    font-size: 1rem;
    border-radius: 50px;
    background-color: #92b936;
    border: 2px solid #92b936;
    transition: all 0.3s ease;
    &:hover {
      background-color: #708d2c;
      transform: scale(1.02);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;

// Seção de Chamada para Ação Final (COPIADA DE OPERACIONAL)
export const FinalCtaSection = styled.section`
  padding: 5rem 1rem;
  background-color: #e0e6eb; /* Mesma cor da Operacional */
  text-align: center;

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: #444;
    max-width: 800px;
    margin: 0 auto;
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

const Educacao = () => {
  // Imagens para o carrossel de fundo da Hero Section (APENAS 3 OU 4 IMAGENS DE ALTA QUALIDADE)
  const heroBackgroundImages = [
    "/assets/educa3.jpg",
    "/assets/educa4.jpg",
    "/assets/educa5.jpg", // Substitua por suas imagens reais
  ];

  // Imagens para o Carrossel de Destaque (dentro da página)
  const educacaoCarouselImages = ["/assets/educa1.jpg", "/assets/educa2.jpg"];

  // Configurações do Slider para o carrossel de destaque
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Dados das últimas ações educativas (como cards)
  const latestActions = [
    {
      icon: "📚", // Emoji para ícone
      description:
        "Campanhas de conscientização em escolas e vias públicas, impactando mais de 5.000 estudantes.",
    },
    {
      icon: "🚔",
      description:
        "Blitz Educativa com participação de agentes e voluntários em 15 pontos estratégicos, resultando em 2.000 abordagens.",
    },
    {
      icon: "🏢",
      description:
        "Oficinas em 8 empresas sobre direção defensiva e segurança no trânsito, capacitou 800 colaboradores.",
    },
    {
      icon: "🏍️",
      description:
        "Entrega e instalação de antenas corta-pipas para mais de 2000 motociclistas, aumentando a segurança nas vias.",
    },
    {
      icon: "🗓️",
      description:
        "Semana Nacional do Trânsito: Palestras e atividades interativas para todas as idades, alcançando 3.500 participantes.",
    },
    {
      icon: "🧒",
      description:
        "Programa 'Trânsito Legal' para Educação Infantil: Atividades lúdicas para crianças em 10 escolas, formando pequenos cidadãos conscientes.",
    },
    {
      icon: "♻️",
      description:
        "Curso de Reciclagem para Condutores Infratores: 4 turmas formadas, com foco em reeducação e segurança.",
    },
  ];

  // Lógica para o carrossel de fundo da Hero Section
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const highlightsSectionRef = useRef(null); // Ref para a seção de destaques
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImageIndex(
        (prevIndex) => (prevIndex + 1) % heroBackgroundImages.length
      );
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(interval);
  }, [heroBackgroundImages.length]);

  // Lógica para esconder o indicador de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Esconde se rolou mais de 100px
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    if (highlightsSectionRef.current) {
      highlightsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Estado e handlers do formulário
  const [formData, setFormData] = useState({
    companyName: "",
    eventDate: "",
    eventDescription: "",
    eventSpace: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário de solicitação:", formData);
    alert("Sua solicitação foi enviada! Entraremos em contato em breve.");
    setFormData({
      companyName: "",
      eventDate: "",
      eventDescription: "",
      eventSpace: "",
    });
  };

  return (
    <>
      <NavBar />
      <EducacaoPageContainer>
        {/* HERO SECTION - REPLICADO DO OPERACIONAL */}
        <HeroSection>
          <HeroCarouselBackground
            style={{
              backgroundImage: `url(${heroBackgroundImages[currentHeroImageIndex]})`,
            }}
          />
          <Title>Educação para um Trânsito Mais Seguro</Title>
          <Text>
            Promovemos a conscientização e a formação de condutores e pedestres
            responsáveis, visando um futuro mais seguro e consciente no
            trânsito.
          </Text>
          <Button onClick={scrollToNextSection}>Saiba Mais</Button>{" "}
          {/* Botão para rolar */}
          <ScrollIndicator
            $isVisible={showScrollIndicator}
            onClick={scrollToNextSection}
          >
            <FaArrowDown />
          </ScrollIndicator>
        </HeroSection>

        {/* SEÇÃO CARROSSEL DE DESTAQUE (highlights) */}
        <HighlightsSection ref={highlightsSectionRef}>
          {" "}
          {/* Ref para o scroll */}
          <SubTitle>Nossas Ações em Destaque</SubTitle>
          <EducacaoCarouselContainer>
            <Slider {...sliderSettings}>
              {educacaoCarouselImages.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Ação Educativa ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </EducacaoCarouselContainer>
        </HighlightsSection>

        {/* SEÇÃO ÚLTIMAS AÇÕES EDUCATIVAS - FORMATO DE CARDS (REPLICADO DO CASESGRID) */}
        <LatestActionsSection>
          <SubTitle>Últimas Iniciativas e Resultados</SubTitle>
          <ActionsGrid>
            {latestActions.map((action, index) => (
              <ActionCard key={index}>
                <div className="icon">{action.icon}</div>
                <p>{action.description}</p>
              </ActionCard>
            ))}
          </ActionsGrid>
        </LatestActionsSection>

        {/* SEÇÃO DO FORMULÁRIO - AGORA MENOR E CENTRALIZADO */}
        <RequestFormSection>
          <SubTitle>Solicite uma Ação Educativa Personalizada</SubTitle>
          <FormCard as="div">
            <StyledForm onSubmit={handleSubmit}>
              <FormTitle as="label">Nome da Empresa/Instituição</FormTitle>
              <Input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Ex: Auto Escola X, Escola Municipal Y"
                required
              />
              <FormTitle as="label">Data Preferencial do Evento</FormTitle>
              <Input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
              <FormTitle as="label">Descrição do Evento/Solicitação</FormTitle>
              <TextArea
                rows="4" /* Diminuí as linhas para um formulário menor */
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleChange}
                placeholder="Detalhe o tipo de ação desejada, público-alvo, objetivos..."
                required
              />
              <FormTitle as="label">
                Local (Espaço onde será realizado)
              </FormTitle>
              <Input
                type="text"
                name="eventSpace"
                value={formData.eventSpace}
                onChange={handleChange}
                placeholder="Auditório, sala de aula, espaço público..."
                required
              />
              <Button type="submit">Enviar Solicitação</Button>
            </StyledForm>
          </FormCard>
        </RequestFormSection>

        {/* SEÇÃO DE CHAMADA PARA AÇÃO FINAL - REPLICADO DO OPERACIONAL */}
        <FinalCtaSection>
          <p>
            Invista no conhecimento para um futuro com trânsito mais seguro e
            consciente.
          </p>
          <Button onClick={() => console.log("Botão de CTA final clicado")}>
            Entre em Contato
          </Button>
        </FinalCtaSection>
      </EducacaoPageContainer>
      <Footer />
    </>
  );
};

export default Educacao;
