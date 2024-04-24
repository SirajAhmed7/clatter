import Image from "next/image";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

function Sustainability() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 px-4 items-center justify-items-center mb-64 overflow-x-clip">
      <div className="space-y-4 px-5 max-w-md">
        <h2 className="heading-h2">Sustainability</h2>
        <p className="body-text">
          At Clatter, we are deeply committed to sustainability in every aspect
          of our business. We believe that fashion should not come at the cost
          of our planet or the people involved in the production process.
          That&apos;s why we have made it our mission to create stylish footwear
          that is both environmentally friendly and socially responsible.
        </p>
        <Link
          href={"/sustainability"}
          className="flex items-center text-xl font-body underline text-neutral-950 space-x-2"
        >
          <span>Learn more</span>
          <span>
            <PiArrowRight className="text-xl" />
          </span>
        </Link>
      </div>
      <div className="rounded-[48px] overflow-hidden row-start-1 md:col-start-2 min-h-[384px] md:min-h-[400px] lg:min-h-[640px] max-h-[90vh] relative w-full h-full">
        <Image
          src={"/homeSustainability-min.jpg"}
          fill
          priority
          className="absolute object-cover w-full h-full"
          alt="Shoes in a garden of flowers"
        />
      </div>
      <div className="absolute top-0 right-0 w-[75%] md:w-[50%] h-[400px] lg:h-[500px] translate-x-1/3 -translate-y-2/3 rotate-90 -z-10">
        <Image
          src={"/clatterWavePatternFaded.svg"}
          fill
          className="absolute object-contain w-full h-full"
          alt="Clatter wave pattern"
        />
      </div>
    </section>
  );
}

export default Sustainability;
