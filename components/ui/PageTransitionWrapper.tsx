"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import FrozenRouter from "./FrozenRouter";

function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        <motion.div
          key={pathname}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.5 }}
          variants={{
            initialState: {
              opacity: 0,
              position: "absolute",
              clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            },
            animateState: {
              opacity: 1,
              position: "unset",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            },
            exitState: {
              opacity: 0,
              position: "absolute",
              clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            },
          }}
          className="w-full"
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default PageTransitionWrapper;
