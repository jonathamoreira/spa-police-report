// src/pages/Home/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Footer } from "../../Components/Footer/Footer";
import styled, { keyframes } from "styled-components";

// Importar componentes estilizados do FormStyled para reuso
import { Title, Text, FormCard } from "../../styles/FormStyled";

// Ícone para o indicador de scroll (se desejar)
import { FaArrowDown } from "react-icons/fa";

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

// Container Geral da Página
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: left;
  color: #fff;
  position: relative;
  overflow: hidden;
  padding: 5rem 1rem;
  padding-top: calc(5rem + 80px); /* Ajuste se sua NavBar for fixa */
  padding-bottom: 3rem;

  ${Title} {
    font-size: 4rem;
    margin-bottom: 5rem;
    color: #fff;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    z-index: 10;
    max-width: 500px;
    margin-left: 2%;
  }

  ${Text} {
    font-size: 1.4rem;
    max-width: 800px;
    margin-bottom: 3rem;
    color: #eee;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
    z-index: 10;
    margin-left: 2%;
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

const CarouselBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 1.5s ease-in-out;
  animation: ${zoomEffect} 6s infinite alternate;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2.8rem;
  cursor: pointer;
  z-index: 10;
  animation: ${bounce} 2s infinite;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  &:hover {
    color: #92b936;
  }
`;

// Seção para Artigos
const ArticlesSection = styled.section`
  padding: 6rem 1rem;
  background-color: #fff;
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

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ArticleCard = styled(FormCard)`
  background: white;
  padding: 1.8rem;
  border-radius: 15px;
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
    color: #2c3e50;
    margin-bottom: 0.8rem;
    flex-grow: 1;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  a {
    color: #92b936;
    text-decoration: none;
    font-weight: bold;
    margin-top: auto;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Nova seção para o texto Tema Anual
const SimpleCtaSection = styled.section`
  padding: 3rem 1rem; /* Padding menor */
  background-color: #e0e6eb; /* Fundo mais claro */
  text-align: center;

  p {
    font-size: 1.2rem; /* Um pouco menor */
    margin-bottom: 0; /* Remove margem inferior, pois não há botão */
    color: #444;
    max-width: 800px;
    margin: 0 auto; /* Centraliza o texto */
  }
`;

// Dados para o carrossel da Home
const homeCarouselImages = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

// Dados para os artigos
const homeArticles = [
  {
    id: 1,
    title: "Segurança no Trânsito: Dicas Essenciais",
    content:
      "Mantenha-se seguro com nossas dicas de direção defensiva e prevenção de acidentes.",
    link: "/blog/artigo-1",
  },
  {
    id: 2,
    title: "Como Reportar uma Ocorrência Rapidamente",
    content:
      "Guia passo a passo para utilizar nossa plataforma e agilizar o atendimento de emergências.",
    link: "/faq",
  },
  {
    id: 3,
    title: "A Importância da Sinalização Urbana",
    content:
      "Entenda o papel da sinalização e como ela contribui para um tráfego mais fluido e seguro.",
    link: "/blog/artigo-3",
  },
  {
    id: 4,
    title: "Inovação no Atendimento de Emergências",
    content:
      "Descubra como a tecnologia está transformando a resposta a incidentes de trânsito.",
    link: "/blog/artigo-4",
  },
  {
    id: 5,
    title: "Parceria com a Comunidade: Construindo um Trânsito Melhor",
    content:
      "Nosso compromisso em trabalhar junto com os cidadãos para a segurança viária.",
    link: "/blog/artigo-5",
  },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const articlesSectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % homeCarouselImages.length
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

  const scrollToNextSection = () => {
    if (articlesSectionRef.current) {
      articlesSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar />
      <HomePageContainer>
        <HeroSection>
          <CarouselBackground
            style={{
              backgroundImage: `url(${homeCarouselImages[currentImageIndex]})`,
            }}
          />

          <Text>Desacelere. Seu bem maior é a vida!</Text>

          <ScrollIndicator
            $isVisible={showScrollIndicator}
            onClick={scrollToNextSection}
          >
            <FaArrowDown />
          </ScrollIndicator>
        </HeroSection>

        <ArticlesSection ref={articlesSectionRef}>
          <h2>Destaques e Notícias</h2>
          <Text
            style={{
              marginBottom: "3.5rem",
              maxWidth: "800px",
              margin: "0 auto 3rem",
            }}
          >
            Mantenha-se informado com nossos últimos artigos e atualizações
            sobre segurança viária e serviços da plataforma.
          </Text>
          <ArticlesGrid>
            {homeArticles.map((article) => (
              <ArticleCard key={article.id}>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                {article.link && <a href={article.link}>Leia Mais</a>}
              </ArticleCard>
            ))}
          </ArticlesGrid>
        </ArticlesSection>

        {/* Substituída a FinalCtaSection pela SimpleCtaSection */}
        <SimpleCtaSection>
          <p>
            Junte-se a nós para construir um trânsito mais seguro e eficiente
            para todos.
          </p>
          {/* REMOVIDO: Botão "Comece Agora" */}
        </SimpleCtaSection>
      </HomePageContainer>
      <Footer />
    </>
  );
};

export default Home;
