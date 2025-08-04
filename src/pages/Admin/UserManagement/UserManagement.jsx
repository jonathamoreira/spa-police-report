import React, { useState, useEffect, useContext } from "react";
import api from "../../../services/api";
import { ContentWrapper } from "../AdminPainelStyled";
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
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
} from "./UserManagementStyled";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = getToken();
      const response = await api.get("/user/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Filtra para exibir apenas usuários com a role 'user'
      const regularUsers = response.data.filter((user) => user.role === "user");
      setUsers(regularUsers);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
      setError("Não foi possível carregar a lista de usuários.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (
      window.confirm(
        "Tem certeza que deseja excluir este usuário? Esta ação é irreversível."
      )
    ) {
      try {
        const token = getToken();
        await api.delete(`/user/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Usuário excluído com sucesso!");
        fetchUsers();
      } catch (err) {
        console.error("Erro ao excluir usuário:", err);
        alert("Falha ao excluir o usuário. Verifique sua permissão.");
      }
    }
  };

  const handleEdit = (userId) => {
    // Navega para a futura página de edição de usuário, passando o ID na URL
    navigate(`/admin/painel/usuarios/editar/${userId}`);
  };

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <ContentWrapper>
      <h1>Gerenciamento de Usuários</h1>

      {isMobile ? (
        <CardContainer>
          {users.map((user) => (
            <Card key={user._id}>
              <CardItem>
                <CardLabel>Nome:</CardLabel>
                <CardValue>{user.name}</CardValue>
              </CardItem>
              <CardItem>
                <CardLabel>Email:</CardLabel>
                <CardValue>{user.email}</CardValue>
              </CardItem>
              <CardItem>
                <ButtonContainer>
                  <Button onClick={() => handleEdit(user._id)}>Editar</Button>
                  <Button danger onClick={() => handleDelete(user._id)}>
                    Excluir
                  </Button>
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
              <Th>Email</Th>
              <Th>Ações</Th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <ButtonContainer>
                    <Button onClick={() => handleEdit(user._id)}>Editar</Button>
                    <Button danger onClick={() => handleDelete(user._id)}>
                      Excluir
                    </Button>
                  </ButtonContainer>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {users.length === 0 && !loading && <p>Nenhum usuário encontrado.</p>}
    </ContentWrapper>
  );
};

export default UserManagement;
