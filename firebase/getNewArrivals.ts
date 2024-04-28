import {
  DocumentReference,
  collection,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import firebasApp from "./firebaseConfig";
import { Shoe } from "./shoeInterface";
import { getArrayData } from "./getArrayData";

const db = getFirestore(firebasApp);

export async function getNewArrivals() {
  // const newArrivals: Shoe[] = [];

  const querySnapshot = await getDocs(collection(db, "newArrivals"));

  const newArrivalsDoc = querySnapshot.docs.map((doc) => doc?.data());

  const newArrivalsIds = newArrivalsDoc.map((doc) => doc.shoeId);

  const newArrivalsSnapShot = newArrivalsIds.map(
    async (id: DocumentReference) => await getDoc(id)
  );

  const newArrivalsRefs = newArrivalsSnapShot.map(async (doc) => {
    return (await doc).data();
  });

  const newArrivals = await getArrayData<Shoe>(newArrivalsRefs);

  return newArrivals;
}
