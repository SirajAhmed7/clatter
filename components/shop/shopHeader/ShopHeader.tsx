import HeaderNav from "../../ui/HeaderNav";
import ShopHeaderImage from "./ShopHeaderImage";

function ShopHeader() {
  return (
    <header className="p-4 h-[65vh] lg:h-screen mb-16">
      <div className="relative h-full w-full rounded-[36px] sm:rounded-[48px] overflow-hidden">
        <HeaderNav />
        <ShopHeaderImage />
        {/* <ShopFilters /> */}
      </div>
    </header>
  );
}

export default ShopHeader;
