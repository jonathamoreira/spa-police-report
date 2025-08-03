import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function ProtectedRoute({ requiredRole }) {
  const { isAuthenticated, userRole, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Carregando autenticação...</div>;
  }

  if (!isAuthenticated) {
    // Redireciona com base na role necessária para o login
    return requiredRole === "admin" ? (
      <Navigate to="/admin/login" replace />
    ) : (
      <Navigate to="/user/login" replace />
    );
  } // --- Lógica de permissão corrigida --- // Permite se a role do usuário for a necessária OU se for super_admin

  const hasPermission = userRole === requiredRole || userRole === "super_admin";

  if (!hasPermission) {
    // Se não tiver permissão, redireciona para a home ou painel apropriado
    return userRole === "admin" ? (
      <Navigate to="/admin/painel" replace />
    ) : (
      <Navigate to="/" replace />
    );
  } // Se tudo estiver ok, renderiza o componente filho

  return <Outlet />;
}
