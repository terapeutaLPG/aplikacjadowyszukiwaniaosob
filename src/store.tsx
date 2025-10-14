import { createContext, useContext, useState, ReactNode } from "react";

export type Preferences = {
  typAktywnosci: "spacer" | "rower" | "wyjazd";
  lokalizacja: string;
  dystansKm: number;
  intensywnosc: "niska" | "srednia" | "wysoka";
};

type UserState = {
  isAuth: boolean;
  preferences: Preferences | null;
  setAuth: (v: boolean) => void;
  setPreferences: (p: Preferences) => void;
};

const Ctx = createContext<UserState | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [isAuth, setAuth] = useState(false);
  const [preferences, setPreferences] = useState<Preferences | null>(null);

  return (
    <Ctx.Provider value={{ isAuth, preferences, setAuth, setPreferences }}>
      {children}
    </Ctx.Provider>
  );
}

export const useStore = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
};
