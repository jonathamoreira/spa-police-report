// src/pages/Contato/ContatosStyled.js

import styled from "styled-components";
import { FormWrapper, FormTitle, Text } from "../../styles/FormStyled";

export const ContatoPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const IntroSection = styled.section`
  padding: 5rem 1rem;
  padding-top: calc(5rem + 80px);
  text-align: center;
  background-color: var(--color-background-light);
  color: var(--color-text-dark);

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  ${Text} {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    color: var(--color-text-dark);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const StyledFormWrapper = styled(FormWrapper)`
  padding: 4rem 1rem;
  background-color: var(--color-tertiary);
`;

export const StyledFormTitle = styled(FormTitle)`
  color: var(--color-primary);
`;
