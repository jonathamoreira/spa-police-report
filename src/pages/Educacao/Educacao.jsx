// src/pages/Educacao/Educacao.jsx
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

//import { NavBar } from "../../Components/NavBar/NavBar";
//import { Footer } from "../../Components/Footer/Footer";
import {
  Title,
  Text,
  SubTitle,
  FormCard,
  StyledForm,
  FormTitle,
  Input,
  TextArea,
  Button,
} from "../../styles/FormStyled";
import {
  EducacaoPageContainer,
  HeroSection,
  HeroCarouselItem,
  HeroContent,
  ScrollIndicator,
  LatestActionsSection,
  ActionsGrid,
  ActionCard,
  RequestFormSection,
  FinalCtaSection,
} from "./EducacaoStyled";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const Educacao = () => {
  const latestActionsSectionRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      img: "/assets/educa3.jpg",
      alt: "Imagem da campanha de educação para o trânsito 1",
      title: "Educação para um Trânsito Mais Seguro",
      text: "Promovemos a conscientização e a formação de condutores e pedestres responsáveis, visando um futuro mais seguro e consciente no trânsito.",
    },
    {
      img: "/assets/educa4.jpg",
      alt: "Imagem da campanha de educação para o trânsito 2",
      title: "Cidadania no Trânsito",
      text: "Nossa missão é educar para a vida, transformando o trânsito em um espaço de respeito, segurança e harmonia para todos.",
    },
    {
      img: "/assets/educa5.jpg",
      alt: "Imagem da campanha de educação para o trânsito 3",
      title: "Formando Motoristas do Amanhã",
      text: "Investimos em programas educativos para crianças e jovens, plantando a semente da responsabilidade desde cedo.",
    },
  ];

  // Alterna o slide a cada 2 segundos
  useInterval(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, 5000); // Ajuste o tempo conforme necessário

  const scrollToNextSection = () => {
    latestActionsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
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
      <EducacaoPageContainer>
        <HeroSection>
          <AnimatePresence initial={false}>
            {heroSlides.map(
              (slide, index) =>
                index === activeSlide && (
                  <HeroCarouselItem
                    key={index}
                    $backgroundImage={slide.img}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <HeroContent>
                      <Title>{slide.title}</Title>
                      <Text>{slide.text}</Text>
                    </HeroContent>
                  </HeroCarouselItem>
                )
            )}
          </AnimatePresence>
          <ScrollIndicator onClick={scrollToNextSection}>
            <FaArrowDown />
          </ScrollIndicator>
        </HeroSection>

        <LatestActionsSection ref={latestActionsSectionRef}>
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
    </>
  );
};

export default Educacao;
