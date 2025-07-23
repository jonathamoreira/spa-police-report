import styled from "styled-components";

export const FormWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #92b936, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem; /* Ajuste este tamanho se quiser diferente */
  color: #2c3e50; /* Uma cor mais escura para contraste */
  margin-bottom: 2rem;
  font-weight: 600; /* Um pouco menos negrito que o Title */

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem; /* Aumentei um pouco o gap para os cards no dashboard */
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
  color: #2c3e50;
`;

export const FormCard = styled.div`
  background: linear-gradient(to right, #9ab936, #ffffff);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem auto 0; /* centraliza horizontalmente */
  width: 100%;
  max-width: 800px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const FormTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #2c3e50;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const Button = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: #01590d7b;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: #5a7025; /* Um tom mais escuro do verde no hover */
    transform: translateY(-2px); /* Efeito de "levantar" suave */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Sombra no hover */
  }

  &:active {
    transform: translateY(0); /* "Afunda" de volta no click */
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
  border: 2px solid #9ab936;
  color: #000000;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #92b936;
    color: white;
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

// componente de mensagem para loading, erro, etc.
export const Message = styled.p`
  text-align: center;
  color: ${(props) => (props.type === "error" ? "red" : "#777")};
  font-style: ${(props) => (props.type === "error" ? "normal" : "italic")};
  margin-top: 2rem;
  font-size: 1.1rem;
`;
