"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import ShopFilters from "./ShopFilters";

function ShopHeaderImage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: bgScroll } = useScroll({
    target: bgRef,
    offset: ["center start", "end start"],
  });
  const { scrollYProgress: filtersScroll } = useScroll({
    target: filtersRef,
    offset: ["start start", "end start"],
  });

  const [filterTop, setFilterTop] = useState(false);

  const opac = useTransform(bgScroll, [0, 0.85], [1, 0]);

  // const filtersColor = useTransform(bgScroll, [0, 0.7], ["#fff", "#0D1F2A"]);
  const filtersColor = useTransform(bgScroll, [0, 0.7], ["#fff", "#22343D"]);

  // TODO: try putting height calculations in useMotionValueEvent
  const bgHeight = bgRef.current
    ? bgRef.current.getBoundingClientRect().height / 2
    : 0;

  const filterH = filtersRef.current
    ? filtersRef.current?.getBoundingClientRect().height
    : 0;

  useMotionValueEvent(filtersScroll, "change", (y) => {
    if (y > 0) {
      setFilterTop(true);
    }
  });

  useMotionValueEvent(bgScroll, "change", (y) => {
    const filterHeightPercent = filterH / bgHeight;

    if (y < 1 - filterHeightPercent) {
      setFilterTop(false);
    }
  });

  return (
    <>
      {/* <motion.div
        ref={bgRef}
        style={{ opacity: opac }}
        className="bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.09)_12.81%,rgba(0,0,0,0.06)_16.46%,rgba(0,0,0,0.00)_52.4%,rgba(0,0,0,0.06)_77.4%,rgba(0,0,0,0.14)_90.42%,rgba(0,0,0,0.17)_100%),url('/shopHero.webp')] bg-cover bg-center absolute top-0 left-0 h-full w-full -z-10"
      ></motion.div> */}
      <motion.div
        ref={bgRef}
        style={{ opacity: opac }}
        className="absolute top-0 left-0 h-full w-full -z-10 rounded-[36px] sm:rounded-[48px] overflow-hidden"
      >
        <Image
          src={"/shopHero.webp"}
          fill
          className="object-cover"
          alt="Shop header"
          priority
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.09)_12.81%,rgba(0,0,0,0.06)_16.46%,rgba(0,0,0,0.00)_52.4%,rgba(0,0,0,0.06)_77.4%,rgba(0,0,0,0.14)_90.42%,rgba(0,0,0,0.17)_100%)]"></div>
      </motion.div>
      <motion.div
        ref={filtersRef}
        style={{ color: filtersColor }}
        className={`${
          !filterTop ? "absolute bottom-0" : "fixed top-0 px-4 z-[25]"
        } left-0 w-full`}
      >
        <div
          className={`${
            !filterTop ? "" : "bg-neutral-500/[0.05] backdrop-blur-[20px]"
            // !filterTop ? "" : "backdrop-blur-[20px]"
          } w-full rounded-b-[48px]`}
        >
          {/* TODO: Add filters components */}
          {/* <h2 className="text-center text-3xl font-display">Filters</h2> */}
          <ShopFilters />
        </div>
      </motion.div>
    </>
  );
}

export default ShopHeaderImage;
