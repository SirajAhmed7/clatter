import { Shoe } from "../firebase/shoeInterface";

export function sortShoes(a: Shoe, b: Shoe, prop: keyof Shoe, order: string) {
  const nameA = String(a[prop]).toLowerCase();
  const nameB = String(b[prop]).toLowerCase();

  // Extract alphabetical and numerical parts of names
  const alphaPartA = nameA.replace(/[0-9]/g, "");
  const alphaPartB = nameB.replace(/[0-9]/g, "");

  const numericPartA = parseInt(nameA.replace(/\D/g, ""), 10);
  const numericPartB = parseInt(nameB.replace(/\D/g, ""), 10);

  if (order === "asc") {
    // Compare alphabetical parts
    if (alphaPartA < alphaPartB) {
      return -1; // alphaPartA comes before alphaPartB
    } else if (alphaPartA > alphaPartB) {
      return 1; // alphaPartA comes after alphaPartB
    }

    // If alphabetical parts are equal, compare numerical parts
    if (numericPartA < numericPartB) {
      return -1; // numericPartA comes before numericPartB
    } else if (numericPartA > numericPartB) {
      return 1; // numericPartA comes after numericPartB
    }
  }

  if (order === "desc") {
    // Compare alphabetical parts
    if (alphaPartA < alphaPartB) {
      return 1; // alphaPartA comes before alphaPartB
    } else if (alphaPartA > alphaPartB) {
      return -1; // alphaPartA comes after alphaPartB
    }

    // If alphabetical parts are equal, compare numerical parts
    if (numericPartA < numericPartB) {
      return 1; // numericPartA comes before numericPartB
    } else if (numericPartA > numericPartB) {
      return -1; // numericPartA comes after numericPartB
    }
  }

  return 0; // names are equal
}
