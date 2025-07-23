// src/pages/Admin/AdminPainel.jsx
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"; // Para renderizar rotas filhas
import AdminSidebar from "../../Components/Admin/AdminSideBar/AdminSideBar"; // Importa a sidebar do admin
import AdminHeader from "../../Components/Admin/AdminHeader/AdminHeader"; // Opcional
import {
  AdminPainelContainer,
  MainContent,
  ContentWrapper,
  Overlay,
} from "./AdminPainelStyled";

const AdminPainel = () => {
  // Estado para controlar a visibilidade da sidebar (se for responsiva, por exemplo)
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  // Exemplo de como você pode passar uma prop para a sidebar para controlar o estado
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Ajusta o estado da sidebar ao redimensionar:
      // Se a tela for maior que 768px, a sidebar deve estar aberta (visível por padrão).
      // Se for menor ou igual a 768px, deve estar fechada (escondida por padrão).
      setIsSidebarOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AdminPainelContainer>
      {/* Overlay só aparece em mobile e quando a sidebar está aberta */}
      {window.innerWidth <= 768 && isSidebarOpen && (
        <Overlay $isOpen={isSidebarOpen} onClick={toggleSidebar} />
      )}

      {/* Passa $isOpen para controlar a visibilidade e o "X" */}
      <AdminSidebar $isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Passa $isSidebarOpen para o MainContent ajustar o padding-left */}
      <MainContent $isSidebarOpen={isSidebarOpen}>
        {/* O AdminHeader precisa da função toggleSidebar para o botão hambúrguer */}
        <AdminHeader toggleSidebar={toggleSidebar} />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </MainContent>
    </AdminPainelContainer>
  );
};

export default AdminPainel;
