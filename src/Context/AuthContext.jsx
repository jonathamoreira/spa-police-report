// src/Context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

// O contexto em si
export const AuthContext = createContext(null);

// O provedor do contexto, que gerencia o estado da autenticação
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null); // 'admin' ou 'user'
  const [userName, setUserName] = useState(null); // Nome do usuário
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Efeito para carregar token e role do sessionStorage ao iniciar
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedRole = sessionStorage.getItem("userRole");
    const storedUserName = sessionStorage.getItem("userName");
    setLoading(false); // Carregamento concluído

    if (storedToken && storedRole) {
      setToken(storedToken);
      setUserRole(storedRole);
      setIsAuthenticated(true);
      setUserName(storedUserName); // Carrega o nome do usuário se disponível
    }
  }, []);

  // Função de login: armazena token e role
  const login = (newToken, nome, role) => {
    sessionStorage.setItem("token", newToken);
    sessionStorage.setItem("userName", nome);
    sessionStorage.setItem("userRole", role);
    setToken(newToken);
    setUserName(nome);
    setUserRole(role);
    setIsAuthenticated(true);
  };

  // Função de logout: remove token e role
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("userName");
    setToken(null);
    setUserRole(null);
    setUserName(null);
    setIsAuthenticated(false);
  };

  // Função para obter o token atual
  const getToken = () => token;

  const getUserId = () => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        return decoded.id; // Retorna o ID do usuário que está no token
      } catch (error) {
        console.error("Failed to decode token:", error);
        return null;
      }
    }
    return null;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        userRole,
        userName,
        getUserId,
        login,
        logout,
        loading,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ATENÇÃO: EXPORTE O HOOK 'useAuth' DIRETAMENTE AQUI
// Este é o hook customizado que os componentes usarão para acessar o contexto de autenticação
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  // Verificação para garantir que o hook seja usado dentro do AuthProvider
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
