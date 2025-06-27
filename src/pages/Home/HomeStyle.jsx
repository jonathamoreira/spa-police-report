import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  padding: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Right = styled.div`
  flex: 1;
`;
