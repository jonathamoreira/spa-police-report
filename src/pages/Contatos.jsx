import React from "react";
import {
  FormWrapper,
  FormCard,
  FormTitle,
  FormGrid,
  Text,
} from "../styles/FormStyled";

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

  {
    setor: "Recursos Humanos",
    email: "rh@exemplo.com",
    telefone: "(11) 99999-0004",
    endereco: "Rua D, 101",
  },
];

const Contato = () => {
  return (
    <FormWrapper>
      <FormGrid>
        {contatosSetores.map(({ setor, email, telefone, endereco }, i) => (
          <FormCard key={i}>
            <FormTitle>{setor}</FormTitle>
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
    </FormWrapper>
  );
};

export default Contato;
