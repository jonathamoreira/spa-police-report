import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
          --color-primary: #92b936;      
        --color-secondary: #78913e;
        --color-tertiary: #e0e6eb;
        --color-tertiary-dark: #cdd4da;

        --color-background-light: #eee;
        --color-background-dark: #2c3e50;
        --color-background-darker: #34495e; // Adicionada para o hover da sidebar

        --color-text-dark: #2c3e50;
        --color-text-light: #ecf0f1;
        --color-white: #ffffff;

        --color-danger: #d9534f;
        --color-danger-dark: #c9302c;

        --color-footer-bg: #1a1a1a;

        --color-highlight: #f8e11a;
    --color-text-shadow: rgba(0, 0, 0, 0.3);
    }

  

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-background-light);
    color: var(--color-text-dark);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
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

export const Button = styled.button`
  padding: 0.85rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px; /* Borda menos arredondada */
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;

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
