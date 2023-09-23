import About from "../components/home/about/About";
import Features from "../components/home/features/Features";
import Hero from "../components/home/hero/Hero";
import HomeNewsletter from "../components/home/homeNewslettter/HomeNewsletter";
import NewArrivals from "../components/home/newArrivals/NewArrivals";
import Shop from "../components/home/shop/Shop";
import Slider from "../components/home/slider/Slider";
import Sustainability from "../components/home/sustainability/Sustainability";
import Trending from "../components/home/trending/Trending";

export default async function Home() {
  return (
    <>
      <Hero />
      {/* <div className="max-w-[1360px] mx-auto px-4"> */}
      <NewArrivals />
      <About />
      {/* @ts-expect-error Server Component */}
      <Slider />
      <Features />
      {/* @ts-expect-error Server Component */}
      <Trending />
      <Sustainability />
      <Shop />
      <HomeNewsletter />
    </>
  );
}
