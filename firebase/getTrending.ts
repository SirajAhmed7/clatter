import {
  DocumentData,
  DocumentReference,
  collection,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import firebasApp from "./firebaseConfig";
import { Shoe } from "./shoeInterface";
// import { Shoe } from "./shoeInterface";

const db = getFirestore(firebasApp);

const getArrayData = async <T>(
  docRefs: Promise<DocumentData | undefined>[]
) => {
  const dataArray: T[] = [];

  // await docRefs.forEach(async (doc) => {
  //   const d = await doc;
  //   dataArray.push(d);
  // });
  for (const doc of docRefs) {
    const d = await doc;
    dataArray.push(d as T);
  }

  return dataArray;
};

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
