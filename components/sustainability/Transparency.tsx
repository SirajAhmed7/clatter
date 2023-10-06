"use client";

import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
import { useRef } from "react";

function Transparency() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // const bgYPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bgYPos = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  // const bgBlur = useTransform(
  //   scrollYProgress,
  //   // [0, 0.4, 0.6, 1],
  //   // ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]
  //   [0, 0.5, 1],
  //   ["blur(10px)", "blur(0px)", "blur(10px)"]
  // );

  return (
    // <section className={`h-[680px] mb-48`}>
    <section className={`px-5 h-[720px] md:h-[540px] lg:h-[680px] mb-48`}>
      <motion.div
        ref={ref}
        className="relative w-full h-full rounded-[48px] px-5 overflow-hidden bg-[url('/transparency.webp')] bg-cover"
        // className="relative w-full h-full px-5 overflow-hidden bg-[url('/transparency.webp')] bg-cover"
        style={{
          // backgroundPositionY: `${bgYPos}`,
          backgroundPositionY: bgYPos,
        }}
      >
        {/* <motion.div
          className="absolute top-0 left-0 w-full h-full -z-0"
          style={{
            backdropFilter: bgBlur,
          }}
        ></motion.div> */}
        {/* <Image
          src={"/transparency.webp"}
          fill
          sizes="(min-width: 1280px) 100%, (min-width: 1024px) 1024px"
          // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
          className="absolute object-cover -z-10"
          alt="Rain forest"
        /> */}
        <h2 className="absolute top-12 sm:top-20 mx-auto sm:mx-0 left-auto sm:left-12 lg:left-32 w-80 max-w-[90%] heading-h2 text-neutral-950">
          Transparency and Traceability
        </h2>
        <p className="absolute bottom-12 sm:bottom-20 mx-auto sm:mx-0 right-auto sm:right-12 lg:right-32 w-[440px] max-w-[90%] body-text !text-white">
          We believe in transparency and want you to know exactly where your
          Clatter shoes come from. We partner with suppliers who share our
          values and are transparent about their sourcing and production
          processes. We visit our factories regularly to ensure that they meet
          our strict standards for sustainability and ethical practices.
        </p>
      </motion.div>
    </section>
  );
}

export default Transparency;
