import styled from "styled-components";
import React from "react";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 0.1rem;
  background-color: var(--color-footer-bg);
  color: var(--color-white);
  text-align: center;
  font-size: 0.9rem;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © 2025</p>
    </StyledFooter>
  );
};
