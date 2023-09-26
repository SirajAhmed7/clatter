import { PiCaretDownBold } from "react-icons/pi";
import ButtonLinks from "./ButtonLinks";

function ShopFilters() {
  return (
    <div className="flex justify-between items-center py-2 px-9">
      <button className="flex gap-2 text-xl items-end font-medium">
        Filter
        <span>
          <PiCaretDownBold />
        </span>
      </button>
      <ButtonLinks />
      <button className="flex gap-2 text-xl items-end font-medium">
        Sort
        <span>
          <PiCaretDownBold />
        </span>
      </button>
    </div>
  );
}

export default ShopFilters;
