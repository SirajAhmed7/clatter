"use client";

import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import slugify from "slugify";
import CardAddToCart from "../../ui/CardAddToCart";

type Props = {
  name: string;
  price: number;
  sliderImg: string;
  thumbnailImg: string;
  sizes?: string[];
  className?: string;
  curIndex: number;
  openIndex: number;
  onHover: (i: number) => void;
  onMouseLeave: () => void;
};

function SliderCard({
  name,
  price,
  sliderImg,
  thumbnailImg,
  sizes,
  className = "",
  curIndex,
  openIndex,
  onHover,
  onMouseLeave,
}: Props) {
  const router = useRouter();
  const isHovering = curIndex === openIndex;

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    router.push(`shoes/${slugify(name)}`);
  }

  // const imgVariants = {
  //   rest: {
  //     x: "-50%",
  //     y: "-50%",
  //     rotate: "90deg",
  //   },
  //   hover: {
  //     x: "-50%",
  //     y: "-50%",
  //     rotate: "0",
  //   },
  // };

  // return (
  //   <motion.div
  //     layout
  //     // initial="rest"
  //     // whileHover={"hover"}
  //     // animate="rest"
  //     transition={{
  //       duration: 0.5,
  //       // ease: "easeInOut",
  //       ease: [.47,1.64,.41,.8],
  //       // type: "tween",
  //     }}
  //     className={`relative font-body text-base py-4 px-7 bg-white overflow-hidden ${className} ${
  //       isHovering
  //         ? "min-w-[672px] min-h-[552px] rounded-[40px] text-white"
  //         : "min-h-[356px] min-w-[180px] rounded-[32px] text-neutral-950"
  //     }`}
  //     onMouseEnter={() => onHover(curIndex)}
  //   >
  //     <button
  //       className="block absolute top-0 left-0 w-full h-full z-10 cursor-grab"
  //       // onClick={handleClick}
  //     ></button>
  //     <motion.div
  //       className={`flex flex-col ${
  //         isHovering ? "justify-between" : "justify-end"
  //       } h-full`}
  //     >
  //       {isHovering && (
  //         <div className="flex justify-end">
  //           <button className="relative after:absolute after:bg-white/20 after:content-[''] after:w-[140%] after:h-[140%] after:opacity-0 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:after:opacity-100 after:transition-opacity after:ease-in-out after:duration-500 after:rounded-full z-20">
  //             <span className="relative z-10">Add to cart</span>
  //           </button>
  //         </div>
  //       )}
  //       {/* <motion.div
  //         layout
  //         transition={{ duration: 0.5 }}
  //         className={`flex ${
  //           isHovering ? "justify-between" : "justify-start"
  //         } w-full`}
  //       >
  //         <p>{name}</p>

  //         {isHovering && <p>${price}</p>}
  //       </motion.div> */}
  //       <div className={`w-full z-10`}>
  //         <motion.p
  //           layout
  //           transition={{
  //             duration: 0.5,
  //             ease: [.47,1.64,.41,.8],
  //           }}
  //           className="absolute left-7 bottom-4"
  //         >
  //           {name}
  //         </motion.p>

  //         {isHovering && <p className="absolute right-7 bottom-4">${price}</p>}
  //       </div>
  //     </motion.div>
  //     <motion.div
  //       // layout
  //       initial={{
  //         x: "-50%",
  //         y: "-50%",
  //         // width: "200px",
  //         rotate: isHovering ? "90deg" : "0",
  //       }}
  //       animate={{
  //         x: "-50%",
  //         y: "-50%",
  //         rotate: isHovering ? "0" : "90deg",
  //         scale: isHovering ? "1.8" : "1",
  //         // width: "200px",
  //       }}
  //       exit={{
  //         x: "-50%",
  //         y: "-50%",
  //         rotate: isHovering ? "0" : "90deg",
  //       }}
  //       // variants={imgVariants}
  //       transition={{
  //         duration: 0.5,
  //         ease: [.47,1.64,.41,.8],
  //       }}
  //       // style={{
  //       //   transform: isHovering
  //       //     ? "translate(-50%, -50%)"
  //       //     : "translate(-50%, -50%) rotate(90deg)",
  //       // }}
  //       // className={`absolute top-1/2 left-1/2 -translate-x-1/2 rotate-90 -translate-y-1/2 w-[60%] h-36`}
  //       className={`absolute top-1/2 left-1/2 max-w-xs w-[200px] h-36 z-[1]`}
  //       // className={`absolute top-1/2 left-1/2 h-36 z-[1]`}
  //     >
  //       {/* <Image
  //         src={sliderImg}
  //         // width={280}
  //         // height={150}
  //         // width={264}
  //         // height={80}
  //         unoptimized
  //         fill
  //         alt={name}
  //         // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  //         // className={`object-contain w-full h-full`}
  //         className={`object-contain`}
  //         // className={`"object-contain  ${isHovering ? "rotate-90" : ""}`}
  //       /> */}
  //       <motion.img
  //         src={sliderImg}
  //         // layout
  //         initial={{
  //           objectFit: "contain",
  //         }}
  //         animate={{
  //           objectFit: "scale-down",
  //         }}
  //         // width={280}
  //         // height={150}
  //         // width={264}
  //         // height={80}
  //         // unoptimized
  //         // fill
  //         alt={name}
  //         // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  //         className={`object-contain w-full h-full`}
  //         // className={`object-contain`}
  //         // className={`"object-contain  ${isHovering ? "rotate-90" : ""}`}
  //       />
  //     </motion.div>
  //     <motion.div
  //       initial={{ opacity: 0 }}
  //       animate={{
  //         opacity: isHovering ? 1 : 0,
  //       }}
  //       exit={{ opacity: isHovering ? 1 : 0 }}
  //       // exit={{ opacity: 1 }}
  //       // className="absolute top-0 left-0 w-full h-full bg-slider-hover -z-[0]"
  //       className="absolute top-0 left-0 w-full h-full bg-slider-hover -z-[0]"
  //     ></motion.div>
  //   </motion.div>
  // );

  return (
    <>
      {/* LAPTOP/PC */}
      <motion.div
        layout
        initial={{
          minWidth: "180px",
          // minHeight: "356px",
          // borderRadius: "32px",
          boxShadow: "0px 16px 40px -4px rgba(43, 85, 87, 0)",
        }}
        animate={{
          minWidth: isHovering ? "672px" : "180px",
          boxShadow: isHovering
            ? "0px 16px 40px -4px rgba(43, 85, 87, 0.30)"
            : "0px 16px 40px -4px rgba(43, 85, 87, 0)",
          // minHeight: isHovering ? "552px" : "356px",
          // borderRadius: isHovering ? "40px" : "32px",
        }}
        exit={{
          minWidth: isHovering ? "672px" : "180px",
          boxShadow: isHovering
            ? "0px 16px 40px -4px rgba(43, 85, 87, 0.30)"
            : "0px 16px 40px -4px rgba(43, 85, 87, 0)",
        }}
        // initial="rest"
        // whileHover={"hover"}
        // animate="rest"
        transition={{
          duration: 0.5,
          // ease: "easeInOut",
          ease: [0.47, 1.64, 0.41, 0.8],
          // type: "tween",
        }}
        className={`hidden lg:block relative font-body text-base py-4 px-7 bg-white overflow-hidden ${className} ${
          // className={`hidden relative font-body text-base py-4 px-7 bg-white overflow-hidden ${className} ${
          isHovering
            ? "min-h-[552px] rounded-[40px] text-white"
            : "min-h-[356px] rounded-[32px] text-neutral-950"
        }`}
        onMouseEnter={() => onHover(curIndex)}
        onMouseLeave={onMouseLeave}
      >
        {/* <button
        className="block absolute top-0 left-0 w-full h-full z-10 cursor-grab"
        onClick={handleClick}
      ></button> */}
        {/* <button
        className="block absolute top-0 left-0 w-full h-full z-10 cursor-grab"
        onClick={handleClick}
      ></button> */}
        <motion.div
          className={`flex flex-col ${
            isHovering ? "justify-between" : "justify-end"
          } h-full card-atc-flex`}
        >
          {isHovering && (
            <div className="flex justify-end">
              {/* <button className="relative after:absolute after:bg-white/20 after:content-[''] after:w-[140%] after:h-[140%] after:opacity-0 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:after:opacity-100 after:transition-opacity after:ease-in-out after:duration-500 after:rounded-full z-20">
                <span className="relative z-10">Add to cart</span>
              </button> */}
              <CardAddToCart
                name={name}
                price={price}
                thumbnailImg={thumbnailImg}
                sizes={sizes}
              />
            </div>
          )}
          <div className={`w-full z-10`}>
            <Link
              href={`/shoes/${slugify(name)}`}
              className="absolute left-7 bottom-4"
            >
              <motion.p
                layout
                transition={{
                  duration: 0.5,
                  ease: [0.47, 1.64, 0.41, 0.8],
                }}
                // className="absolute left-7 bottom-4"
              >
                {name}
              </motion.p>
            </Link>

            {isHovering && (
              <p className="absolute right-7 bottom-4">${price}</p>
            )}
          </div>
        </motion.div>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xs w-[200px] h-36 z-[1] pointer-events-none ${
            isHovering ? "rotate-0 scale-[180%]" : "rotate-90 scale-100"
          } transition-all duration-500 ease-[cubic-bezier(0.47,1.64,0.41,0.8)]`}
        >
          <img
            src={sliderImg}
            alt={name}
            // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            className={`object-contain w-full h-full`}
            // className={`object-contain`}
            // className={`"object-contain  ${isHovering ? "rotate-90" : ""}`}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovering ? 1 : 0,
          }}
          exit={{ opacity: isHovering ? 1 : 0 }}
          // exit={{ opacity: 1 }}
          // className="absolute top-0 left-0 w-full h-full bg-slider-hover -z-[0]"
          className="absolute top-0 left-0 w-full h-full bg-slider-hover -z-[0]"
        ></motion.div>
      </motion.div>

      {/* MOBILE/TAB */}
      <div
        className={`relative block lg:hidden font-body text-base md:text-lg text-neutral-950 bg-white rounded-[32px] h-[256px] md:min-h-[296px] min-w-[160px] py-4 px-2 ${className}`}
      >
        <button
          className="block absolute top-0 left-0 w-full h-full z-10"
          onClick={handleClick}
        ></button>
        <div className="flex flex-col justify-end h-full">
          <p className="w-full h-max text-base text-center">{name}</p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-36 rotate-90">
          <Image
            src={sliderImg}
            // width={280}
            // height={150}
            // width={264}
            // height={80}
            unoptimized
            fill
            alt={name}
            // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default SliderCard;
