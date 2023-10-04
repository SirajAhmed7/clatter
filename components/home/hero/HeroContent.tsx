"use client";

import { useNav } from "../../../contexts/NavContext";
import Button from "../../ui/Button";

export default function HeroContent() {
  const floating = useNav();
  return (
    // <div className="absolute w-full text-white p-6 md:pl-[6%] bottom-0 md:bottom-12 z-10">
    <div
      className={`relative lg:absolute ${
        floating ? "mt-[274px] md:mt-[258px]" : "mt-[200px] md:mt-[200px]"
      } w-full text-white p-6 md:pl-[6%] mb-4 lg:mb-0 bottom-0 lg:bottom-12 z-10`}
    >
      <h1 className="font-display text-4xl md:text-6xl font-semibold md:leading-[115%] max-w-3xl mb-2 md:mb-4">
        Elevate Your Style, Minimize Your Footprint
      </h1>
      <h3 className="font-body max-w-2xl text-base md:text-xl text-neutral-50 md:leading-[30px] mb-8">
        Sustainable footwears that combine fashion-forward designs with
        eco-friendly materials and ethical production practices.
      </h3>
      <div className="flex gap-6">
        <Button
          variant="link"
          className="w-48 bg-white text-neutral-900 font-medium py-4"
          to="shop/men"
        >
          Shop men
        </Button>
        <Button
          variant="link"
          className="w-48 bg-white text-neutral-900 font-medium py-4"
          to="shop/women"
        >
          Shop women
        </Button>
      </div>
    </div>
  );
}
