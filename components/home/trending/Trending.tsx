import { getTrending } from "../../../firebase/getTrending";
import Card from "../../ui/Card";

async function Trending() {
  const trending = await getTrending();

  return (
    <section className="mb-64 px-4">
      <h2 className="font-display text-5xl text-neutral-950 font-bold text-center mb-16">
        Trending this month
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
        {trending.map((shoe) => (
          <Card
            key={shoe.name}
            name={shoe.name}
            price={shoe.price}
            thumbnailImg={shoe.thumbnailImg}
            small
            className="flex-grow w-full"
          />
        ))}
      </div>
    </section>
  );
}

export default Trending;
