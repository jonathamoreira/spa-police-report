// src/pages/Contato/Contato.jsx

import React from "react";
import { FormGrid, FormCard, Text } from "../../styles/FormStyled";
import {
  ContatoPageContainer,
  IntroSection,
  StyledFormWrapper,
  StyledFormTitle,
} from "./ContatosStyled";

const contatosSetores = [
  {
    setor: "Atendimento Geral",
    email: "atendimento@exemplo.com",
    telefone: "(11) 99999-0001",
    endereco: "Rua A, 123",
  },
  {
    setor: "Financeiro",
    email: "financeiro@exemplo.com",
    telefone: "(11) 99999-0002",
    endereco: "Rua B, 456",
  },
  {
    setor: "Suporte Técnico",
    email: "suporte@exemplo.com",
    telefone: "(11) 99999-0003",
    endereco: "Rua C, 789",
  },
  {
    setor: "Recursos Humanos",
    email: "rh@exemplo.com",
    telefone: "(11) 99999-0004",
    endereco: "Rua D, 101",
  },
];

const Contato = () => {
  return (
    <ContatoPageContainer>
      <IntroSection>
        <h1>Fale Conosco</h1>
        <Text>
          Entre em contato com os setores responsáveis para obter suporte,
          informações e esclarecer suas dúvidas.
        </Text>
      </IntroSection>

      <StyledFormWrapper>
        <FormGrid>
          {contatosSetores.map(({ setor, email, telefone, endereco }, i) => (
            <FormCard key={i}>
              <StyledFormTitle>{setor}</StyledFormTitle>
              <Text>
                <strong>Email:</strong> {email}
              </Text>
              <Text>
                <strong>Telefone:</strong> {telefone}
              </Text>
              <Text>
                <strong>Endereço:</strong> {endereco}
              </Text>
            </FormCard>
          ))}
        </FormGrid>
      </StyledFormWrapper>
    </ContatoPageContainer>
  );
};

export default Contato;
