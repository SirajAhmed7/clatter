"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
  to: string;
  children: React.ReactNode;
};

export default function HomeHeaderNavLink({ to, children }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <li>
      <Link
        href={to}
        className="relative flex justify-center items-center px-8 py-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layoutId="navLink"
              className="w-full h-full absolute top-0 left-0 rounded-xl bg-white/10"
            ></motion.div>
          )}
        </AnimatePresence>
        {children}
      </Link>
    </li>
  );
}
