"use client";

import { useRef } from "react";
import HomeNewsletterForm from "./HomeNewsletterForm";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  PiEnvelopeSimple,
  PiFacebookLogo,
  PiInstagramLogo,
  PiTiktokLogo,
} from "react-icons/pi";

function HomeNewsletter() {
  const refFooter = useRef(null);
  const { scrollYProgress: footerScroll } = useScroll({
    target: refFooter,
    offset: ["start end", "end end"],
  });

  // const news = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  // const news = useTransform(footerScroll, [0, 1], ["0%", "0%"]);
  const footerY = useTransform(footerScroll, [0, 1], ["-65%", "0%"]);
  // // const news = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  // const news = useTransform(footerScroll, [0, 1], ["0%", "-15%"]);
  // const footer = useTransform(footerScroll, [0, 1], ["0%", "-20%"]);

  return (
    <>
      <section
        // style={{ y: news }}
        className="relative bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.08)_33.44%,rgba(0,0,0,0.17)_53.7%,rgba(0,0,0,0.08)_72.47%),linear-gradient(to_bottom,rgb(235,247,245)_0%,rgba(235,247,245,0)_20%),url('/homeNewsletter.webp')] bg-center bg-cover w-full h-[120vh] rounded-b-[48px] md:rounded-b-[96px] z-10"
      >
        <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-5">
          <h2 className="font-display text-5xl md:text-6xl text-white font-bold text-center mb-4">
            Step into the circle
          </h2>
          <p className="font-body text-base md:text-xl text-white leading-[169%] text-center mb-6">
            Join the Clatter community and be part of the sustainable style
            movement. Subscribe to our newsletter and stay in the loop with the
            latest trends, eco-friendly innovations, and exclusive offers.
          </p>
          <HomeNewsletterForm />
        </div>
      </section>
      <motion.footer
        ref={refFooter}
        // style={{ y: news }}
        style={{ y: footerY }}
        className="relative px-5 pt-16 pb-24 lg:py-32 w-full overflow-hidden bg-primary-100"
      >
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5 gap-y-16 justify-items-center lg:justify-items-start items-start">
          <div className="relative col-span-2 md:col-span-4 w-full min-h-[96px] md:min-h-[192px] lg:h-full max-h-48">
            {/* <div className="relative col-span-3 h-48 h-full"> */}
            <Link href={"/"}>
              <Image
                src={"/clatterLogoBig.svg"}
                fill
                className="absolute top-0 left-0 w-full h-full object-contain"
                alt="Clatter logo"
              />
            </Link>
          </div>
          {/* <div className="flex flex-col gap-3 col-start-5"> */}
          <div className="flex flex-col gap-3 text-base">
            <h5 className="font-display font-medium text-xl text-neutral-700">
              Shop
            </h5>
            <Link
              href={"/shop/men"}
              className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              Men
            </Link>
            <Link
              href={"/shop/women"}
              className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              Women
            </Link>
            <Link
              href={"/#new-arrivals"}
              className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              New arrivals
            </Link>
            <Link
              href={"/cart"}
              className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              Cart
            </Link>
            {/* <Link
              href={"/orders"}
              className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              My orders
            </Link> */}
          </div>
          {/* <div className="flex flex-col gap-3 col-start-6"> */}
          <div className="flex flex-col gap-3 text-base">
            <h5 className="font-display text-xl font-medium text-neutral-700">
              Information
            </h5>
            <Link
              href={"/sustainability"}
              className="font-display text-neutral-700 hover:opacity-70 active:opacity-70 capitalize"
            >
              Sustainability
            </Link>
            {/* <Link
              href={"/support"}
              className="font-display text-neutral-700 hover:opacity-70 active:opacity-70 capitalize"
            >
              support
            </Link>
            <Link
              href={"/about"}
              className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              About us
            </Link> */}
            <Link
              href={"/signin"}
              className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              Sign in
            </Link>
            <div className="flex gap-5 mt-2">
              <Link
                href={"/"}
                className="text-2xl text-neutral-700 hover:opacity-70 active:opacity-70"
              >
                {/* <PiInstagramLogoDuotone /> */}
                <PiEnvelopeSimple />
              </Link>
              <Link
                href={"/"}
                className="text-2xl text-neutral-700 hover:opacity-70 active:opacity-70"
              >
                {/* <PiInstagramLogoDuotone /> */}
                <PiInstagramLogo />
              </Link>
              <Link
                href={"/"}
                className="text-2xl text-neutral-700 hover:opacity-70 active:opacity-70"
              >
                {/* <PiFacebookLogoDuotone /> */}
                <PiFacebookLogo />
              </Link>
              <Link
                href={"/"}
                className="text-2xl text-neutral-700 hover:opacity-70 active:opacity-70"
              >
                {/* <PiTiktokLogoDuotone /> */}
                <PiTiktokLogo />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 right-0 w-[60%] h-[70%] rotate-90 translate-x-[42%] translate-y-[35%] -z-10">
        <Image
          src={"/clatterWavePatternFaded.svg"}
          fill
          className="object-contain w-full h-full"
          alt="Clatter wave pattern"
        />
      </div> */}
      </motion.footer>
    </>
  );
}

export default HomeNewsletter;
