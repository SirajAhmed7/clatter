"use client";

import { usePathname } from "next/navigation";
import { Shoe } from "../../../firebase/shoeInterface";
import ShoeSize from "../../ui/ShoeSize";

type Props = {
  allShoes: Shoe[];
};

function FilterSize({ allShoes }: Props) {
  const pathname = usePathname();

  const type = pathname.split("/").at(2);

  const allSizes = allShoes
    .filter((shoe) => shoe.type === type || shoe.type === "all")
    .reduce<string[]>((acc, shoe) => [...acc, ...shoe.sizes!], [])
    .filter((size, i, sizes) => sizes.indexOf(size) === i)
    .sort((a, b) => Number(a) - Number(b));

  return (
    <div className="space-y-3">
      <h6 className="text-xl font-medium text-neutral-950">Size</h6>
      <div className="grid grid-cols-6 gap-3">
        {allSizes.map((size) => (
          <ShoeSize key={size} shoeSize={size} size={40} />
        ))}
      </div>
    </div>
  );
}

export default FilterSize;
