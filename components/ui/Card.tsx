import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  price: number;
  thumbnailImg: string;
  small?: boolean;
  className?: string;
  animate?: boolean;
};

function Card({
  name,
  price,
  thumbnailImg,
  small,
  className = "",
  animate,
}: Props) {
  if (!animate)
    return (
      <div
        className={`relative font-body text-base md:text-lg text-neutral-950 bg-white rounded-[36px] ${
          small
            ? "min-h-[200px] md:min-h-[296px]"
            : "min-h-[256px] md:min-h-[296px]"
        } ${small ? "py-2 md:py-4" : "py-4"} px-7 ${className}`}
      >
        <Link
          className="block absolute top-0 left-0 w-full h-full z-10"
          href={`/shoes/${name}`}
        ></Link>
        <div
          className={`flex flex-col ${
            small ? "justify-end" : "justify-between"
          } h-full`}
        >
          {!small && (
            <div className="flex justify-end">
              <button className="relative after:absolute after:bg-neutral-100/80 after:content-[''] after:w-[140%] after:h-[140%] after:opacity-0 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:after:opacity-100 after:transition-opacity after:ease-in-out after:duration-500 after:rounded-full z-20">
                <span className="relative z-10">Add to cart</span>
              </button>
            </div>
          )}
          <div
            className={`flex ${
              small ? "justify-center" : "justify-between"
            } w-full`}
          >
            <p className={`${small ? "text-center" : ""}`}>{name}</p>
            {!small && <p>${price}</p>}
          </div>
        </div>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 ${
            small
              ? "-translate-y-[60%] md:-translate-y-1/2"
              : "-translate-y-1/2"
          } w-[70%] md:w-[60%] h-36`}
        >
          <Image
            src={thumbnailImg}
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
    );
  else
    return (
      <motion.div
        className={`relative font-body text-base md:text-lg text-neutral-950 bg-white rounded-[36px] ${
          small
            ? "min-h-[200px] md:min-h-[296px]"
            : "min-h-[256px] md:min-h-[296px]"
        } ${small ? "py-2 md:py-4" : "py-4"} px-7 ${className}`}
        layout
        key={name}
      >
        <Link
          className="block absolute top-0 left-0 w-full h-full z-10"
          href={`/shoes/${name}`}
        ></Link>
        <div
          className={`flex flex-col ${
            small ? "justify-end" : "justify-between"
          } h-full`}
        >
          {!small && (
            <div className="flex justify-end">
              <button className="relative after:absolute after:bg-neutral-100/80 after:content-[''] after:w-[140%] after:h-[140%] after:opacity-0 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:after:opacity-100 after:transition-opacity after:ease-in-out after:duration-500 after:rounded-full z-20">
                <span className="relative z-10">Add to cart</span>
              </button>
            </div>
          )}
          <div
            className={`flex ${
              small ? "justify-center" : "justify-between"
            } w-full`}
          >
            <p className={`${small ? "text-center" : ""}`}>{name}</p>
            {!small && <p>${price}</p>}
          </div>
        </div>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 ${
            small
              ? "-translate-y-[60%] md:-translate-y-1/2"
              : "-translate-y-1/2"
          } w-[70%] md:w-[60%] h-36`}
        >
          <Image
            src={thumbnailImg}
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
      </motion.div>
    );
}

export default Card;
