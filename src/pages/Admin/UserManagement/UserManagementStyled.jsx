// src/pages/Admin/UserManagement/UserManagementStyled.js

import styled from "styled-components";

// Componentes de estilo para a tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

// Componentes de estilo para os cards (mobile)
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;

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
