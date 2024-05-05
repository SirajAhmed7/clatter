"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  to: string;
  children: React.ReactNode;
};

export default function SecondaryHeaderNavLink({ to, children }: Props) {
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState(false);

  const curPage = to === pathname ? true : false;

  return (
    <li>
      <Link
        href={to}
        className="relative flex justify-center items-center px-8 py-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence>
          {isHovering && !curPage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layoutId="navLinkSec"
              className="w-full h-full absolute top-0 left-0 rounded-xl bg-primary-700/10"
            ></motion.div>
          )}
          {curPage && (
            <motion.div className="w-full h-full absolute top-0 left-0 rounded-xl bg-primary-700/10"></motion.div>
          )}
        </AnimatePresence>

        {children}
      </Link>
    </li>
  );
}
