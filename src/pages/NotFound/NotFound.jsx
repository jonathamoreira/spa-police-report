// src/pages/NotFound/NotFound.jsx
import React from "react";

// O mais comum é exportar o componente NotFound como default
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f8f8",
        color: "#333",
      }}
    >
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>A página que você está procurando não existe.</p>
      <a
        href="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Voltar para a Página Inicial
      </a>
    </div>
  );
};

export default NotFound; // Exportando como default
