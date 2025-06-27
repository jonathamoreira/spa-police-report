import React from "react";
import {
  FormWrapper,
  FormCard,
  FormTitle,
  Text,
  CentralColumn,
} from "../../styles/FormStyled";
const Servicos = () => {
  const servicos = [
    {
      titulo: "Emissão de CNH",
      descricao: "Saiba como emitir sua carteira de motorista.",
      imagem: "/assets/cnh.jpg",
      link: "https://servico-exemplo.com/cnh",
    },
    {
      titulo: "Agendamento de Vistoria",
      descricao: "Agende a vistoria do seu veículo.",
      imagem: "/assets/vistoria.jpg",
      link: "https://servico-exemplo.com/vistoria",
    },
    {
      titulo: "Multas e Infrações",
      descricao: "Consulte e pague suas multas.",
      imagem: "/assets/multas.jpg",
      link: "https://servico-exemplo.com/multas",
    },
  ];

  return (
    <FormWrapper>
      <CentralColumn>
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {servicos.map((servico, index) => (
            <FormCard key={index} style={{ flex: "1 1 300px" }}>
              <img
                src={servico.imagem}
                alt={servico.titulo}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                }}
              />
              <h3>{servico.titulo}</h3>
              <Text>{servico.descricao}</Text>
              <a
                href={servico.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  padding: "0.6rem 1.2rem",
                  backgroundColor: "#92b936",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Acessar Serviço
              </a>
            </FormCard>
          ))}
        </div>
      </CentralColumn>
    </FormWrapper>
  );
};

export default Servicos;
