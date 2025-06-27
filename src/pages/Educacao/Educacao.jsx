// src/pages/Educacao.jsx
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CarouselContainer, Newsletter } from "./EducacaoStyled";

import {
  FormWrapper,
  FormCard,
  FormTitle,
  StyledForm,
  Input,
  Button,
  TextArea,
  CentralColumn,
} from "../../styles/FormStyled";

const Educacao = () => {
  return (
    <FormWrapper>
      <CentralColumn>
        <div style={{ width: "100%", maxWidth: "1200px" }}>
          {/* Carrossel de imagens */}
          <CarouselContainer>
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
            >
              <div>
                <img src="/assets/educacao1.jpg" alt="Ação 1" />
              </div>
              <div>
                <img src="/assets/educacao2.jpg" alt="Ação 2" />
              </div>
              <div>
                <img src="/assets/educacao3.jpg" alt="Ação 3" />
              </div>
            </Slider>
          </CarouselContainer>

          {/* Newsletter com resumo de ações */}
          <Newsletter>
            <h2>Últimas Ações Educativas</h2>
            <p>
              ✓ Maio Amarelo: Campanhas de conscientização em escolas e vias
              públicas.
            </p>
            <p>✓ Blitz Educativa com participação de agentes e voluntários.</p>
            <p>
              ✓ Oficinas em empresas sobre direção defensiva e segurança no
              trânsito.
            </p>
            <p>
              ✓ Junho Verde: foco em mobilidade sustentável e meio ambiente no
              trânsito.
            </p>
          </Newsletter>

          {/* Formulário de solicitação de evento */}
          <FormCard as="section">
            <FormTitle>Solicitar Ação Educativa</FormTitle>
            <StyledForm onSubmit={(e) => e.preventDefault()}>
              <Input type="text" placeholder="Nome da empresa" required />
              <Input type="date" required />
              <TextArea rows="4" placeholder="Descrição do evento" required />
              <Input
                type="text"
                placeholder="Espaço onde será realizado"
                required
              />
              <Button type="submit">Enviar Solicitação</Button>
            </StyledForm>
          </FormCard>
        </div>
      </CentralColumn>
    </FormWrapper>
  );
};

export default Educacao;
