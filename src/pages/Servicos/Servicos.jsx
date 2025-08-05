// src/pages/Servicos/Servicos.jsx

import React from "react";
import { Text, Title } from "../../styles/FormStyled";
import {
  ServicesPageContainer,
  IntroSection,
  ServicesGridSection,
  ServicesGrid,
  ServiceCardStyled,
  FinalCtaSection,
} from "./ServicosStyled";

const servicos = [
  {
    titulo: "Consulta de Infrações",
    descricao:
      "Saiba como consultar suas infrações de trânsito e regularizar sua situação.",
    imagem: "/assets/cnh.jpg",
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
    imagem: "/assets/educacao_transito.jpg",
    link: "https://servico-exemplo.com/educacao",
  },
  {
    titulo: "Credencial de Estacionamento",
    descricao:
      "Informações sobre como obter a credencial de estacionamento para idosos e pessoas com deficiência.",
    imagem: "/assets/credencial_estacionamento.jpg",
    link: "https://servico-exemplo.com/credencial-estacionamento",
  },
];

const Servicos = () => {
  return (
    <>
      <ServicesPageContainer>
        <IntroSection>
          <Title>Explore Nossos Serviços</Title>
          <Text>
            Aqui você encontra todos os serviços e informações necessários para
            gerenciar suas responsabilidades no trânsito e acessar o suporte que
            precisa.
          </Text>
        </IntroSection>

        <ServicesGridSection>
          <h2>Serviços Disponíveis</h2>
          <Text>
            Simplificamos o acesso a diversos processos e informações
            importantes para condutores e cidadãos.
          </Text>
          <ServicesGrid>
            {servicos.map((servico, index) => (
              <ServiceCardStyled key={index}>
                <img src={servico.imagem} alt={servico.titulo} />
                <h3>{servico.titulo}</h3>
                <Text>{servico.descricao}</Text>
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

        <FinalCtaSection>
          <p>
            Conte conosco para navegar com segurança e inteligência no universo
            do trânsito.
          </p>
        </FinalCtaSection>
      </ServicesPageContainer>
    </>
  );
};

export default Servicos;
