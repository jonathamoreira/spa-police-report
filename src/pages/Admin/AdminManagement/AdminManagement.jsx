// src/pages/Admin/AdminManagement/AdminManagement.jsx

import React, { useState, useEffect, useContext } from "react";
import api from "../../../services/api";
import { ContentWrapper } from "../AdminPainelStyled";
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveWrapper,
  Table,
  Th,
  Td,
  Button,
  ButtonContainer,
  CardContainer,
  Card,
  CardItem,
  CardLabel,
  CardValue,
} from "./AdminManagementStyled";

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getToken, userId, userRole } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchAdmins = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = getToken();
      const response = await api.get("/admin/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmins(response.data);
    } catch (err) {
      console.error("Erro ao buscar admins:", err);
      setError("Não foi possível carregar a lista de administradores.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  // Adiciona um useEffect para monitorar o estado do usuário
  useEffect(() => {
    // Se o userId for válido, isso indica que o contexto foi carregado
  }, [userId, userRole]);

  const loggedInUserId = userId;
  const loggedInUserRole = userRole;
  const canEditAll = loggedInUserRole === "super_admin";

  const handleDelete = async (adminId) => {
    if (window.confirm("Tem certeza que deseja excluir este administrador?")) {
      try {
        const token = getToken();
        await api.delete(`/admin/${adminId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Administrador excluído com sucesso!");
        fetchAdmins();
      } catch (err) {
        console.error("Erro ao excluir administrador:", err);
        alert("Falha ao excluir o administrador. Verifique sua permissão.");
      }
    }
  };

  const handleEdit = (adminId) => {
    navigate(`/admin/painel/admins/editar/${adminId}`);
  };

  if (loading) {
    return <p>Carregando administradores...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <ContentWrapper>
      <ResponsiveWrapper>
        <h1>Gestão de Administradores</h1>

        {isMobile ? (
          <CardContainer>
            {admins.map((admin) => (
              <Card key={admin._id}>
                <CardItem>
                  <CardLabel>Nome:</CardLabel>
                  <CardValue>{admin.name}</CardValue>
                </CardItem>
                <CardItem>
                  <CardLabel>Matrícula:</CardLabel>
                  <CardValue>{admin.matricula}</CardValue>
                </CardItem>
                <CardItem>
                  <ButtonContainer>
                    {/* Botão de Editar */}
                    {(canEditAll ||
                      (loggedInUserId && admin._id === loggedInUserId)) && (
                      <Button onClick={() => handleEdit(admin._id)}>
                        Editar
                      </Button>
                    )}
                    {/* Botão de Excluir */}
                    {canEditAll &&
                      loggedInUserId &&
                      admin._id !== loggedInUserId && (
                        <Button danger onClick={() => handleDelete(admin._id)}>
                          Excluir
                        </Button>
                      )}
                  </ButtonContainer>
                </CardItem>
              </Card>
            ))}
          </CardContainer>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>Nome</Th>
                <Th>Matrícula</Th>
                <Th>Ações</Th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin._id}>
                  <Td>{admin.name}</Td>
                  <Td>{admin.matricula}</Td>
                  <Td>
                    <ButtonContainer>
                      {/* Botão de Editar */}
                      {(canEditAll ||
                        (loggedInUserId && admin._id === loggedInUserId)) && (
                        <Button onClick={() => handleEdit(admin._id)}>
                          Editar
                        </Button>
                      )}
                      {/* Botão de Excluir */}
                      {canEditAll &&
                        loggedInUserId &&
                        admin._id !== loggedInUserId && (
                          <Button
                            danger
                            onClick={() => handleDelete(admin._id)}
                          >
                            Excluir
                          </Button>
                        )}
                    </ButtonContainer>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {admins.length === 0 && !loading && (
          <p>Nenhum administrador encontrado.</p>
        )}
      </ResponsiveWrapper>
    </ContentWrapper>
  );
};

export default AdminManagement;
