import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ContentWrapper } from "../AdminPainelStyled";
import { AuthContext } from "../../../Context/AuthContext";
import { BaseUrl } from "../../../Api/BaseUrl";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Componentes de estilo simples para a tabela
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

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getToken, getUserId } = useContext(AuthContext); // Pega o ID do admin logado
  const navigate = useNavigate();

  const fetchAdmins = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = getToken();
      const response = await axios.get(`${BaseUrl.URL}/admin/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmins(response.data);
    } catch (err) {
      console.error("Erro ao buscar admins:", err);
      setError("Não foi possível carregar a lista de administradores.", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleDelete = async (adminId) => {
    if (window.confirm("Tem certeza que deseja excluir este administrador?")) {
      try {
        const token = getToken();
        await axios.delete(`${BaseUrl.URL}/admin/${adminId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Administrador excluído com sucesso!");
        fetchAdmins(); // Atualiza a lista
      } catch (err) {
        console.error("Erro ao excluir administrador:", err);
        alert("Falha ao excluir o administrador. Verifique sua permissão.");
      }
    }
  };

  const handleEdit = (adminId) => {
    // Navega para a futura página de edição de admin
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
      <h1>Gestão de Administradores</h1>
      {admins.length > 0 ? (
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
                  {/* Desabilita o botão de excluir o próprio admin logado */}
                  <Button onClick={() => handleEdit(admin._id)}>Editar</Button>
                  <Button
                    danger
                    onClick={() => handleDelete(admin._id)}
                    disabled={admin._id === getUserId()}
                  >
                    Excluir
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Nenhum administrador encontrado.</p>
      )}
    </ContentWrapper>
  );
};

export default AdminManagement;
