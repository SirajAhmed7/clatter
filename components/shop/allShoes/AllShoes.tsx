import { Shoe } from "../../../firebase/shoeInterface";
import Card from "../../ui/Card";

type Props = {
  shoes: Shoe[];
};

function AllShoes({ shoes }: Props) {
  return (
    <section className="px-4 mb-32">
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
    </section>
  );
}

export default AllShoes;
