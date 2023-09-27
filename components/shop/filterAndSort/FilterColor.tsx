"use client";

import { usePathname } from "next/navigation";
import { Shoe } from "../../../firebase/shoeInterface";
import ShoeColor from "../../ui/ShoeColor";

type Props = {
  allShoes: Shoe[];
};

function FilterColor({ allShoes }: Props) {
  const pathname = usePathname();

  const type = pathname.split("/").at(2);

  const allColors = allShoes
    .filter((shoe) => shoe.type === type || shoe.type === "all")
    .reduce<Shoe["color"][]>((acc, shoe) => [...acc, shoe.color], [])
    .reduce<Shoe["color"][]>(
      (acc, color) => [...acc.filter((c) => c.name !== color.name), color],
      []
    );

  return (
    <div className="space-y-3">
      <h6 className="text-xl font-medium text-neutral-950">Color</h6>
      <div className="grid grid-cols-6 gap-3">
        {allColors.map((color) => (
          <ShoeColor
            key={color.colorCode}
            colorCode={color.colorCode}
            name={color.name}
            size={36}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterColor;
