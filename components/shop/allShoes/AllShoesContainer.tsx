import slugify from "slugify";
import { Shoe } from "../../../firebase/shoeInterface";
import Card from "../../ui/Card";
import { usePathname, useSearchParams } from "next/navigation";
import { sortShoes } from "../../../utils/utils";

type Props = {
  allShoes: Shoe[];
};

function AllShoesContainer({ allShoes }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const type = pathname.split("/").at(2);

  const filterColor = searchParams.get("color");
  const filterSize = searchParams.get("size");
  const sort = searchParams.get("sort");

  // eslint-disable-next-line prefer-const
  let shoes = allShoes.filter(
    (shoe) => shoe.type === type || shoe.type === "all"
  );

  if (filterColor)
    shoes = shoes.filter((shoe) => {
      return slugify(shoe.color.name, { lower: true }) === filterColor;
    });

  if (filterSize)
    shoes = shoes.filter((shoe) => shoe.sizes?.includes(filterSize));

  if (sort) {
    const sortBy = sort.split("-").at(0);
    const order = sort.split("-").at(1);

    shoes = shoes.sort((a, b) => sortShoes(a, b, sortBy as keyof Shoe, order!));
  }

  return (
    <>
      {shoes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {/* TODO: if animate doesn't work for sort remove layout group */}
          {shoes.map((shoe) => (
            <Card
              key={shoe.name}
              name={shoe.name}
              price={shoe.price}
              sizes={shoe.sizes}
              thumbnailImg={shoe.thumbnailImg}
              className="flex-grow w-full"
              animate
            />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-2xl md:text-4xl font-medium text-neutral-900">
          Oops, No Matches Found!
        </p>
      )}
    </>
  );
}

export default AllShoesContainer;
