"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useAllShoes } from "../../../contexts/AllShoesContext";
import { Shoe } from "../../../firebase/shoeInterface";
import Card from "../../ui/Card";

function AllShoes() {
  const { allShoes: allShoesString } = useAllShoes();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const type = pathname.split("/").at(2);

  const allShoes: Shoe[] = JSON.parse(allShoesString);

  const filterColor = searchParams.get("color");
  const filterSize = searchParams.get("size");

  // eslint-disable-next-line prefer-const
  let shoes = allShoes.filter(
    (shoe) => shoe.type === type || shoe.type === "all"
  );

  if (filterColor)
    shoes = shoes.filter((shoe) => {
      return shoe.color.name === filterColor;
    });

  if (filterSize)
    shoes = shoes.filter((shoe) => shoe.sizes?.includes(filterSize));

  return (
    <section className="px-4 mb-32">
      {shoes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {shoes.map((shoe) => (
            <Card
              key={shoe.name}
              name={shoe.name}
              price={shoe.price}
              thumbnailImg={shoe.thumbnailImg}
              className="flex-grow w-full"
            />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-2xl md:text-4xl font-medium text-neutral-900">
          Oops, No Matches Found!
        </p>
      )}
    </section>
  );
}

export default AllShoes;
