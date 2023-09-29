import ButtonLinks from "./ButtonLinks";
import DropDown from "../../ui/DropDown";
import Filter from "../filter/Filter";
import { useEffect, useRef, useState } from "react";
import Sort from "../sort/Sort";

function ShopFilters() {
  const [filterMaxHeight, setFilterMaxHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(function () {
    setFilterMaxHeight(
      ref.current ? window.innerHeight - ref.current?.offsetHeight : 0
    );

    function handleWindowResize() {
      setFilterMaxHeight(
        ref.current ? window.innerHeight - ref.current?.offsetHeight : 0
      );
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div ref={ref} className="flex justify-between items-center py-2 px-9">
      {/* <button className="flex gap-2 text-xl items-center font-medium px-5 py-2 rounded-xl hover:bg-neutral-300/30">
        Filter
        <span>
          <PiCaretDownBold />
        </span>
      </button> */}
      <DropDown windowKey="filter">
        <DropDown.Button>Filter</DropDown.Button>
        <DropDown.Window maxHeight={filterMaxHeight}>
          <Filter />
        </DropDown.Window>
      </DropDown>

      <ButtonLinks />

      <DropDown xPos="right" windowKey="sort">
        <DropDown.Button>Sort</DropDown.Button>
        <DropDown.Window maxHeight={filterMaxHeight}>
          <Sort />
        </DropDown.Window>
      </DropDown>
    </div>
  );
}

export default ShopFilters;
