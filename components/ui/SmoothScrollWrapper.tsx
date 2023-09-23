"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
}
