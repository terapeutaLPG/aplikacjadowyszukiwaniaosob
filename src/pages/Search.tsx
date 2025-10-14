import { useMemo } from "react";
import { useStore } from "../store";
import { Link } from "react-router-dom";

type User = {
  id: number;
  imie: string;
  lokalizacja: string;
  preferuje: "spacer" | "rower" | "wyjazd";
  dystansKm: number;
  intensywnosc: "niska" | "srednia" | "wysoka";
};

const MOCK: User[] = [
  {
    id: 1,
    imie: "Ania",
    lokalizacja: "Wroclaw",
    preferuje: "rower",
    dystansKm: 20,
    intensywnosc: "srednia",
  },
  {
    id: 2,
    imie: "Bartek",
    lokalizacja: "Wroclaw",
    preferuje: "spacer",
    dystansKm: 8,
    intensywnosc: "niska",
  },
  {
    id: 3,
    imie: "Kasia",
    lokalizacja: "Poznan",
    preferuje: "wyjazd",
    dystansKm: 150,
    intensywnosc: "wysoka",
  },
  {
    id: 4,
    imie: "Marek",
    lokalizacja: "Wroclaw",
    preferuje: "wyjazd",
    dystansKm: 120,
    intensywnosc: "srednia",
  },
];

export default function Search() {
  const { preferences } = useStore();

  const wyniki = useMemo(() => {
    if (!preferences) return [];
    return MOCK.filter(
      (u) =>
        u.preferuje === preferences.typAktywnosci &&
        u.intensywnosc === preferences.intensywnosc &&
        u.dystansKm <= preferences.dystansKm &&
        u.lokalizacja.toLowerCase() === preferences.lokalizacja.toLowerCase()
    );
  }, [preferences]);

  if (!preferences)
    return (
      <p>
        Najpierw ustaw <Link to="/preferences">preferencje</Link>.
      </p>
    );

  return (
    <div>
      <h2>Wyniki wyszukiwania</h2>
      {wyniki.length === 0 ? (
        <p>
          Brak wynikow. Zmien kryteria w{" "}
          <Link to="/preferences">preferencjach</Link>.
        </p>
      ) : (
        <ul>
          {wyniki.map((u) => (
            <li key={u.id}>
              {u.imie} — {u.preferuje}, {u.intensywnosc}, {u.dystansKm} km,{" "}
              {u.lokalizacja}
            </li>
          ))}
        </ul>
      )}
      <p style={{ marginTop: 12 }}>
        Przejdz do <Link to="/matches">dopasowan</Link>
      </p>
    </div>
  );
}
