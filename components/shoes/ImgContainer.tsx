"use client";

import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

type Props = {
  img1: string;
  img2: string;
  img3: string;
  name: string;
};

function ImgContainer({ img1, img2, img3, name }: Props) {
  const imgItems = [
    <div
      className="relative w-full h-[360px] md:h-[400px] lg:h-auto flex-grow basis-full shrink-0 md:shrink md:rounded-[48px] overflow-hidden"
      onDragStart={(e) => e.preventDefault()}
      role="presentation"
      data-value="1"
      key={img1}
    >
      <Image
        src={img1}
        fill
        alt={name}
        className="absolute top-0 left-0 object-cover"
      />
    </div>,
    <div
      className="relative w-full h-[360px] md:h-[400px] lg:h-auto flex-grow basis-full shrink-0 md:shrink md:rounded-[48px] overflow-hidden"
      onDragStart={(e) => e.preventDefault()}
      role="presentation"
      data-value="2"
      key={img2}
    >
      <Image
        src={img2}
        fill
        alt={name}
        className="absolute top-0 left-0 object-cover"
      />
    </div>,
    <div
      className="block xl:hidden relative w-full h-[360px] md:h-[400px] lg:h-auto flex-grow basis-full shrink-0 md:shrink md:rounded-[48px] overflow-hidden"
      onDragStart={(e) => e.preventDefault()}
      role="presentation"
      data-value="3"
      key={img3}
    >
      <Image
        src={img3}
        fill
        alt={name}
        className="absolute top-0 left-0 object-cover"
      />
    </div>,
  ];

  const onlyImgItems = [
    <Image
      src={img1}
      fill
      alt={name}
      className="object-cover h-[400px]"
      key={img1}
    />,
    <Image
      src={img2}
      fill
      alt={name}
      className="object-cover h-[400px]"
      key={img2}
    />,
    <Image
      src={img3}
      fill
      alt={name}
      className="object-cover h-[400px]"
      key={img3}
    />,
  ];

  return (
    // <div className="flex flex-col gap-5 col-span-7">
    // <ImageCarousel>
    //   <div className="relative w-full h-[400px] lg:h-auto flex-grow basis-full shrink-0 lg:shrink rounded-none lg:rounded-[48px] overflow-hidden">
    //     <Image
    //       src={img1}
    //       fill
    //       alt={name}
    //       className="absolute top-0 left-0 object-cover"
    //     />
    //   </div>
    //   <div className="relative w-full h-[400px] lg:h-auto flex-grow basis-full shrink-0 lg:shrink rounded-none lg:rounded-[48px] overflow-hidden">
    //     <Image
    //       src={img2}
    //       fill
    //       alt={name}
    //       className="absolute top-0 left-0 object-cover"
    //     />
    //   </div>
    //   <div className="block xl:hidden relative w-full h-[400px] lg:h-auto flex-grow basis-full shrink-0 lg:shrink rounded-none lg:rounded-[48px] overflow-hidden">
    //     <Image
    //       src={img3}
    //       fill
    //       alt={name}
    //       className="absolute top-0 left-0 object-cover"
    //     />
    //   </div>
    // </ImageCarousel>
    <ImageCarousel items={imgItems} imgItems={onlyImgItems} />
  );
}

export default ImgContainer;
