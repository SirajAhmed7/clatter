import { getAllShoes } from "../../../firebase/getAllShoes";
import Card from "../../ui/Card";

async function AllShoes() {
  const shoes = await getAllShoes();
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
