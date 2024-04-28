import Card from "../../ui/Card";
import { getNewArrivals } from "../../../firebase/getNewArrivals";

export default async function NewArrivalsContainer() {
  const newArrivals = await getNewArrivals();

  return (
    <div className="relative z-[1]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {newArrivals.map((shoe) => (
          <Card
            key={shoe.name}
            name={shoe.name}
            price={shoe.price}
            sizes={shoe.sizes}
            thumbnailImg={shoe.thumbnailImg}
            className="flex-grow w-full"
          />
        ))}
      </div>
      <img
        src={"/clatterWavePatternFaded.svg"}
        // className="absolute w-[40%] h-auto -right-[15%] -bottom-[95%] -z-10"
        className="absolute block md:hidden sm:w-2/3 lg:w-[40%] h-auto right-0 bottom-0 translate-x-[40%] lg:translate-x-[30%] translate-y-[70%] sm:translate-y-[50%] lg:translate-y-[80%] -z-50"
        alt="Clatter wave pattern"
      />
    </div>
  );
}
