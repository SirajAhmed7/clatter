import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebasApp from "./firebaseConfig";
import { Shoe } from "./shoeInterface";

const db = getFirestore(firebasApp);

export async function getAllShoes() {
  const querySnapshot = await getDocs(collection(db, "shoes"));

  const newArrivals = querySnapshot.docs.map((doc) => doc?.data());

  return newArrivals as Shoe[];
}
