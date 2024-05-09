"use client";

import Link from "next/link";
import { useNav } from "../../contexts/NavContext";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import { PiHouse, PiSneaker, PiHighHeel, PiShoppingCart } from "react-icons/pi";
import FloatingNavLink from "./FloatingNavLink";
import GlobalCart from "../cart/globalCart/GlobalCart";
// import CartLengthIndicator from "../cart/globalCart/CartLengthIndicator";

export default function FloatingNav() {
  const floating = useNav();
  const ref = useRef<HTMLElement>(null);
  // const navX = useRef(-336);
  const [dims, setDims] = useState(-336);

  useEffect(
    function () {
      setDims(ref.current ? (ref.current?.offsetWidth / 2) * -1 : -336);
    },
    [floating]
  );

  useEffect(function () {
    // navX.current = ref.current
    //   ? (ref.current?.getBoundingClientRect().width / 2) * -1
    //   : -336;

    function handleWindowResize() {
      setDims(ref.current ? (ref.current?.offsetWidth / 2) * -1 : -336);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    // <AnimatePresence custom={{ y: 90, x: dims }}>
    <>
      <AnimatePresence custom={{ y: 90 }}>
        {floating && (
          <>
            <motion.nav
              ref={ref}
              key="floatingNav"
              initial="initialState"
              animate="animateState"
              exit="ExitState"
              variants={{
                initialState: {
                  y: 100,
                  // x: -336,
                  // x: dims !== undefined ? dims : 0,
                  x: dims,
                },
                animateState: {
                  y: 0,
                  // x: 0,
                  x: dims,
                },
                ExitState: { y: 100 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`hidden md:block fixed text-neutral-900 bottom-4 lg:bottom-10 md:px-4 w-[41rem] left-1/2 font-display z-50 max-w-[92vw] mx-auto bg-primary-50/[40%] rounded-2xl backdrop-blur-xl shadow-[0px_6px_16px_0px_rgba(0,0,0,0.10)]`}
              // className={`fixed text-neutral-900 bottom-5 lg:bottom-10 md:px-4 w-[41rem] left-1/2 ml-[-37.5%] font-display z-50 max-w-[92vw] mx-auto bg-primary-50/[50%] rounded-2xl backdrop-blur-xl shadow-[0px_6px_16px_0px_rgba(0,0,0,0.10)]`}
            >
              {/* PC / LAPTOP */}
              <div className="flex items-center justify-between">
                <Link href={"/"}>
                  <Image
                    src={"/clatterLogoTeal.svg"}
                    width={40}
                    height={40}
                    alt="Clatter logo"
                    priority
                  />
                </Link>
                <ul className="font-medium p-1 flex bg-[#194759]/10 rounded-2xl">
                  <FloatingNavLink to="/shop/men">Men</FloatingNavLink>
                  <FloatingNavLink to="/shop/women">Women</FloatingNavLink>
                  <FloatingNavLink to="/sustainability">
                    Sustainability
                  </FloatingNavLink>
                  {/* <FloatingNavLink to="/cart">Cart</FloatingNavLink> */}
                  <GlobalCart yPos="top" layoutId="floatingNavLink" />
                </ul>

                <button className="flex justify-center items-center font-medium rounded-xl">
                  Sign up
                </button>
              </div>

              {/* TAB / MOBILE */}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
