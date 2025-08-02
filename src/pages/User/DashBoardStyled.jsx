import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: 1.8rem;
  color: var(--color-primary);
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const CreateProtocolButton = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-secondary);
  }
`;

export const OccurrencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

export const OccurrenceCard = styled.div`
  background: white;
  border-left: 5px solid var(--color-secondary);
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--color-primary);
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
  }

  p {
    margin: 0;
    color: #555;
    font-size: 0.95rem;
    word-break: break-word;
  }

  strong {
    color: #333;
  }
`;

export const ConfirmationBox = styled.div`
  background: #e8f5e9;
  border-left: 4px solid var(--color-tertiary);
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  p {
    font-size: 1rem;
    color: #388e3c;
    margin-bottom: 1rem;
  }
`;

export const Message = styled.p`
  text-align: center;
  color: ${(props) => (props.type === "error" ? "red" : "#777")};
  font-style: ${(props) => (props.type === "error" ? "normal" : "italic")};
  margin-top: 2rem;
  font-size: 1.1rem;
`;

export const DashboardHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: var(--color-background-light);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const LogoutButton = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;
