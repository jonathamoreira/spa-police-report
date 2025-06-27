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

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
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

export const FormCard = styled.form`
  background: linear-gradient(to right, #9ab936, #ffffff);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem auto 0; /* <-- centraliza horizontalmente */
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

// Form estilizado (container do form)
export const StyledForm = styled.div`
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
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #3689b9;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Texto que aparece antes do botão de registrar
export const RegisterPrompt = styled.p`
  margin-top: 2rem;
  font-size: 0.95rem;
  color: #555;
`;

// Botão para redirecionar à página de registro
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
    border-color: #007bff;
    outline: none;
  }
`;
