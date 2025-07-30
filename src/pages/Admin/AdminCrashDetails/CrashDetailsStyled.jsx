import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #f4f7f6; /* Fundo suave para a página de detalhes */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  max-width: 500px;
`;

export const FormCard = styled.form`
  background: linear-gradient(to right, #e5fd4c, #ffffff);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem auto 0; /* centraliza horizontalmente */
  width: 100%;
  max-width: 800px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const DetailItem = styled.p`
  margin: 10px 0;
  font-weight: bold;
  word-wrap: break-word;
  overflow-y: auto;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: #5a7025;
  color: white;
  border: none;
  margin-top: 1rem;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: #01590d7b; /* Um tom mais escuro do verde no hover */
    transform: translateY(-2px); /* Efeito de "levantar" suave */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Sombra no hover */
  }

  &:active {
    transform: translateY(0); /* "Afunda" de volta no click */
    box-shadow: none;
  }
`;

export const ButtonCancel = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: #5a7025;
  color: white;
  border: none;
  margin-top: 1rem;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: #01590d7b; /* Um tom mais escuro do verde no hover */
    transform: translateY(-2px); /* Efeito de "levantar" suave */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Sombra no hover */
  }

  &:active {
    transform: translateY(0); /* "Afunda" de volta no click */
    box-shadow: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3cbd5a;
    outline: none;
  }
  &.uppercase {
    text-transform: uppercase;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3cbd5a;
    outline: none;
  }
  &.uppercase {
    text-transform: uppercase;
  }
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;
