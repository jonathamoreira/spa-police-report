// src/pages/Home/Home.jsx

import React, { useState, useEffect, useRef } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Footer } from "../../Components/Footer/Footer";
import { FaArrowDown } from "react-icons/fa";

import { Title, Text } from "../../styles/FormStyled";

import {
  HomePageContainer,
  HeroSection,
  CarouselBackground,
  ScrollIndicator,
  ArticlesSection,
  ArticlesGrid,
  ArticleCard,
  SimpleCtaSection,
} from "./HomeStyled";

const homeCarouselImages = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

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
          <Title>Bem-vindo ao Nosso Portal do Trânsito</Title>
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
          <Text>
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

        <SimpleCtaSection>
          <p>
            Junte-se a nós para construir um trânsito mais seguro e eficiente
            para todos.
          </p>
        </SimpleCtaSection>
      </HomePageContainer>
      <Footer />
    </>
  );
};

export default Home;
