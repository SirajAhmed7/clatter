"use client";

import { PiArrowRight } from "react-icons/pi";

function HomeNewsletterForm() {
  return (
    <form className="relative">
      <input
        type="email"
        className="w-full h-12 bg-[#f5f5f5]/20 backdrop-blur-[20px] rounded-xl px-6 font-display text-white placeholder:text-neutral-200 placeholder:text-lg focus:outline-neutral-400 shadow-10"
        placeholder="Email"
      />
      <button
        onClick={(e) => e.preventDefault()}
        className="absolute right-6 top-1/2 -translate-y-1/2"
      >
        <PiArrowRight className="text-white text-2xl" />
      </button>
    </form>
  );
}

export default HomeNewsletterForm;
