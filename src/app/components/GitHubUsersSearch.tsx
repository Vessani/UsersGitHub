"use client";
import { useState } from "react";

type User = {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
};

export default function GitHubUserSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async () => {
    if (!username) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Usuário não encontrado");
      const data: User = await response.json();
      setUser(data);
    } catch (err) {
      setError("Usuário não encontrado");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-50 h-full w-full flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-white/80 font-sans">
        Buscador de Usuários do GitHub
      </h1>
      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-4xl border border-white/80 p-2 mr-2 text-white/80"
          placeholder="Nome de usuário"
        />
        <button
          onClick={searchUser}
          className="bg-blue-500 rounded-4xl text-white/80 p-2"
        >
          Buscar
        </button>
      </div>
      {loading && <p className="text-white/80">Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="mt-4 flex flex-col items-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-50 h-50 rounded-full"
          />
          <h2 className="text-xl  text-white/80 font-bold">{user.name}</h2>
          <p className="text-white/80">
            Repositórios públicos: {user.public_repos}
          </p>
        </div>
      )}
    </div>
  );
}
