import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import firebasApp from "./firebaseConfig";
import { Shoe } from "./shoeInterface";

const db = getFirestore(firebasApp);

export async function getShoes(slug: string) {
  const querySnapshot = query(
    collection(db, "shoes"),
    where("name", "==", slug)
  );

  const docsSnap = await getDocs(querySnapshot);

  // const shoes = querySnapshot.docs.map((doc) => doc?.data());

  let shoes: Shoe[] = [];

  docsSnap.forEach((doc) => {
    shoes = [...shoes, doc.data() as Shoe];
  });

  const [curShoes] = shoes;

  if (!curShoes.launched) {
    const querySnapshot = query(
      collection(db, "shoes"),
      where("name", "==", "Stride Classic Teal")
    );

    const docsSnap = await getDocs(querySnapshot);

    docsSnap.forEach((doc) => {
      shoes = [...shoes, doc.data() as Shoe];
    });
  }

  return shoes;
}
