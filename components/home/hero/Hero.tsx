import HeaderNav from "./HeaderNav";
import HeroBgVideo from "./HeroBgVideo";
import HeroContent from "./HeroContent";
// import dynamic from "next/dynamic";

// const HeroBgVideo = dynamic(() => import("./HeroBgVideo"), { ssr: false });

export default function Hero() {
  return (
    <header className="p-4 lg:h-screen">
      <div className="relative h-full w-full rounded-[36px] sm:rounded-[48px] overflow-hidden">
        <HeaderNav />
        <HeroContent />
        <HeroBgVideo />
      </div>
    </header>
  );
}
