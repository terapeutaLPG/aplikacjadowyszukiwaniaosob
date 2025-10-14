import { useStore } from "../store";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setAuth } = useStore();
  const nav = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Na razie “udawane” logowanie
    setAuth(true);
    nav("/preferences");
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Logowanie</h2>
      <input
        placeholder="Email"
        required
        style={{ display: "block", marginBottom: 8 }}
      />
      <input
        placeholder="Haslo"
        type="password"
        required
        style={{ display: "block", marginBottom: 8 }}
      />
      <button type="submit">Zaloguj</button>
    </form>
  );
}
