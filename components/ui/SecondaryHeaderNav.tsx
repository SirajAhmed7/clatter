"use client";

import { useNav } from "../../contexts/NavContext";
import Image from "next/image";
import Link from "next/link";
import SecondaryHeaderNavLink from "./SecondaryHeaderNavLink copy";
import GlobalCart from "../cart/globalCart/GlobalCart";

export default function SecondaryHeaderNav() {
  const floating = useNav();

  return (
    <nav
      className={`relative flex font-display mb-6 py-4 sm:py-3 px-3 sm:px-4 z-10 items-center justify-between ${
        !floating ? "" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <Link href={"/"}>
        <Image
          src={"/clatterLogoBig.svg"}
          width={160}
          height={100}
          alt="Clatter logo"
        />
      </Link>
      {/* <ul className="text-white p-1 hidden lg:flex gap-2 bg-neutral-900/10 backdrop-blur-[20px] rounded-2xl overflow-hidden  shadow-[0px_10px_24px_0px_rgba(22,22,22,0.15)]"> */}
      <ul className="text-neutral-950 p-1 hidden lg:flex bg-primary-200 rounded-2xl relative">
        <SecondaryHeaderNavLink to="/shop/men">Men</SecondaryHeaderNavLink>
        <SecondaryHeaderNavLink to="/shop/women">Women</SecondaryHeaderNavLink>
        <SecondaryHeaderNavLink to="/sustainability">
          Sustainability
        </SecondaryHeaderNavLink>
        {/* <SecondaryHeaderNavLink to="/cart">Cart</SecondaryHeaderNavLink> */}
        <GlobalCart yPos="bottom" layoutId="navLinkSec" />
      </ul>

      <button className="flex justify-center text-sm sm:text-base font-medium items-center px-4 py-2 text-neutral-950 rounded-xl hover:bg-primary-200 transition-colors duration-300">
        Sign up
      </button>
    </nav>
  );
}
