import HomeNewsletter from "../../components/home/homeNewslettter/HomeNewsletter";
import Hero from "../../components/sustainability/Hero";
import ReducingEF from "../../components/sustainability/ReducingEF";
import SustainabilityInfo from "../../components/sustainability/SustainabilityInfo";
import Transparency from "../../components/sustainability/Transparency";
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
        <ReducingEF />
        <HomeNewsletter />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default page;
