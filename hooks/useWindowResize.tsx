import { useEffect } from "react";

export function useWindowResize(func: () => void) {
  useEffect(
    function () {
      func();

      window.addEventListener("resize", func);

      return () => {
        window.removeEventListener("resize", func);
      };
    },
    [func]
  );
}
