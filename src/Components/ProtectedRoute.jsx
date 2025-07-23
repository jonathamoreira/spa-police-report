import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"; // Importe Outlet
import { AuthContext } from "../Context/AuthContext";

export default function ProtectedRoute({ requiredRole }) {
  // Remova 'children' da desestruturação
  const { isAuthenticated, userRole, loading } = useContext(AuthContext); // Inclua 'loading' do contexto

  // console.log para depuração (pode remover depois)

  // Se você tem um estado de carregamento no AuthContext (recomendado)
  if (loading) {
    return <div>Carregando autenticação...</div>; // Ou um spinner, ou null
  }

  // Se o usuário não estiver logado
  if (!isAuthenticated) {
    if (requiredRole === "admin") {
      return <Navigate to="/admin/login" replace />;
    }

    return <Navigate to="/user/login" replace />; // Mais específico para login de usuário
  }

  // Se o usuário estiver logado, mas não tiver o papel exigido
  if (requiredRole && userRole !== requiredRole) {
    // Exemplo de lógica mais granular para redirecionamento por role mismatch
    if (userRole === "admin") {
      // Se um admin tentar acessar rota de user
      return <Navigate to="/admin/painel" replace />;
    }
    // Se um user tentar acessar rota de admin, ou outra role mismatch
    return <Navigate to="/" replace />; // Redireciona para a home ou uma página de acesso negado
  }

  // Se tudo estiver ok (autenticado e role correta), renderiza o componente da rota filha
  return <Outlet />; // <--- ESSA É A CORREÇÃO PRINCIPAL!
}
