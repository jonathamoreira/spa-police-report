// src/pages/Admin/AdminDashboard/AdminDashboard.jsx
import React from "react";
import { ContentWrapper } from "../AdminPainelStyled"; // Reutiliza o ContentWrapper do pai

const AdminDashboard = () => {
  return (
    <ContentWrapper>
      <h1>Dashboard Administrativo</h1>
      <p>
        Bem-vindo ao painel de controle. Aqui você encontrará um resumo das
        informações.
      </p>
      {/* Adicione cards de resumo aqui */}
    </ContentWrapper>
  );
};

export default AdminDashboard;
