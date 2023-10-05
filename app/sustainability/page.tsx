import Hero from "../../components/sustainability/Hero";
import SustainabilityInfo from "../../components/sustainability/SustainabilityInfo";
import Transparency from "../../components/sustainability/Transparency";
import Footer from "../../components/ui/Footer";
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
        <Transparency />
      </main>
      <Footer />
    </>
  );
}

export default page;
