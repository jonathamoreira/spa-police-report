import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute";

import DashboardUser from "../pages/User/DashboardUser";
import PainelAdmin from "../pages/Admin/PainelAdmin";
import CreateCrash from "../pages/User/CreateCrash";
import ButtonLogout from "../Components/Buttons/ButtonLogout";

export default function PrivateRoutes() {
  return (
    <>
      <ButtonLogout />
      <Routes>
        <Route
          path="/usuario/ocorrencias"
          element={
            <ProtectedRoute requiredRole="user">
              <DashboardUser />
            </ProtectedRoute>
          }
        />
        <Route
          path=""
          element={
            <ProtectedRoute requiredRole="user">
              <CreateCrash />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/painel"
          element={
            <ProtectedRoute requiredRole="admin">
              <PainelAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
