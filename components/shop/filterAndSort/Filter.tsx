"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAllShoes } from "../../../contexts/AllShoesContext";
import { Shoe } from "../../../firebase/shoeInterface";
import Button from "../../ui/Button";
import FilterColor from "./FilterColor";
import FilterSize from "./FilterSize";

function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const { allShoes: allShoesString } = useAllShoes();
  const allShoes: Shoe[] = JSON.parse(allShoesString);

  return (
    <div className="py-4 px-5 space-y-5">
      <FilterColor allShoes={allShoes} />
      <FilterSize allShoes={allShoes} />
      <Button
        variant="outline"
        className="px-6 py-2"
        onClick={() => router.push(pathname)}
      >
        Clear filters
      </Button>
    </div>
  );
}

export default Filter;
