// src/styles/FormStyled.js

import styled from "styled-components";

// Usando as variáveis globais de cor para consistência
export const FormWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--color-background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CentralColumn = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  color: var(--color-text-dark);
`;

export const FormCard = styled.div`
  background: white;
  border-radius: 8px; /* Borda menos arredondada */
  padding: 2rem;
  margin: 2rem auto 0;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
  text-align: left; /* Alinhamento do formulário */
`;

export const FormTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  color: var(--color-primary);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Reduzimos o gap para um espaçamento mais limpo */
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px; /* Borda menos arredondada */
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 0 0 2px rgba(95, 188, 191, 0.2);
    outline: none;
  }
  &.uppercase {
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: var(--color-secondary);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const RegisterPrompt = styled.p`
  margin-top: 2rem;
  font-size: 0.95rem;
  color: #555;
`;

export const RegisterButton = styled.button`
  margin-top: 0.5rem;
  background-color: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.6rem 1rem;
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 0 0 2px rgba(95, 188, 191, 0.2);
    outline: none;
  }
  &.uppercase {
    text-transform: uppercase;
  }
`;

export const Message = styled.p`
  text-align: center;
  color: ${(props) => (props.type === "error" ? "red" : "green")};
  font-style: ${(props) => (props.type === "error" ? "normal" : "italic")};
  margin-top: 2rem;
  font-size: 1.1rem;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;
  margin-bottom: 1rem;
  transition: color 0.3s;

  &:hover {
    color: var(--color-secondary);
    text-decoration: underline;
  }
`;
