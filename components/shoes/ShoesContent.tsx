import Image from "next/image";
import { Shoe } from "../../firebase/shoeInterface";
import ImgContainer from "./ImgContainer";
import ButtonGroup from "./textContent/ButtonGroup";
import CareGuide from "./textContent/CareGuide";
import Colors from "./textContent/Colors";
import Description from "./textContent/Description";
import Materials from "./textContent/Materials";
import Sizes from "./textContent/Sizes";

type Props = {
  shoes: Shoe;
};

function ShoesContent({ shoes }: Props) {
  return (
    // <div className="grid grid-cols-12 gap-5 h-[1400px]">
    <section className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-2 lg:gap-5">
      <ImgContainer
        img1={shoes.img1!}
        img2={shoes.img2!}
        img3={shoes.img3!}
        name={shoes.name}
      />
      {/* <div className="pt-8 col-span-5 px-9"> */}
      <div className="pt-4 md:pt-8 px-3 lg:px-9 pb-6 space-y-4 lg:space-y-6">
        <div className="space-y-3">
          <h1 className="heading-h2 lg:!text-5xl">{shoes.name}</h1>
          <h2 className="text-2xl lg:text-4xl font-display text-neutral-950 font-medium tracking-tight">
            ${shoes.price}
          </h2>
        </div>
        <Colors colors={shoes.allColors!} />
        <Sizes sizes={shoes.sizes!} />
        <ButtonGroup />
        <Description description={shoes.description} />
        <Materials
          materials={shoes.materials}
          className="block md:hidden lg:block"
        />
        <CareGuide careGuide={shoes.careGuide} />
      </div>
      {shoes.img3 && (
        <Image
          src={shoes.img3}
          height={0}
          width={0}
          sizes="100%"
          className="hidden xl:block w-full max-h-[640px] object-cover col-span-2 rounded-[48px]"
          alt={shoes.name}
          unoptimized
        />
      )}
      <Materials
        materials={shoes.materials}
        className="hidden md:block lg:hidden col-span-2 p-4"
      />
    </section>
  );
}

export default ShoesContent;
