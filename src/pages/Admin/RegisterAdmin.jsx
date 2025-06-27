import { useState } from "react";
import axios from "axios";

export default function CadastroAdmin() {
  const [name, setName] = useState("");
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://apicrash.onrender.com/doc/admin", {
        name,
        matricula: Number(matricula),
        password,
      });
      alert("Administrador cadastrado com sucesso!");
      setName("");
      setMatricula("");
      setPassword("");
    } catch (err) {
      alert(
        "Erro no cadastro: " + err.response?.data?.message || "tente novamente"
      );
    }
  };

  return (
    <form onSubmit={handleCadastro}>
      <h2>Cadastro de Administrador</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <button type="submit">Cadastrar</button>
    </form>
  );
}
