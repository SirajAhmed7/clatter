import { getAllShoes } from "../../../firebase/getAllShoes";
import SliderContainer from "./SliderContainer";

async function Slider() {
  const shoes = await getAllShoes();

  const shoesData = JSON.stringify(shoes);

  return (
    <section className="relative px-4 mb-48 overflow-x-clip">
      {/* // <section className="px-4 mb-48"> */}
      <SliderContainer shoes={shoesData} />
      <img
        src={"/clatterWavePatternFaded.svg"}
        // className="absolute w-[40%] h-auto -right-[15%] -bottom-[95%] -z-10"
        className="absolute top-1/2 left-1/2 -z-[1] -translate-x-[75%] -translate-y-[20%] rotate-[155deg] scale-[2.5] opacity-50 pointer-events-none select-none"
        alt="Clatter wave pattern"
      />
    </section>
  );
}

export default Slider;
