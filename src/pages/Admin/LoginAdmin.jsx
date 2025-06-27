import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function LoginAdmin() {
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://apicrash.onrender.com/admin/login",
        {
          matricula: Number(matricula),
          password,
        }
      );
      login(response.data.token, "admin");
      alert("Login do admin realizado com sucesso!");
      // Aqui você pode redirecionar o admin para outra página
    } catch (error) {
      alert(
        "Erro no login do admin: " +
          (error.response?.data?.message || "tente novamente")
      );
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login Admin</h2>
      <input
        type="number"
        placeholder="Matrícula"
        value={matricula}
        onChange={(e) => setMatricula(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
