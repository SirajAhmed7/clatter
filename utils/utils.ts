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

export function reverseSlugify(input: string) {
  // Split the input string by hyphens and spaces
  const words = input.split(/[-\s]/);

  // Initialize an array to store the transformed words
  const transformedWords = [];

  // Iterate through the words
  for (let i = 0; i < words.length; i++) {
    const word = words[i].trim();

    // Check if the word starts with a lowercase letter
    if (/^[a-z]/.test(word)) {
      // If it does, combine it with the previous word
      if (i > 0) {
        transformedWords[transformedWords.length - 1] += `-${word}`;
      } else {
        transformedWords.push(word); // If it's the first word, keep it as is
      }
    } else {
      // If the word starts with an uppercase letter, capitalize it
      transformedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
  }

  // Join the transformed words into a single string
  const result = transformedWords.join(" ");

  return result;
}
