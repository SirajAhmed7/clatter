"use client";

import { createContext, useContext } from "react";

type AllShoesContextType = {
  allShoes: string;
};

const AllShoesContext = createContext<AllShoesContextType>({
  allShoes: "[]",
});

export default function AllShoesProvider({
  allShoes,
  children,
}: {
  allShoes: string;
  children: React.ReactNode;
}) {
  return (
    <AllShoesContext.Provider value={{ allShoes }}>
      {children}
    </AllShoesContext.Provider>
  );
}

export function useAllShoes() {
  const context = useContext(AllShoesContext);

  if (context === undefined) {
    throw new Error("AllShoesContext was used outside the AllShoesProvider");
  }

  return context;
}
