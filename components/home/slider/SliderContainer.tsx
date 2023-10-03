"use client";

import { LayoutGroup, motion } from "framer-motion";
import { Shoe } from "../../../firebase/shoeInterface";
import SliderCard from "./SliderCard";
import { useEffect, useState, useRef } from "react";
// import { getAllShoes } from "../../../firebase/getAllShoes";

type Props = {
  shoes: string;
};

// function SliderContainer({ shoes }: Props) {
function SliderContainer({ shoes: shoesData }: Props) {
  // const [shoes, setShoes] = useState<Shoe[]>();
  const [openIndex, setOpenIndex] = useState(1);
  const [scaleTimeout, setScaleTimeout] = useState<number>();
  // const constraintsRef = useRef(null);
  const ref = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const shoes: Shoe[] = JSON.parse(shoesData);

  // useEffect(function () {
  //   async function fetchData() {
  //     const data = await getAllShoes();

  //     setShoes(data);
  //   }

  //   fetchData();
  // }, []);

  useEffect(
    function () {
      const sw = ref.current?.scrollWidth
        ? ref.current?.scrollWidth - window.innerWidth + Number(32) // 32 is padding
        : window.innerWidth;
      // console.log(
      //   ref.current?.scrollWidth
      //     ? ref.current?.scrollWidth - window.innerWidth
      //     : window.innerWidth
      // );

      setScrollWidth(sw);
    },
    [ref.current?.scrollWidth]
  );

  function handleHover(i: number) {
    const timeoutId = setTimeout(() => {
      setOpenIndex(i);
    }, 150);
    // console.log(typeof timeoutId);
    setScaleTimeout(Number(timeoutId));
  }

  function handleMouseLeave() {
    if (scaleTimeout) {
      clearTimeout(scaleTimeout);
    }
  }

  return (
    // <div className="w-full px-4">
    <motion.div
      ref={ref}
      drag={"x"}
      dragConstraints={{ left: -scrollWidth, right: 0 }}
      dragTransition={{ timeConstant: 200 }}
      dragElastic={0.2}
      className="flex items-center gap-5 w-full cursor-grab"
    >
      <LayoutGroup>
        {shoes?.map((shoe, i) => (
          <SliderCard
            key={shoe.name}
            name={shoe.name}
            price={shoe.price}
            sliderImg={shoe.sliderImg}
            className="flex-grow w-full"
            curIndex={i}
            openIndex={openIndex}
            onHover={handleHover}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </LayoutGroup>
    </motion.div>
    // </div>
  );
}

export default SliderContainer;
