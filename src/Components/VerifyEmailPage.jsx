import React, { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../services/api";

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Verificando seu e-mail...");
  const navigate = useNavigate();
  const hasCalledAPI = useRef(false);

  useEffect(() => {
    const verifyToken = async () => {
      // Verifica se a API já foi chamada para evitar duplicação
      if (hasCalledAPI.current) {
        return;
      }

      const token = searchParams.get("token");
      if (!token) {
        setMessage("Token de verificação não encontrado.");
        return;
      }

      hasCalledAPI.current = true; // Marca que a API será chamada

      try {
        await api.get(`/user/verify-email?token=${token}`);
        setMessage(
          "E-mail verificado com sucesso! Redirecionando para o login..."
        );
        setTimeout(() => navigate("/user/login"), 3000);
      } catch (err) {
        setMessage(err.response?.data?.error || "Token inválido ou expirado.");
      }
    };
    verifyToken();
  }, [searchParams, navigate]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Confirmação de E-mail</h1>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmailPage;
