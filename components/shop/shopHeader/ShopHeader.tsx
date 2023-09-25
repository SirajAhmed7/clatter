import HeaderNav from "../../ui/HeaderNav";
import ShopFilters from "./ShopFilters";
import ShopHeaderImage from "./ShopHeaderImage";

function ShopHeader() {
  return (
    <header className="p-4 lg:h-screen mb-[800px]">
      <div className="relative h-full w-full rounded-[36px] sm:rounded-[48px] overflow-hidden">
        <HeaderNav />
        <ShopHeaderImage />
        {/* <ShopFilters /> */}
      </div>
    </header>
  );
}

export default ShopHeader;
