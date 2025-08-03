import React, { useState, useEffect, useContext } from "react";
import api from "../../../services/api";
import { ContentWrapper } from "../AdminPainelStyled";
import { AuthContext } from "../../../Context/AuthContext";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Componentes de estilo para a tabela
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  word-wrap: break-word;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#3498db")};

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getToken } = useContext(AuthContext);
  const navigate = useNavigate();

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
      {users.length > 0 ? (
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
                  <Button onClick={() => handleEdit(user._id)}>Editar</Button>
                  <Button danger onClick={() => handleDelete(user._id)}>
                    Excluir
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Nenhum usuário encontrado.</p>
      )}
    </ContentWrapper>
  );
};

export default UserManagement;
