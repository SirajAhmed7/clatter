"use client";

import { usePathname } from "next/navigation";
import Button from "../../ui/Button";

function ButtonLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden sm:grid grid-cols-2 gap-4 max-w-xs w-full">
      <Button
        variant="link"
        to="shop/men"
        className={`${
          pathname === "/shop/men"
            ? "bg-current"
            : "bg-transparent border border-current text-current p-3"
        }`}
        scroll={false}
      >
        <span
          className={`${
            pathname === "/shop/men"
              ? "text-white mix-blend-exclusion"
              : "text-current font-medium"
          } font-display text-sm md:text-base`}
        >
          Men
        </span>
      </Button>
      <Button
        variant="link"
        to="shop/women"
        className={`${
          pathname === "/shop/women"
            ? "bg-current"
            : "bg-transparent border border-current text-current p-3"
        }`}
        scroll={false}
      >
        <span
          className={`${
            pathname === "/shop/women"
              ? "text-white mix-blend-exclusion"
              : "text-current font-medium"
          } font-display text-sm md:text-base`}
        >
          Women
        </span>
      </Button>
    </div>
  );
}

export default ButtonLinks;
