// src/pages/Servicos/Servicos.jsx

import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Footer } from "../../Components/Footer/Footer";

// Importar componentes estilizados do FormStyled para reuso
import { FormCard, Text, Title } from "../../styles/FormStyled";

import styled from "styled-components";

// --- Styled Components para a Estrutura da Página ---

// container principal
export const ServicesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Seção de Introdução
export const IntroSection = styled.section`
  padding: 5rem 1rem;
  padding-top: calc(5rem + 20px); /* Ajuste se a NavBar for fixa */
  text-align: center;
  background: linear-gradient(
    to right,
    #92b936,
    #708d2c
  ); /* Um gradiente para a introdução */
  color: white;

  ${Title} {
    /* Usando o Title do FormStyled */
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: #fff;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  }

  ${Text} {
    /* Usando o Text do FormStyled */
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    color: #eee;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;

// Seção para os Cards de Serviços
export const ServicesGridSection = styled.section`
  padding: 2rem 1rem;
  background-color: #f8f8f8; /* Fundo suave para contraste */
  text-align: center;

  h2 {
    /* Um título para a seção dos cards */
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 3.5rem;
  }

  ${Text} {
    /* Texto descritivo para a seção */
    margin-bottom: 3rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Permite cards ligeiramente maiores */
  gap: 2.5rem; /* Um pouco mais de espaço entre os cards */
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center; /* Garante que o grid esteja centralizado */
`;

// O ServiceCard estende FormCard e adiciona os estilos para imagem e link
export const ServiceCardStyled = styled(FormCard)`
  padding: 2rem; /* Mais padding interno */
  border-radius: 15px; /* Bordas mais arredondadas */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); /* Sombra mais destacada */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%; /* Garante que todos os cards tenham a mesma altura em uma linha */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Para empurrar o botão/link para baixo */

  &:hover {
    transform: translateY(-10px); /* Efeito de elevação maior */
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25); /* Sombra ainda mais pronunciada no hover */
  }

  img {
    width: 100%;
    height: 180px; /* Altura fixa para as imagens */
    object-fit: cover; /* Recorta a imagem para cobrir a área */
    border-radius: 12px; /* Borda da imagem arredondada */
    margin-bottom: 1.5rem; /* Mais espaço abaixo da imagem */
  }

  h3 {
    font-size: 1.8rem; /* Título maior */
    color: #2c3e50;
    margin-bottom: 0.8rem;
    flex-grow: 1; /* Permite que o título ocupe o espaço necessário */
  }

  ${Text} {
    /* Estilizando o Text do FormStyled para dentro do card */
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 1.5rem; /* Mais espaço abaixo da descrição */
  }

  a {
    display: inline-block; /* Para o padding e margem funcionarem */
    margin-top: auto; /* Empurra o link para o final do card */
    padding: 0.8rem 1.5rem;
    background-color: #92b936;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
    align-self: flex-start; /* Alinha o botão à esquerda dentro do card */

    &:hover {
      background-color: #708d2c;
      transform: translateY(-2px); /* Efeito sutil no hover do botão */
    }
  }
`;

// Seção de Chamada para Ação Final (já usamos na Home, podemos copiar)
export const FinalCtaSection = styled.section`
  padding: 3rem 1rem;
  background-color: #e0e6eb;
  text-align: center;
  border-top: 1px solid #cdd4da;

  p {
    font-size: 1.2rem;
    margin-bottom: 0;
    color: #444;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Servicos = () => {
  const servicos = [
    {
      titulo: "Consulta de Infrações",
      descricao:
        "Saiba como consultar suas infrações de trânsito e regularizar sua situação.",
      imagem: "/assets/cnh.jpg", // Certifique-se que o caminho da imagem está correto
      link: "https://servico-exemplo.com/cnh",
    },
    {
      titulo: "Indicação de Condutor",
      descricao:
        "Indique o condutor responsável por infrações registradas em seu veículo.",
      imagem: "/assets/vistoria.jpg",
      link: "https://servico-exemplo.com/vistoria",
    },
    {
      titulo: "Cadastro de recursos",
      descricao:
        "Saiba como cadastrar recursos para multas de trânsito de forma eficiente.",
      imagem: "/assets/multas.jpg",
      link: "https://servico-exemplo.com/multas",
    },
    {
      titulo: "Educação no Trânsito",
      descricao:
        "Acesso a materiais educativos e campanhas de conscientização para um trânsito mais seguro.",
      imagem: "/assets/educacao_transito.jpg", // Exemplo de imagem para um novo serviço
      link: "https://servico-exemplo.com/educacao",
    },
    {
      titulo: "Credencial de Estacionamento",
      descricao:
        "Informações sobre como obter a credencial de estacionamento para idosos e pessoas com deficiência.",
      imagem: "/assets/credencial_estacionamento.jpg", // Exemplo de imagem para um novo serviço
      link: "https://servico-exemplo.com/credencial-estacionamento",
    },
  ];

  return (
    <>
      <NavBar />
      <ServicesPageContainer>
        {/* Seção de Introdução */}
        <IntroSection>
          <Title>Explore Nossos Serviços</Title>
          <Text>
            Aqui você encontra todos os serviços e informações necessários para
            gerenciar suas responsabilidades no trânsito e acessar o suporte que
            precisa.
          </Text>
        </IntroSection>

        {/* Seção Principal de Serviços com Cards */}
        <ServicesGridSection>
          <h2>Serviços Disponíveis</h2>
          <Text
            style={{
              marginBottom: "3.5rem",
              maxWidth: "800px",
              margin: "0 auto 3rem",
            }}
          >
            Simplificamos o acesso a diversos processos e informações
            importantes para condutores e cidadãos.
          </Text>
          <ServicesGrid>
            {servicos.map((servico, index) => (
              <ServiceCardStyled key={index}>
                {" "}
                {/* Usando o novo Styled Component */}
                <img src={servico.imagem} alt={servico.titulo} />
                <h3>{servico.titulo}</h3>
                <Text>{servico.descricao}</Text>{" "}
                {/* Usando o Text do FormStyled */}
                <a
                  href={servico.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar Serviço
                </a>
              </ServiceCardStyled>
            ))}
          </ServicesGrid>
        </ServicesGridSection>

        {/* Seção de Chamada para Ação Final (opcional, igual a da Home) */}
        <FinalCtaSection>
          <p>
            Conte conosco para navegar com segurança e inteligência no universo
            do trânsito.
          </p>
        </FinalCtaSection>
      </ServicesPageContainer>
      <Footer />
    </>
  );
};

export default Servicos;
