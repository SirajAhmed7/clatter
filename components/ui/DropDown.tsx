"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { PiCaretDownBold } from "react-icons/pi";

type DropDownContextType = {
  windowKey: string;
  xPos: "right" | "left";
  isOpen: boolean;
  setIsOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
};

const DropDownContext = createContext<DropDownContextType>({
  windowKey: "",
  xPos: "left",
  isOpen: false,
  setIsOpen(isOpen) {
    return isOpen;
  },
});

type DropDownProps = {
  xPos?: "right" | "left";
  windowKey: string;
  children: React.ReactNode;
};

function DropDown({ xPos = "left", windowKey, children }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropDownContext.Provider value={{ xPos, windowKey, isOpen, setIsOpen }}>
      {children}
    </DropDownContext.Provider>
  );
}

function Button({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen } = useContext(DropDownContext);

  return (
    <button
      className="flex gap-2 text-xl items-center font-medium px-5 py-2 rounded-xl hover:bg-neutral-300/30"
      onClick={() => setIsOpen((open: boolean) => !open)}
    >
      {children}
      <span>
        <PiCaretDownBold
          className={`${
            !isOpen ? "" : "-scale-y-100"
          } transition-all duration-300`}
        />
      </span>
    </button>
  );
}

function Window({ children }: { children: React.ReactNode }) {
  const { xPos, isOpen } = useContext(DropDownContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    function () {
      if (isOpen) {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [isOpen]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          ref={ref}
          className={`absolute ${
            xPos === "left" ? "left-0" : "right-0"
          } bottom-0 translate-y-full h-64 w-64 bg-white rounded-[36px] shadow-10 z-20`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

DropDown.Button = Button;
DropDown.Window = Window;

export default DropDown;
