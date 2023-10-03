"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useWindowResize } from "../../../hooks/useWindowResize";

function ReviewsContainer({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [cursorType, setCursorType] = useState("cursor-grab");
  const [isSm, setIsSm] = useState(false);

  const calcScrollWidth = useCallback(
    function () {
      const sw = ref.current?.scrollWidth
        ? ref.current?.scrollWidth - window.innerWidth + (56 + 16) * 3 // 56 section padding, 16 body padding
        : // ref.current?.scrollWidth - window.innerWidth - Number(56 + 16) // 56 section padding, 16 body padding
          window.innerWidth;

      setScrollWidth(sw);
    },
    [setScrollWidth]
  );

  useEffect(
    function () {
      calcScrollWidth();
    },
    [calcScrollWidth]
  );

  const setSm = useCallback(function () {
    setIsSm(window.innerWidth < 768 ? true : false);
  }, []);

  useWindowResize(calcScrollWidth);
  useWindowResize(setSm);

  return (
    <motion.div
      ref={ref}
      drag={!isSm ? "x" : false}
      // dragConstraints={{ left: 0, right: -1129 }}
      dragConstraints={{ left: -scrollWidth, right: 0 }}
      // dragConstraints={constraintsRef}
      // dragMomentum={false}
      dragTransition={{ timeConstant: 500 }}
      dragElastic={0.2}
      className={`grid grid-cols-1 sm:grid-cols-2 md:flex gap-6 ${cursorType}`}
      onMouseEnter={() => setCursorType("cursor-grab")}
      onMouseDown={() => setCursorType("cursor-grabbing")}
      onMouseUp={() => setCursorType("cursor-grab")}
    >
      {children}
    </motion.div>
  );
}

export default ReviewsContainer;
