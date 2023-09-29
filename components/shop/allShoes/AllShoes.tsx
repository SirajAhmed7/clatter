"use client";

import { useAllShoes } from "../../../contexts/AllShoesContext";
import { Shoe } from "../../../firebase/shoeInterface";
import AllShoesContainer from "./AllShoesContainer";

function AllShoes() {
  const { allShoes: allShoesString } = useAllShoes();

  const allShoes: Shoe[] = JSON.parse(allShoesString);

  return (
    <section className="px-4 mb-32">
      <AllShoesContainer allShoes={allShoes} />
    </section>
  );
}

export default AllShoes;
