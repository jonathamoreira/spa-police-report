// src/pages/EducacaoStyled.jsx
import styled from "styled-components";

export const CarouselContainer = styled.div`
  margin-bottom: 40px;

  img {
    width: 70%;
    height: auto;
    margin: 0 auto;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const Newsletter = styled.section`
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 16px;
    color: #333;
  }

  p {
    margin-bottom: 12px;
    color: #555;
    font-size: 15px;
  }
`;
