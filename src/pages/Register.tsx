import { useNavigate } from "react-router-dom";
export default function Register() {
  const nav = useNavigate();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    nav("/login");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Rejestracja</h2>
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
      <button type="submit">Utworz konto</button>
    </form>
  );
}
