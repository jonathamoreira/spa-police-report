import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowDown } from "react-icons/fa";

import { NavBar } from "../../Components/NavBar/NavBar";
import { Footer } from "../../Components/Footer/Footer";
import {
  Button,
  Title,
  Text,
  SubTitle,
  FormCard,
  StyledForm,
  FormTitle,
  Input,
  TextArea,
} from "../../styles/FormStyled";
import {
  EducacaoPageContainer,
  HeroSection,
  HeroCarouselBackground,
  ScrollIndicator,
  HighlightsSection,
  EducacaoCarouselContainer,
  LatestActionsSection,
  ActionsGrid,
  ActionCard,
  RequestFormSection,
  FinalCtaSection,
} from "./EducacaoStyled";

const Educacao = () => {
  const heroBackgroundImages = [
    "/assets/educa3.jpg",
    "/assets/educa4.jpg",
    "/assets/educa5.jpg",
  ];

  const educacaoCarouselImages = ["/assets/educa1.jpg", "/assets/educa2.jpg"];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const latestActions = [
    {
      icon: "📚",
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

  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const highlightsSectionRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImageIndex(
        (prevIndex) => (prevIndex + 1) % heroBackgroundImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroBackgroundImages.length]);

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

  const scrollToNextSection = () => {
    if (highlightsSectionRef.current) {
      highlightsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <Button onClick={scrollToNextSection}>Saiba Mais</Button>
          <ScrollIndicator
            $isVisible={showScrollIndicator}
            onClick={scrollToNextSection}
          >
            <FaArrowDown />
          </ScrollIndicator>
        </HeroSection>

        <HighlightsSection ref={highlightsSectionRef}>
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
                rows="4"
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

        <FinalCtaSection>
          <SubTitle>Trânsito seguro é responsabilidade de todos</SubTitle>
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
