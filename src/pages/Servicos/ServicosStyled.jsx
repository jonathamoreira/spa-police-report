import styled from "styled-components";

export const ServicosContainer = styled.div`
  margin-top: 100px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 280px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    margin-top: 16px;
    color: #333;
  }

  p {
    color: #555;
    font-size: 14px;
    margin: 12px 0;
  }

  a {
    color: #92b936;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
