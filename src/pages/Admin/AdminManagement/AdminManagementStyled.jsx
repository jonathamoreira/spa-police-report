// src/pages/Admin/AdminManagement/AdminManagementStyled.js

import styled from "styled-components";

// Componentes para a tabela (desktop)
export const ResponsiveWrapper = styled.div`
  overflow-x: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  h1 {
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  // Oculta a tabela em telas menores
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  word-wrap: break-word;
`;

// Componentes para os cards (mobile)
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;

  // Oculta os cards em telas maiores
  @media (min-width: 769px) {
    display: none;
  }
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export const CardItem = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.9em;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
`;

export const CardLabel = styled.span`
  font-weight: bold;
  color: #555;
  margin-right: 5px;
`;

export const CardValue = styled.span`
  color: #333;
  word-break: break-word;
`;

// Componentes compartilhados
export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#3498db")};

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.8em;
  }
`;
