import AboutLg from "./AboutLg";
import AboutSm from "./AboutSm";

function About() {
  return (
    <section className="mt-48 lg:mt-[15vw] mb-64">
      <div className="block md:hidden">
        <AboutSm />
      </div>
      <div className="hidden md:block">
        <AboutLg />
      </div>
    </section>
  );
}

export default About;
