"use client";

import AliceCarousel from "react-alice-carousel";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
// import "react-alice-carousel/lib/alice-carousel.css";

type Props = {
  items: React.JSX.Element[];
  imgItems: React.JSX.Element[];
};

const renderPrevButton = ({
  isDisabled,
}: {
  isDisabled?: boolean | undefined;
}) => {
  return (
    <button
      style={{ opacity: isDisabled ? "0.5" : 1 }}
      className="h-full hidden sm:flex items-center cursor-pointer"
    >
      <PiCaretLeft className="text-2xl text-neutral-800" />
    </button>
  );
};

const renderNextButton = ({
  isDisabled,
}: {
  isDisabled?: boolean | undefined;
}) => {
  return (
    <button
      style={{ opacity: isDisabled ? "0.5" : 1 }}
      className="h-full hidden sm:flex items-center cursor-pointer"
    >
      <PiCaretRight className="text-2xl text-neutral-800" />
    </button>
  );
};

function ImageCarousel({ items }: Props) {
  const responsive = {
    0: { items: 1 },
  };

  return (
    <div className="h-full">
      <div className="w-full h-[400px] md:h-full hidden md:block overflow-hidden rounded-[48px]">
        <div className="flex flex-row h-full md:flex-col gap-0 md:gap-5 transition-all duration-500">
          {items.map((item) => item)}
        </div>
      </div>
      <div className="md:hidden rounded-[36px] overflow-hidden">
        <AliceCarousel
          mouseTracking
          infinite
          responsive={responsive}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          items={items}
        />
      </div>
    </div>
  );
}

export default ImageCarousel;
