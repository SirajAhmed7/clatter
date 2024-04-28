import { DocumentData } from "firebase/firestore";

export async function getArrayData<T>(
  docRefs: Promise<DocumentData | undefined>[]
) {
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
}
