"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { createContext, useContext, useState } from "react";

const NavContext = createContext(false);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const [floating, setFloating] = useState(false);

  useMotionValueEvent(scrollY, "change", (scrolPosition) => {
    setFloating(scrolPosition > 100 ? true : false);
  });

  return <NavContext.Provider value={floating}>{children}</NavContext.Provider>;
}

export function useNav() {
  const context = useContext(NavContext);

  if (context === undefined)
    throw new Error("NavContext was used outside of CitiesProvider");
  return context;
}
