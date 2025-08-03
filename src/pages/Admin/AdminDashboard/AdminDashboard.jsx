// src/pages/Admin/AdminDashboard/AdminDashboard.jsx

import React, { useState, useEffect, useContext } from "react";
import { ContentWrapper } from "../AdminPainelStyled";
import styled from "styled-components";
import { AuthContext } from "../../../Context/AuthContext";
import api from "../../../services/api";

// Estilos para os cards de métricas
const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  color: #555555;
`;

const CardValue = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  color: #3498db;
`;

const LastCrashCard = styled(Card)`
  background-color: #f9f9f9;
  text-align: left;
  border-left: 5px solid #2980b9;
`;

const LastCrashTitle = styled.h4`
  margin-top: 0;
  color: #2980b9;
`;

const LastCrashDetail = styled.p`
  margin: 5px 0;
  color: #666;
  font-size: 0.9rem;
`;

const AdminDashboard = () => {
  const { getToken } = useContext(AuthContext);
  const [metrics, setMetrics] = useState({
    users: 0,
    admins: 0,
    ocorrencias: 0,
  });
  const [lastCrash, setLastCrash] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const token = getToken();
        const headers = { Authorization: `Bearer ${token}` };

        const usersResponse = await api.get("/user/users/count", { headers });
        const adminsResponse = await api.get("/admin/count", {
          headers,
        });
        const ocorrenciasResponse = await api.get("/crash/count", { headers });
        const lastCrashResponse = await api.get("/crash/last", {
          headers,
        });

        setMetrics({
          users: usersResponse.data.total,
          admins: adminsResponse.data.total,
          ocorrencias: ocorrenciasResponse.data.total,
        });
        setLastCrash(lastCrashResponse.data);
      } catch (err) {
        console.error("Erro ao buscar métricas:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [getToken]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  return (
    <ContentWrapper>
      <h1>Dashboard Administrativo</h1>
      <p>
        Bem-vindo ao painel de controle. Aqui você encontrará um resumo das
        informações.
      </p>

      {loading ? (
        <p>Carregando métricas...</p>
      ) : (
        <CardContainer>
          <Card>
            <CardTitle>Total de Usuários</CardTitle>
            <CardValue>{metrics.users}</CardValue>
          </Card>
          <Card>
            <CardTitle>Total de Administradores</CardTitle>
            <CardValue>{metrics.admins}</CardValue>
          </Card>
          <Card>
            <CardTitle>Total de Ocorrências</CardTitle>
            <CardValue>{metrics.ocorrencias}</CardValue>
          </Card>
          {lastCrash && (
            <LastCrashCard>
              <LastCrashTitle>Última Ocorrência</LastCrashTitle>
              <LastCrashDetail>Name: {lastCrash.name}</LastCrashDetail>
              <LastCrashDetail>
                Description: {lastCrash.description}
              </LastCrashDetail>
              <LastCrashDetail>
                Data: {formatDate(lastCrash.createdAt)}
              </LastCrashDetail>
            </LastCrashCard>
          )}
        </CardContainer>
      )}
    </ContentWrapper>
  );
};

export default AdminDashboard;
