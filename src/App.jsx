// src/App.jsx
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyled";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { NavBar } from "./Components/NavBar/NavBar";
import { AuthContext } from "./Context/AuthContext";

// Importe SEU componente ProtectedRoute
import ProtectedRoute from "./Components/ProtectedRoute";

// Importações das páginas públicas/comuns
import Home from "./pages/Home/Home";
import Educacao from "./pages/Educacao/Educacao";
import Operacional from "./pages/Operacional/Operacional";
import Servicos from "./pages/Servicos/Servicos";
import Contatos from "./pages/Contatos/Contatos";
import NotFound from "./pages/NotFound/NotFound";

// Importações para o Login e Register do USUÁRIO COMUM
import RegisterUser from "./pages/user/RegisterUser";
import LoginUser from "./pages/User/LoginUser";

// importações para o Dashboard e CreateCrash do USUÁRIO COMUM
import DashboardUser from "./pages/User/DashboardUser";
import CreateCrash from "./pages/User/CreateCrash";

// Importações das páginas Admin
import LoginAdmin from "./pages/Admin/LoginAdmin";
import RegisterAdmin from "./pages/Admin/RegisterAdmin";
import AdminPainel from "./pages/Admin/AdminPainel";

// Componentes das sub-rotas do Admin Painel
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import CrashReportsManagement from "./pages/Admin/CrashReportsManagement/CrashReportsManagement";
import CrashDetailsPage from "./pages/Admin/AdminCrashDetails/AdminCrashDetails";
import EditCrash from "./pages/Admin/AdminCrashDetails/EditCrash";
import UserManagement from "./pages/Admin/UserManagement/UserManagement"; // Verifique o caminho exato deste (se está em User ou Admin)
import EditUser from "./pages/Admin/UserManagement/EditUser";
import AdminManagement from "./pages/Admin/AdminManagement/AdminManagement";
import EditAdmin from "./pages/Admin/AdminManagement/EditAdmin";

import ButtonLogout from "./Components/Buttons/ButtonLogout";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <GlobalStyle />
      {!isAuthenticated && <NavBar />}
      <ScrollToTop />
      <Routes>
        {/* Rotas Públicas/Comuns */}
        <Route path="/" element={<Home />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/operacional" element={<Operacional />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/user/register" element={<RegisterUser />} />
        <Route path="/user/login" element={<LoginUser />} />

        {/* Rotas Protegidas para USUÁRIOS COMUNS - UNIFICADAS AQUI */}
        <Route element={<ProtectedRoute requiredRole="user" />}>
          <Route
            path="/usuario"
            element={
              <>
                <ButtonLogout />
                <DashboardUser />
              </>
            }
          />
          <Route
            path="/protocolo"
            element={
              <>
                <ButtonLogout />
                <CreateCrash />
              </>
            }
          />
        </Route>

        {/* Rotas de Autenticação Admin (não protegidas) */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />

        {/* Rotas Protegidas para o Admin Painel */}
        <Route element={<ProtectedRoute requiredRole="admin" />}>
          <Route path="/admin/painel" element={<AdminPainel />}>
            <Route index element={<AdminDashboard />} />

            <Route path="ocorrencias" element={<CrashReportsManagement />} />
            <Route
              path="/admin/painel/ocorrencias/:id"
              element={<CrashDetailsPage />}
            />
            <Route
              path="/admin/painel/ocorrencias/editar/:id"
              element={<EditCrash />}
            />
            <Route path="usuarios" element={<UserManagement />} />
            <Route
              path="/admin/painel/usuarios/editar/:id"
              element={<EditUser />}
            />
            <Route path="/admin/painel/admins" element={<AdminManagement />} />
            <Route
              path="/admin/painel/admins/editar/:id"
              element={<EditAdmin />}
            />
          </Route>
        </Route>

        {/* Rota 404 - Deve ser a última */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
