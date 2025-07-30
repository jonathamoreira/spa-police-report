import styled, { keyframes } from "styled-components";

// Animação para o spinner de carregamento
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ResponsiveTableWrapper = styled.div`
  overflow-x: auto; // Habilita rolagem horizontal em telas menores
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  h1 {
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap; // Permite que os controles quebrem a linha em telas pequenas
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  width: 300px; // Largura fixa para desktop

  @media (max-width: 768px) {
    width: 100%; // Ocupa a largura total em mobile
    max-width: 300px; // Limita a largura máxima em mobile
  }
`;

export const FilterSelect = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  background-color: white;
  width: 200px; // Largura fixa para desktop

  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto; // Garante que a tabela possa rolar se for muito larga
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px; // Garante uma largura mínima para a tabela, permitindo rolagem horizontal
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  color: #555;
`;

export const TableBody = styled.tbody``;

export const TableCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  color: #333;
  word-break: break-word; // Evita quebra de palavras longas
`;

export const ActionButton = styled.button`
  background-color: ${({ primary, danger }) =>
    primary ? "#007bff" : danger ? "#dc3545" : "#6c757d"};
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ primary, danger }) =>
      primary ? "#0056b3" : danger ? "#c82333" : "#5a6268"};
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.8em;
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
  background-color: ${({ status }) => {
    switch (status) {
      case "pendente":
        return "#ffc107"; // Amarelo
      case "em_progresso":
        return "#17a2b8"; // Azul claro
      case "resolvido":
        return "#28a745"; // Verde
      default:
        return "#6c757d"; // Cinza padrão
    }
  }};
`;

export const Message = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.2em;
  color: ${({ type }) => (type === "error" ? "#dc3545" : "#555")};
`;

export const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${rotate} 1s linear infinite;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const PaginationButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
