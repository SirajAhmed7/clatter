"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    title: "Eco-friendly materials",
    body: "Clatter shoes are made with recycled, renewable or biodegradable materials, such as cotton canvas, natural rubber, cork and wool. These materials reduce the environmental impact of shoe production and disposal.",
  },
  {
    title: "Durable design",
    body: "Clatter shoes are designed to last for a long time, with sturdy stitching, cushioned soles and breathable fabrics. They are also easy to clean and maintain, so you can enjoy them for many seasons.",
  },
  {
    title: "Versatile style",
    body: "Clatter shoes come in a variety of colors, shapes and sizes, so you can find the perfect pair for your outfit and mood. Whether you need casual trainers, classic slippers, light walkers or urban casuals, Clatter has something for everyone.",
  },
  {
    title: "Affordable price",
    body: "Clatter shoes are not only good for the planet, but also for your wallet. They offer high-quality footwear at reasonable prices, so you can treat yourself without breaking the bank.",
  },
];

function FeaturesContainer() {
  const [curFeature, setCurFeature] = useState(0);
  const feature = features.at(curFeature);
  return (
    <div className="relative col-span-9 lg:col-span-6 min-h-64 min-h-[480px] max-h-max sm:min-h-[360px] sm:h-[360px] flex flex-col-reverse md:flex-row items-center bg-[#F5F5F5] bg-opacity-20 rounded-[40px] backdrop-blur-[20px] z-10 col-start-1 lg:col-start-1 row-start-1 shadow-[0px_10px_24px_0px_rgba(0,0,0,0.10)] overflow-hidden">
      <div className="flex flex-shrink flex-row md:flex-col gap-4 px-5 py-5">
        {features.map((_, i) => (
          <button
            className={`h-3 md:h-4 w-3 md:w-4 rounded-full transition-colors duration-300 ease-out ${
              i === curFeature ? "bg-primary-600" : "bg-primary-600/20"
            }`}
            onClick={() => setCurFeature(i)}
            key={i}
          ></button>
        ))}
      </div>
      <AnimatePresence>
        {/* <motion.div
          key={feature?.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-full w-full flex-grow flex justify-center items-center px-5 py-8"
        > */}
        <div className="relative h-full w-full flex-grow flex justify-center items-center px-5 py-8">
          <motion.div
            key={feature?.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-lg"
          >
            <h3 className="font-display text-2xl lg:text-[32px] font-semibold leading-[124%] text-neutral-950">
              {feature?.title}
            </h3>
            <p className="body-text text-neutral-950">{feature?.body}</p>
          </motion.div>
          {/* {features.map((feat, i) => (
            <>
              {i === curFeature && (
                <motion.div
                  key={feat?.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 max-w-lg"
                >
                  <h3 className="font-display text-2xl lg:text-[32px] font-semibold leading-[124%] text-neutral-950">
                    {feat?.title}
                  </h3>
                  <p className="body-text text-neutral-950">{feat?.body}</p>
                </motion.div>
              )}
            </>
          ))} */}
        </div>
        {/* </motion.div> */}
      </AnimatePresence>
      <div className="absolute hidden md:block left-0 bottom-0 w-[60%] h-[40%] md:w-[40%] md:h-[65%] -translate-x-[30%] translate-y-[25%] rotate-180 -z-10">
        <Image
          src={"/clatterWavePattern.svg"}
          fill
          className="object-contain w-full h-full"
          alt="Clatter wave pattern"
        />
      </div>
    </div>
  );
}

export default FeaturesContainer;
