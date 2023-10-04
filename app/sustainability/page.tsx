import Hero from "../../components/sustainability/Hero";
import SustainabilityInfo from "../../components/sustainability/SustainabilityInfo";
import SecondaryHeaderNav from "../../components/ui/SecondaryHeaderNav";

function page() {
  return (
    <>
      <header>
        <SecondaryHeaderNav />
      </header>
      <main>
        <Hero />
        <SustainabilityInfo />
      </main>
    </>
  );
}

export default page;
