import { Link, useLocation } from "react-router-dom";

const linkStyle: React.CSSProperties = {
  marginRight: 12,
  textDecoration: "none",
  color: "#61dafb",
};
const active: React.CSSProperties = {
  fontWeight: 700,
  textDecoration: "underline",
};

export default function NavBar() {
  const { pathname } = useLocation();
  const is = (p: string) => pathname === p;

  return (
    <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
      <Link to="/" style={{ ...linkStyle, ...(is("/") ? active : {}) }}>
        Start
      </Link>
      <Link
        to="/preferences"
        style={{ ...linkStyle, ...(is("/preferences") ? active : {}) }}
      >
        Preferencje
      </Link>
      <Link
        to="/search"
        style={{ ...linkStyle, ...(is("/search") ? active : {}) }}
      >
        Szukaj
      </Link>
      <Link
        to="/matches"
        style={{ ...linkStyle, ...(is("/matches") ? active : {}) }}
      >
        Dopasowania
      </Link>
      <div style={{ flex: 1 }} />
      <Link
        to="/login"
        style={{ ...linkStyle, ...(is("/login") ? active : {}) }}
      >
        Logowanie
      </Link>
      <Link
        to="/register"
        style={{ ...linkStyle, ...(is("/register") ? active : {}) }}
      >
        Rejestracja
      </Link>
    </nav>
  );
}
