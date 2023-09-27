import HeaderNav from "../../ui/HeaderNav";
import ShopHeaderImage from "./ShopHeaderImage";

function ShopHeader() {
  return (
    <header className="p-4 h-[65vh] md:h-screen mb-16">
      <div className="relative h-full w-full rounded-[36px] sm:rounded-[48px]">
        <HeaderNav />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl lg:text-8xl font-extrabold text-white">
          Shop
        </h1>
        <ShopHeaderImage />
        {/* <ShopFilters /> */}
      </div>
    </header>
  );
}

export default ShopHeader;
