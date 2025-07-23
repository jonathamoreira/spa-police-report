// src/Context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// O contexto em si
export const AuthContext = createContext(null);

// O provedor do contexto, que gerencia o estado da autenticação
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null); // 'admin' ou 'user'
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Efeito para carregar token e role do sessionStorage ao iniciar
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedRole = sessionStorage.getItem("userRole");
    setLoading(false); // Carregamento concluído

    if (storedToken && storedRole) {
      setToken(storedToken);
      setUserRole(storedRole);
      setIsAuthenticated(true);
    }
  }, []);

  // Função de login: armazena token e role
  const login = (newToken, role) => {
    sessionStorage.setItem("token", newToken);
    sessionStorage.setItem("userRole", role);
    setToken(newToken);
    setUserRole(role);
    setIsAuthenticated(true);
  };

  // Função de logout: remove token e role
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userRole");
    setToken(null);
    setUserRole(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, userRole, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ATENÇÃO: EXPORTE O HOOK 'useAuth' DIRETAMENTE AQUI
// Este é o hook customizado que os componentes usarão para acessar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  // Verificação para garantir que o hook seja usado dentro do AuthProvider
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
