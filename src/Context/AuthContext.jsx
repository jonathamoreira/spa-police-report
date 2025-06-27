import React, { createContext, useState, useEffect } from "react";
import * as jwt_decode from "jwt-decode";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Informações decodificadas do token
  const [token, setToken] = useState(null); // Token JWT armazenado

  useEffect(() => {
    // Verifica se há token salvo ao iniciar a aplicação
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        const decoded = jwt_decode(storedToken);
        setToken(storedToken);
        setUser(decoded);
      } catch (err) {
        console.error("Token inválido:", err);
        logout();
      }
    }
  }, []);

  const login = (jwtToken) => {
    try {
      const decoded = jwt_decode(jwtToken);
      console.log("Payload do token:", decoded);
      localStorage.setItem("token", jwtToken);
      setToken(jwtToken);
      setUser(decoded);
    } catch (err) {
      console.error("Erro ao decodificar token:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!user;
  const role = user?.role || "user"; // padrão para usuários

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated, role }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
