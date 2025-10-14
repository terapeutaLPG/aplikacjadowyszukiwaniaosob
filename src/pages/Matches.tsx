import { useStore } from "../store";

export default function Matches() {
  const { preferences } = useStore();
  return (
    <div>
      <h2>Dopasowania</h2>
      {!preferences ? (
        <p>Ustaw najpierw preferencje.</p>
      ) : (
        <p>
          Tu w przyszlosci bedzie lista dopasowanych osob wg:{" "}
          <b>{preferences.typAktywnosci}</b>, {preferences.intensywnosc}, max{" "}
          {preferences.dystansKm} km, {preferences.lokalizacja}.
        </p>
      )}
    </div>
  );
}
