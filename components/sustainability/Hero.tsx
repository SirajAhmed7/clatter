// import Image from "next/image";

function Hero() {
  return (
    <section className="pl-4 sm:pl-5 space-y-4 sm:space-y-10 mb-48">
      <h1 className="text-5xl min-[400px]:text-6xl sm:text-8xl lg:text-9xl font-extrabold font-display text-neutral-950 leading-[116%] tracking-tight">
        Sustainability
      </h1>
      <div className="flex flex-col-reverse sm:flex-row gap-6">
        <p className="body-text pr-4 sm:p-0 text-neutral-950 max-w-sm sm:max-w-[200px] md:max-w-xs lg:max-w-sm">
          At Clatter, we are deeply committed to sustainability in every aspect
          of our business. We believe that fashion should not come at the cost
          of our planet or the people involved in the production process.
          That&apos;s why we have made it our mission to create stylish footwear
          that is both environmentally friendly and socially responsible.
        </p>
        <div className="relative h-96 ml-11 sm:ml-0 sm:h-[580px] rounded-l-[48px] sm:basis-full overflow-hidden bg-[url('/sustainabilityHero.webp')] bg-cover bg-left">
          {/* <Image
            src={"/sustainabilityHero.webp"}
            fill
            // sizes="(min-width: 1200px) 67vw"
            className="object-cover"
            alt="Beach"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
