"use client";

import { createContext, useContext } from "react";

const ShoesContext = createContext({ shoes: "{}" });

export default function ShoesProvider({
  shoes,
  children,
}: {
  shoes: string;
  children: React.ReactNode;
}) {
  return (
    <ShoesContext.Provider value={{ shoes }}>{children}</ShoesContext.Provider>
  );
}

export function useShoes() {
  const context = useContext(ShoesContext);

  if (context === undefined) {
    throw new Error("ShoesContext was used outside the ShoesProvider");
  }

  return context;
}
