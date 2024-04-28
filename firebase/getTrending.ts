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
// import { Shoe } from "./shoeInterface";

const db = getFirestore(firebasApp);

export async function getTrending() {
  const querySnapshot = await getDocs(collection(db, "trending"));

  const trendingDocs = querySnapshot.docs.map((doc) => doc?.data());

  const trendingIds = trendingDocs.map((id) => id.shoeId);
  // .map(async (id) => await getDoc(id));

  const trendingSnapShot = trendingIds.map(
    async (id: DocumentReference) => await getDoc(id)
  );

  const trendingRefs = trendingSnapShot.map(async (doc) => {
    return (await doc).data();
  });

  const trending = await getArrayData<Shoe>(trendingRefs);

  return trending;
}
