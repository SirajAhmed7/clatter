"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function GlobalCartButton({
  hoverBgColor,
  layoutId,
  cartLength,
  cartLengthBgColor,
}: {
  hoverBgColor: string;
  layoutId: string;
  cartLengthBgColor: string;
  cartLength: number;
}) {
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState(false);
  const curPage = pathname === "/cart" ? true : false;
  return (
    <li className="relative">
      {cartLength > 0 && (
        <div
          className={`absolute -top-2 -right-2 h-5 w-5 rounded-full ${cartLengthBgColor} ${
            cartLengthBgColor === "bg-white" ? "text-neutral-900" : "text-white"
          } flex justify-center items-center font-display text-xs z-20`}
        >
          {cartLength}
        </div>
      )}
      <Link
        href={"/cart"}
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
              layoutId={layoutId}
              className={`w-full h-full absolute top-0 left-0 rounded-xl ${hoverBgColor}`}
            ></motion.div>
          )}
          {curPage && (
            <motion.div
              // style={{
              //   opacity: 0,
              // }}
              className={`w-full h-full absolute top-0 left-0 rounded-xl ${hoverBgColor}`}
            ></motion.div>
          )}
        </AnimatePresence>
        Cart
      </Link>
    </li>
  );
}

export default GlobalCartButton;
