import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebasApp from "./firebaseConfig";
import { Shoe } from "./shoeInterface";

const db = getFirestore(firebasApp);

export async function getNewArrivals() {
  // const newArrivals: Shoe[] = [];

  const querySnapshot = await getDocs(collection(db, "newArrivals"));

  const newArrivals = querySnapshot.docs.map((doc) => doc?.data());

  return newArrivals as Shoe[];
}
