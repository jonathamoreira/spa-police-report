import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { NavBar } from "./Components/NavBar/NavBar";
import Servicos from "./pages/Servicos/Servicos";
import Educacao from "./pages/Educacao/Educacao";
import Contatos from "./pages/Contatos";
import Operacional from "./pages/Operacional/Operacional";
import RegisterUser from "./pages/User/RegisterUser";
import LoginUser from "./pages/User/LoginUser";
import RegisterAdmin from "./pages/Admin/RegisterAdmin";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { GlobalStyle } from "./GlobalStyled";
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protocolo/*" element={<PrivateRoutes />} />
        <Route path="/usuario/ocorrencias" element={<PrivateRoutes />} />
        <Route path="/admin/painel" element={<PrivateRoutes />} />
        <Route path="/operacional" element={<Operacional />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/user/register" element={<RegisterUser />} />
        <Route path="/user/login" element={<LoginUser />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
      </Routes>
    </>
  );
}

export default App;
