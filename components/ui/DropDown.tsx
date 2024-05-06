"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  MutableRefObject,
} from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

type DropDownContextType = {
  windowKey: string;
  xPos: "right" | "left";
  yPos: "top" | "bottom";
  openOnHover: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
  hoverTimeout: MutableRefObject<number | undefined>;
  // setHoverTimeout: (timeoutId: number) => void;
};

const DropDownContext = createContext<DropDownContextType>({
  windowKey: "",
  xPos: "left",
  yPos: "bottom",
  openOnHover: false,
  isOpen: false,
  setIsOpen(isOpen) {
    return isOpen;
  },
  hoverTimeout: { current: undefined },
  // setHoverTimeout(timeoutId) {
  //   return timeoutId;
  // },
});

type DropDownProps = {
  xPos?: "right" | "left";
  yPos?: "top" | "bottom";
  openOnHover?: boolean;
  windowKey: string;
  children: React.ReactNode;
};

function DropDown({
  xPos = "left",
  yPos = "bottom",
  openOnHover = false,
  windowKey,
  children,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  // const [hoverTimeout, setHoverTimeout] = useState<number>();
  const hoverTimeout = useRef<number>();

  return (
    <DropDownContext.Provider
      value={{
        xPos,
        yPos,
        openOnHover,
        windowKey,
        isOpen,
        setIsOpen,
        hoverTimeout,
        // setHoverTimeout,
      }}
    >
      {children}
    </DropDownContext.Provider>
  );
}

function Button({
  noCaret,
  className,
  customClassName,
  hoverOpenColor = "bg-neutral-100/30",
  children,
}: {
  noCaret?: boolean;
  className?: string;
  customClassName?: string;
  hoverOpenColor?: string;
  children: React.ReactNode;
}) {
  const {
    yPos,
    isOpen,
    openOnHover,
    setIsOpen,
    hoverTimeout,
    // setHoverTimeout,
  } = useContext(DropDownContext);

  const classes = customClassName
    ? `${customClassName} ${openOnHover && isOpen ? hoverOpenColor : ""}`
    : `flex gap-2 text-xl items-center font-medium px-5 py-2 rounded-xl hover:bg-neutral-300/30 transition-colors ${className}`;

  return (
    <button
      className={classes}
      onClick={() => {
        if (!openOnHover) setIsOpen((open: boolean) => !open);
      }}
      onMouseEnter={() => {
        if (openOnHover) {
          if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
          setIsOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (openOnHover) {
          const id = setTimeout(() => {
            setIsOpen(false);
          }, 200);
          hoverTimeout.current = Number(id);
        }
      }}
    >
      {children}
      {!noCaret && (
        <span>
          {yPos === "bottom" ? (
            <PiCaretDownBold
              className={`${
                !isOpen ? "" : "-scale-y-100"
              } transition-transform`}
            />
          ) : (
            <PiCaretUpBold
              className={`${
                !isOpen ? "" : "-scale-y-100"
              } transition-transform`}
            />
          )}
        </span>
      )}
    </button>
  );
}

function Window({
  maxHeight = "100vh",
  scrollPosNearest = false,
  className,
  // customClassName,
  children,
}: {
  maxHeight?: number | string;
  scrollPosNearest?: boolean;
  className?: string;
  // customClassName?: string;
  children: React.ReactNode;
}) {
  const {
    xPos,
    yPos,
    openOnHover,
    isOpen,
    setIsOpen,
    hoverTimeout,
    // setHoverTimeout,
  } = useContext(DropDownContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    function () {
      if (isOpen) {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block:
            yPos === "bottom"
              ? scrollPosNearest
                ? "nearest"
                : "start"
              : "nearest",
        });
      }
    },
    [isOpen, yPos, scrollPosNearest]
  );

  // function mouseEnters() {
  //   if (openOnHover) {
  //     if (hoverTimeout) clearTimeout(hoverTimeout.current);
  //     if (hoverTimeout) console.log(hoverTimeout);
  //     setIsOpen(true);
  //   }
  // }

  return (
    <AnimatePresence>
      {/* TODO: try scaling up on open */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            maxHeight,
          }}
          ref={ref}
          className={`absolute ${xPos === "left" ? "left-0" : "right-0"} ${
            yPos === "bottom"
              ? "bottom-0 translate-y-full"
              : "top-0 -translate-y-full"
          } shadow-10 z-[25] overflow-y-auto ${
            className ? className : "rounded-[36px] bg-white"
          } inline-block z-30`}
          onMouseEnter={() => {
            if (openOnHover) {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
              setIsOpen(true);
            }
          }}
          // onMouseEnter={mouseEnters}
          onMouseLeave={() => {
            if (openOnHover) {
              const id = setTimeout(() => {
                setIsOpen(false);
              }, 200);
              hoverTimeout.current = Number(id);
            }
          }}
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
