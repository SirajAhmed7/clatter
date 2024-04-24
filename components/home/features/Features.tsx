import Image from "next/image";
import FeaturesContainer from "./FeaturesContainer";

function Features() {
  return (
    <section className="px-4 mb-64 grid grid-cols-12 items-center overflow-x-clip">
      <FeaturesContainer />
      <div className="relative col-span-10 md:col-span-9 col-start-3 md:col-start-4 min-h-[100vh] sm:min-h-[115vh] lg:min-h-[100vh] translate-x-[6%] lg:translate-x-[2%] rounded-l-[48px] overflow-hidden -z-0 row-start-1">
        <Image
          src={"/features.webp"}
          fill
          alt="A girl and a boy holding hands"
          priority
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
      </div>
    </section>
  );
}

export default Features;
