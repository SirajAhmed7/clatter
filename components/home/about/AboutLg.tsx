"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AboutLg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const p3Ref = useRef<HTMLDivElement>(null);
  const [imgDims, setImgDims] = useState({ width: 0, height: 0 });
  const [height2, setHeight2] = useState(0);
  const [height3, setHeight3] = useState(0);

  const { scrollYProgress: p2ScrollY } = useScroll({
    target: p2Ref,
    offset: ["start end", "center center"],
  });

  const { scrollYProgress: p3ScrollY } = useScroll({
    target: p3Ref,
    offset: ["start end", "center center"],
  });

  useMotionValueEvent(p2ScrollY, "change", (y) => {
    setHeight2(
      imgContainerRef.current ? y * imgContainerRef.current?.offsetHeight : 0
    );
  });

  useMotionValueEvent(p3ScrollY, "change", (y) => {
    setHeight3(
      imgContainerRef.current ? y * imgContainerRef.current?.offsetHeight : 0
    );
  });

  useEffect(
    function () {
      setImgDims({
        width: imgContainerRef.current
          ? imgContainerRef.current?.offsetWidth
          : 0,
        height: imgContainerRef.current
          ? imgContainerRef.current?.offsetHeight
          : 0,
      });
    },
    [
      imgContainerRef.current?.offsetWidth,
      imgContainerRef.current?.offsetHeight,
    ]
  );

  return (
    <div
      ref={containerRef}
      className="relative flex items-start overflow-x-clip px-4"
    >
      <div className={`sticky top-0 h-screen flex-grow basis-1/2`}>
        <img
          src={"/clatterWavePatternFaded.svg"}
          // className="absolute w-[40%] h-auto -right-[15%] -bottom-[95%] -z-10"
          // className="absolute sm:w-2/3 lg:w-[80%] h-auto -right-[100%] -top-[120%] translate-x-[40%] lg:translate-x-[30%] -translate-y-[70%] sm:translate-y-[50%] lg:translate-y-[80%] -z-[5]"
          className="absolute sm:w-[120%] lg:w-[80%] h-auto -right-[123%] top-0 -translate-y-[35vw] lg:-translate-y-[25vw] -z-[5]"
          alt="Clatter wave pattern"
        />
        <div className="relative h-full -z-20">
          <div
            ref={imgContainerRef}
            className="absolute max-h-[640px] inset-0 my-auto rounded-[48px] overflow-hidden"
          >
            <div
              // className="absolute bg-[center_top] min-[1800px]:bg-[center_center] top-0 left-0 max-h-[640px] w-full h-full bg-[url('/about3.jpg')]"
              className="absolute bg-cover min-[1800px]:bg-[center_center] top-0 left-0 max-h-[640px] w-full h-full bg-[url('/about3.jpg')]"
              // className="absolute top-0 left-0 max-h-[640px] w-full h-full"
              style={{
                height: height3,
                // backgroundSize: `auto ${imgHeight}px`,
                backgroundSize:
                  imgDims.width > imgDims.height
                    ? `${imgDims.width}px auto`
                    : imgDims.width < imgDims.height
                    ? `auto ${imgDims.height}px`
                    : `${imgDims.height}px ${imgDims.height}px`,
              }}
            ></div>
            <div
              // className="absolute bg-[center_top] min-[1800px]:bg-[center_center] bg-cover top-0 left-0 max-h-[640px] w-full h-full -z-10 bg-[url('/about2.jpg')]"
              className="absolute bg-cover min-[1800px]:bg-[center_center] top-0 left-0 max-h-[640px] w-full h-full -z-10 bg-[url('/about2.jpg')]"
              style={{
                height: height2,
                backgroundSize:
                  imgDims.width > imgDims.height
                    ? `${imgDims.width}px auto`
                    : imgDims.width < imgDims.height
                    ? `auto ${imgDims.height}px`
                    : `${imgDims.height}px ${imgDims.height}px`,
              }}
            ></div>
            <div className="absolute bg-[center_top] min-[1800px]:bg-[center_center] bg-cover top-0 left-0 max-h-[640px] w-full h-full -z-20 bg-[url('/about1.jpg')]"></div>
          </div>
        </div>
        <div className="absolute h-full w-full right-0 top-0 translate-x-full bg-about-text-gradient -z-10"></div>
      </div>
      <div className="basis-1/2">
        <div className="md:h-[130vh] lg:h-screen relative mx-[10%] -z-20">
          <div className="space-y-5 max-w-[440px] mx-auto max-h-min absolute inset-0 my-auto">
            <h2 className="heading-h2">Where Fashion Meets Sustainability</h2>
            <p className="body-text">
              At Clatter, we understand how frustrating it can be to find
              stylish and sustainable options. We believe that style and
              responsibility go hand in hand, and that&apos;s why we&apos;re
              committed to creating footwear that not only looks good but also
              does good. With Clatter, you can step confidently knowing that
              every pair of shoes is crafted with a deep respect for the planet
              and its people.
            </p>
          </div>
        </div>
        <div className="md:h-[130vh] lg:h-screen relative mx-[10%] -z-20">
          <div
            ref={p2Ref}
            className="space-y-5 max-w-[440px] mx-auto max-h-min absolute inset-0 my-auto"
          >
            <h2 className="heading-h2">Uncompromising Comfort and Quality</h2>
            <p className="body-text">
              We understand that sustainability goes beyond materials and
              production methods. That&apos;s why Clatter is committed to
              crafting footwear that offers superior comfort and lasting
              quality. Each pair is carefully designed and engineered to provide
              optimal support and durability, so you can step confidently
              throughout your day, knowing your shoes are made to last.
            </p>
          </div>
        </div>
        <div className="md:h-[130vh] lg:h-screen relative mx-[10%] -z-20">
          <div
            ref={p3Ref}
            className="space-y-5 max-w-[440px] mx-auto max-h-min absolute inset-0 my-auto"
          >
            <h2 className="heading-h2">
              Join a Movement of Empowered Conscious Consumers
            </h2>
            <p className="body-text">
              Clatter is more than just a brand; it&apos;s a movement. By
              choosing Clatter, you become part of a community of conscious
              consumers who value sustainability and want to make a positive
              impact. We&apos;re empowering individuals like you to make
              informed choices, inspire others, and collectively shape a better,
              more sustainable world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLg;
