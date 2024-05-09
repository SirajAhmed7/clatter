"use client";

import Link from "next/link";
import {
  PiHighHeel,
  PiHighHeelFill,
  PiHouse,
  PiHouseFill,
  PiShoppingCart,
  PiShoppingCartFill,
  PiSneaker,
  PiSneakerFill,
} from "react-icons/pi";
import CartLengthIndicator from "../cart/globalCart/CartLengthIndicator";
import { usePathname } from "next/navigation";
import MobileNavLink from "./MobileNavLink";

function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      // className={`md:hidden fixed text-neutral-900 bottom-4 lg:bottom-10 md:px-4 w-[41rem] left-1/2 -translate-x-1/2 font-display z-50 max-w-[92vw] mx-auto bg-primary-50/[40%] rounded-2xl backdrop-blur-xl shadow-[0px_6px_16px_0px_rgba(0,0,0,0.10)]`}
      className={`md:hidden fixed text-neutral-900 bottom-4 lg:bottom-10 md:px-4 w-[41rem] left-1/2 -translate-x-1/2 font-display z-50 max-w-[92vw] mx-auto bg-white rounded-2xl backdrop-blur-xl shadow-[0px_6px_16px_0px_rgba(0,0,0,0.10)]`}
    >
      <div className="grid grid-cols-4 justify-between p-1">
        {/* <Link
          href={"/"}
          className="flex flex-col items-center justify-between gap-1"
        >
          <PiHouse className="text-2xl" />
          <p className="text-sm">Home</p>
        </Link> */}
        <MobileNavLink
          to="/"
          linkText="Home"
          icon={<PiHouse className="text-2xl" />}
          iconFill={<PiHouseFill className="text-2xl" />}
        />
        <MobileNavLink
          to="/shop/men"
          linkText="Men"
          icon={<PiSneaker className="text-2xl" />}
          iconFill={<PiSneakerFill className="text-2xl" />}
        />
        <MobileNavLink
          to="/shop/women"
          linkText="Women"
          icon={<PiHighHeel className="text-2xl" />}
          iconFill={<PiHighHeelFill className="text-2xl" />}
        />
        <Link
          href={"/cart"}
          className={`flex flex-col items-center py-2 rounded-[12px] text-neutral-950 relative ${
            pathname === "/cart" ? "bg-primary-100" : ""
          }`}
        >
          {/* TODO: Add cart length to mobile nav */}
          <CartLengthIndicator cartLengthBgColor="bg-primary-500" />
          {pathname === "/cart" ? (
            <PiShoppingCartFill className="text-2xl" />
          ) : (
            <PiShoppingCart className="text-2xl" />
          )}
          <p className="text-sm">Cart</p>
        </Link>
      </div>
    </nav>
  );
}

export default MobileNav;
