"use client";

import { useNav } from "../../contexts/NavContext";
import Image from "next/image";
import Link from "next/link";
import HomeHeaderNavLink from "./HomeHeaderNavLink";
import GlobalCart from "../cart/globalCart/GlobalCart";

export default function HeaderNav() {
  const floating = useNav();

  return (
    <nav
      className={`relative font-display py-4 sm:py-2 px-3 sm:px-6 z-20 items-center justify-between ${
        !floating ? "flex" : "hidden"
      }`}
    >
      <Link href={"/"}>
        <Image
          src={"/clatterLogoWhite.svg"}
          width={160}
          height={100}
          alt="Clatter logo"
          priority
        />
      </Link>
      {/* <ul className="text-white p-1 hidden lg:flex gap-2 bg-neutral-900/10 backdrop-blur-[20px] rounded-2xl overflow-hidden  shadow-[0px_10px_24px_0px_rgba(22,22,22,0.15)]"> */}
      <ul className="text-white p-1 hidden lg:flex bg-white/10 backdrop-blur-[20px] rounded-2xl shadow-[0px_10px_24px_0px_rgba(22,22,22,0.10)] relative">
        <HomeHeaderNavLink to="/shop/men">Men</HomeHeaderNavLink>
        <HomeHeaderNavLink to="/shop/women">Women</HomeHeaderNavLink>
        <HomeHeaderNavLink to="/sustainability">
          Sustainability
        </HomeHeaderNavLink>
        {/* <HomeHeaderNavLink to="/cart">Cart</HomeHeaderNavLink> */}
        <GlobalCart yPos="bottom" layoutId="navLink" />
      </ul>

      <button className="flex justify-center text-sm sm:text-base items-center px-4 py-2 bg-white/10 backdrop-blur-lg text-white rounded-xl">
        Sign up
      </button>
    </nav>
  );
}
