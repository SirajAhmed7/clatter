import ButtonLinks from "./ButtonLinks";
import DropDown from "../../ui/DropDown";
import Filter from "../filterAndSort/Filter";

function ShopFilters() {
  return (
    <div className="flex justify-between items-center py-2 px-9">
      {/* <button className="flex gap-2 text-xl items-center font-medium px-5 py-2 rounded-xl hover:bg-neutral-300/30">
        Filter
        <span>
          <PiCaretDownBold />
        </span>
      </button> */}
      <DropDown windowKey="filter">
        <DropDown.Button>Filter</DropDown.Button>
        <DropDown.Window>
          <Filter />
        </DropDown.Window>
      </DropDown>

      <ButtonLinks />

      <DropDown xPos="right" windowKey="sort">
        <DropDown.Button>Sort</DropDown.Button>
        <DropDown.Window>
          <div></div>
        </DropDown.Window>
      </DropDown>
    </div>
  );
}

export default ShopFilters;
