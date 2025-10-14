import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStore, Preferences as P } from "../store";
import { useNavigate } from "react-router-dom";

const Schema = z.object({
  typAktywnosci: z.enum(["spacer", "rower", "wyjazd"]),
  lokalizacja: z.string().min(2),
  dystansKm: z.coerce.number().min(1).max(200),
  intensywnosc: z.enum(["niska", "srednia", "wysoka"]),
});
type FormValues = z.infer<typeof Schema>;

export default function Preferences() {
  const { setPreferences } = useStore();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: {
      typAktywnosci: "spacer",
      lokalizacja: "Wroclaw",
      dystansKm: 10,
      intensywnosc: "srednia",
    },
  });

  function onSubmit(v: FormValues) {
    setPreferences(v as P);
    nav("/search");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Preferencje</h2>
      <label>
        Typ aktywnosci:
        <select {...register("typAktywnosci")}>
          <option value="spacer">Spacer</option>
          <option value="rower">Rower</option>
          <option value="wyjazd">Dluzszy wyjazd</option>
        </select>
      </label>
      <br />
      <label>
        Lokalizacja: <input {...register("lokalizacja")} />
      </label>
      <br />
      <label>
        Maks. dystans (km): <input type="number" {...register("dystansKm")} />
      </label>
      <br />
      <label>
        Intensywnosc:
        <select {...register("intensywnosc")}>
          <option value="niska">Niska</option>
          <option value="srednia">Srednia</option>
          <option value="wysoka">Wysoka</option>
        </select>
      </label>
      <br />
      <button type="submit">Zapisz i szukaj</button>
    </form>
  );
}
