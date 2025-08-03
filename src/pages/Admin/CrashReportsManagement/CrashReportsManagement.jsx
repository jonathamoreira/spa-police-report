// src/pages/Admin/CrashReportsManagement/CrashReportsManagement.jsx
import React, { useState, useEffect, useContext, useCallback } from "react";
import api from "../../../services/api";
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  ActionButton,
  Message,
  LoadingSpinner,
  ResponsiveTableWrapper,
  PaginationContainer,
  PaginationButton,
  SearchInput,
  ControlsContainer,
} from "./CrashReportsManagementStyled";

const CrashReportsManagement = () => {
  const { getToken } = useContext(AuthContext);
  const [allCrashes, setAllCrashes] = useState([]);
  const [displayCrashes, setDisplayCrashes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Função para buscar TODAS as ocorrências do backend
  const fetchAllCrashes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const token = getToken();
      if (!token) {
        throw new Error("Token de autenticação não encontrado.");
      }
      // Faz a requisição para buscar todas as ocorrências
      const response = await api.get("/crash/crashes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(response.data)) {
        // Ordena TODAS as ocorrências recebidas do mais recente para o mais antigo
        const sortedOccurrences = response.data.sort((a, b) => {
          const dateA = new Date(a.createdAt || a.timestamp);
          const dateB = new Date(b.createdAt || b.timestamp);
          return dateB - dateA;
        });

        setAllCrashes(sortedOccurrences); // Armazena todas as ocorrências ordenadas
        // Os cálculos de paginação serão feitos no useEffect abaixo
      } else {
        console.error("Resposta da API não é um array:", response.data);
        setAllCrashes([]);
        setError("Formato de dados inesperado da API.");
      }
    } catch (err) {
      console.error("Erro ao buscar ocorrências:", err);
      // tratamento para o caso de um 404 real ou outro erro da API
      if (
        err.response &&
        err.response.status === 404 &&
        err.response.data.message === "No crashes found"
      ) {
        setAllCrashes([]);
        setError("Nenhuma ocorrência encontrada.");
      } else if (
        err.response &&
        err.response.data &&
        err.response.data.message
      ) {
        setError(err.response.data.message);
      } else {
        setError("Falha ao carregar ocorrências.");
      }
    } finally {
      setLoading(false);
    }
  }, [getToken]);

  // useEffect para buscar os dados apenas uma vez (ou quando getToken muda)
  useEffect(() => {
    fetchAllCrashes();
  }, [fetchAllCrashes]);

  // useEffect para aplicar busca e paginação sobre 'allCrashes'
  useEffect(() => {
    let filteredCrashes = allCrashes;

    // Aplicar filtro de busca
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filteredCrashes = allCrashes.filter(
        (crash) =>
          (crash._id &&
            (crash._id + "").toLowerCase().includes(lowerCaseSearchTerm)) ||
          (crash.name &&
            crash.name.toLowerCase().includes(lowerCaseSearchTerm)) ||
          (crash.plate1 &&
            crash.plate1.toLowerCase().includes(lowerCaseSearchTerm)) ||
          (crash.plate2 &&
            crash.plate2.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }

    // Calcular o total de páginas com base nos crashes FILTRADOS
    const totalCount = filteredCrashes.length;
    const calculatedTotalPages = Math.ceil(totalCount / limit) || 1;
    setTotalPages(calculatedTotalPages);

    // Garantir que a página atual não exceda o total de páginas após o filtro
    if (page > calculatedTotalPages && calculatedTotalPages > 0) {
      setPage(calculatedTotalPages);
    } else if (page === 0 && calculatedTotalPages > 0) {
      setPage(1); // Resetar para página 1 se por algum motivo page for 0
    }

    // Aplicar paginação
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    setDisplayCrashes(filteredCrashes.slice(startIndex, endIndex));
  }, [allCrashes, page, limit, searchTerm]); // Dependências: refaz quando crashes ou paginação/busca muda

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta ocorrência?")) {
      try {
        const token = getToken();
        await api.delete(`/crash/crashes/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Ocorrência excluída com sucesso!");
        // Após a exclusão, busca novamente todas as ocorrências para atualizar a lista
        fetchAllCrashes();
      } catch (err) {
        console.error("Erro ao excluir ocorrência:", err);
        alert("Erro ao excluir ocorrência.");
      }
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/admin/painel/ocorrencias/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1); // Volta para a primeira página ao pesquisar
  };

  if (loading) {
    return (
      <Message>
        <LoadingSpinner /> Carregando ocorrências...
      </Message>
    );
  }

  if (error && allCrashes.length === 0) {
    // Verifica allCrashes para o erro inicial
    return <Message type="error">{error}</Message>;
  }

  return (
    <ResponsiveTableWrapper>
      <h1>Gestão de Ocorrências</h1>

      <ControlsContainer>
        <SearchInput
          type="text"
          placeholder="Buscar por nome ou placa..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </ControlsContainer>

      {displayCrashes.length === 0 && !loading && !error ? (
        <Message>
          Nenhuma ocorrência encontrada para os critérios atuais.
        </Message>
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>ID</TableHeader>
                  <TableHeader>Nome</TableHeader>
                  <TableHeader>Placa 1</TableHeader>
                  <TableHeader>Placa 2</TableHeader>
                  <TableHeader>Data</TableHeader>
                  <TableHeader>Ações</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayCrashes.map(
                  (
                    crash // Renderiza apenas as ocorrências da página atual
                  ) => (
                    <TableRow key={crash._id}>
                      <TableCell>{crash._id.substring(0, 8)}...</TableCell>
                      <TableCell>{crash.name}</TableCell>
                      <TableCell>{crash.plate1}</TableCell>
                      <TableCell>{crash.plate2 || "N/A"}</TableCell>
                      <TableCell>
                        {new Date(crash.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <ActionButton
                          onClick={() => handleViewDetails(crash._id)}
                          primary
                        >
                          Detalhes
                        </ActionButton>
                        <ActionButton
                          onClick={() => handleDelete(crash._id)}
                          danger
                        >
                          Excluir
                        </ActionButton>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <PaginationContainer>
            <PaginationButton
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              Anterior
            </PaginationButton>
            <span>
              Página {page} de {totalPages}
            </span>
            <PaginationButton
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
            >
              Próxima
            </PaginationButton>
          </PaginationContainer>
        </>
      )}
    </ResponsiveTableWrapper>
  );
};

export default CrashReportsManagement;
