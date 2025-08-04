// src/Context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null); // Armazena o ID no estado
  const [userName, setUserName] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Efeito para verificar o token e carregar o estado ao iniciar
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");

    if (storedToken) {
      try {
        const decoded = jwtDecode(storedToken);
        // Verifica a validade do token (expiração)
        if (decoded.exp * 1000 > Date.now()) {
          setToken(storedToken);
          setUserId(decoded.id); // Salva o ID do token no estado
          setUserName(sessionStorage.getItem("userName"));
          setUserRole(sessionStorage.getItem("userRole"));
          setIsAuthenticated(true);
        } else {
          // Token expirado, limpa os dados
          sessionStorage.clear();
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Failed to decode or validate token:", error);
        sessionStorage.clear();
        setIsAuthenticated(false);
      }
    }
    setLoading(false); // Carregamento concluído, independentemente do resultado
  }, []);

  const login = (newToken, nome, role) => {
    sessionStorage.setItem("token", newToken);
    sessionStorage.setItem("userName", nome);
    sessionStorage.setItem("userRole", role);

    const decoded = jwtDecode(newToken);

    setToken(newToken);
    setUserName(nome);
    setUserRole(role);
    setUserId(decoded.id); // Salva o ID do token no estado no login
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.clear();
    setToken(null);
    setUserId(null);
    setUserRole(null);
    setUserName(null);
    setIsAuthenticated(false);
  };

  const getToken = () => token;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        userId, // Expõe o ID como uma variável de estado
        userRole,
        userName,
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

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
