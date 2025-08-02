// src/pages/Servicos/ServicosStyled.js

import styled from "styled-components";
import { FormCard, Text, Title } from "../../styles/FormStyled";

export const ServicesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const IntroSection = styled.section`
  padding: 5rem 1rem;
  padding-top: calc(5rem + 80px);
  text-align: center;
  background: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-secondary)
  );
  color: white;

  ${Title} {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--color-white);
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  ${Text} {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    color: var(--color-background-light);
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const ServicesGridSection = styled.section`
  padding: 4rem 1rem;
  background-color: var(--color-background-light);
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: var(--color-text-dark);
    margin-bottom: 3.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  ${Text} {
    margin: 0 auto 3rem;
    max-width: 800px;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
`;

export const ServiceCardStyled = styled(FormCard)`
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.8rem;
    color: var(--color-text-dark);
    margin-bottom: 0.8rem;
    flex-grow: 1;
  }

  ${Text} {
    font-size: 1rem;
    color: var(--color-text-dark);
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  a {
    display: inline-block;
    margin-top: auto;
    padding: 0.8rem 1.5rem;
    background-color: var(--color-primary);
    color: var(--color-white);
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
    align-self: flex-start;

    &:hover {
      background-color: var(--color-secondary);
      transform: translateY(-2px);
    }
  }
`;

export const FinalCtaSection = styled.section`
  padding: 3rem 1rem;
  background-color: var(--color-tertiary);
  text-align: center;
  border-top: 1px solid var(--color-tertiary-dark);

  p {
    font-size: 1.2rem;
    margin-bottom: 0;
    color: var(--color-text-dark);
    max-width: 800px;
    margin: 0 auto;
  }
`;
