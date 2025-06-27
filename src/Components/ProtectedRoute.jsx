import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, role } = useContext(AuthContext);

  // Se o usuário não estiver logado
  if (!isAuthenticated) {
    return <Navigate to="/operacional" replace />;
  }

  // Se o usuário estiver logado, mas não tiver o papel exigido
  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
