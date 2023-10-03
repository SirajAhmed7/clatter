"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function ReviewsContainer({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [cursorType, setCursorType] = useState("cursor-grab");

  useEffect(
    function () {
      const sw = ref.current?.scrollWidth
        ? ref.current?.scrollWidth - window.innerWidth + (56 + 16) * 3 // 56 section padding, 16 body padding
        : // ref.current?.scrollWidth - window.innerWidth - Number(56 + 16) // 56 section padding, 16 body padding
          window.innerWidth;
      // console.log(
      //   ref.current?.scrollWidth
      //     ? ref.current?.scrollWidth - window.innerWidth
      //     : window.innerWidth
      // );

      setScrollWidth(sw);
    },
    [ref.current?.scrollWidth]
  );

  return (
    <motion.div
      ref={ref}
      drag={"x"}
      // dragConstraints={{ left: 0, right: -1129 }}
      dragConstraints={{ left: -scrollWidth, right: 0 }}
      // dragConstraints={constraintsRef}
      // dragMomentum={false}
      dragTransition={{ timeConstant: 500 }}
      dragElastic={0.2}
      className={`flex gap-6 ${cursorType}`}
      onMouseEnter={() => setCursorType("cursor-grab")}
      onMouseDown={() => setCursorType("cursor-grabbing")}
      onMouseUp={() => setCursorType("cursor-grab")}
    >
      {children}
    </motion.div>
  );
}

export default ReviewsContainer;
