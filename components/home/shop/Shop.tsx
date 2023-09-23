"use client";

import Image from "next/image";
import ShopMouseTracker from "./ShopMouseTracker";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function Shop() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasMouse, setHasMouse] = useState(false);
  const [left, setLeft] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(function () {
    if (matchMedia("(pointer:fine)").matches) {
      setHasMouse(true);
    }
  }, []);

  useEffect(function () {
    window.addEventListener("mousemove", function (e) {
      const y = ref.current
        ? e.clientY > ref.current?.getBoundingClientRect().top &&
          e.clientY < ref.current?.getBoundingClientRect().bottom
        : 0;

      if (y)
        setMousePos((m) =>
          y
            ? {
                ...m,
                x: e.clientX,
                y: ref.current
                  ? e.clientY - ref.current?.getBoundingClientRect().top
                  : e.clientY,
              }
            : m
        );
    });

    return window.removeEventListener("mousemove", function (e) {
      const y = ref.current
        ? e.clientY > ref.current?.getBoundingClientRect().top &&
          e.clientY < ref.current?.getBoundingClientRect().bottom
        : 0;

      if (y)
        setMousePos((m) =>
          y
            ? {
                ...m,
                x: e.clientX,
                y: ref.current
                  ? e.clientY - ref.current?.getBoundingClientRect().top
                  : e.clientY,
              }
            : m
        );
    });
  }, []);

  return (
    <section
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-2 mb-64 overflow-x-clip"
      onMouseMove={(e) =>
        setMousePos((mouseP) => ({ ...mouseP, x: e.clientX, y: e.clientY }))
      }
    >
      <div className="absolute top-0 left-0 w-[75%] md:w-[50%] h-[400px] lg:h-[500px] -translate-x-1/3 -translate-y-2/3 rotate-180 -z-10">
        <Image
          src={"/clatterWavePatternFaded.svg"}
          fill
          className="absolute object-contain w-full h-full"
          alt="Clatter wave pattern"
        />
      </div>
      {hasMouse && (
        <ShopMouseTracker x={mousePos.x} y={mousePos.y} left={left} />
      )}
      {/* <div className="relative w-full h-screen sm:h-auto sm:aspect-square"> */}
      <div
        className="relative w-full aspect-square"
        onMouseEnter={() => setLeft(true)}
      >
        <Link href={"/men"}>
          <Image
            src={"/shopMen.jpg"}
            fill
            className="absolute top-0 left-0 object-cover w-full h-full"
            alt="Man standing on rock"
          />
        </Link>
      </div>
      {/* <div className="relative w-full h-screen sm:h-auto sm:aspect-square"> */}
      <div
        className="relative w-full aspect-square"
        onMouseEnter={() => setLeft(false)}
      >
        <Link href={"/women"}>
          <Image
            src={"/shopWomen.webp"}
            fill
            className="absolute top-0 left-0 object-cover w-full h-full"
            alt="Woman sitting on a rock"
          />
        </Link>
      </div>
    </section>
  );
}

export default Shop;
