import { DocumentReference } from "firebase/firestore";

interface Colors {
  color: string;
  name: string;
  id: DocumentReference;
}

export interface Shoe {
  name: string;
  price: number;
  sliderImg: string;
  thumbnailImg: string;
  launched: boolean;
  id?: string;
  colors?: Colors[];
  qty?: number;
  description?: string;
  materials?: { name: string; description: string }[];
  img1?: string;
  img2?: string;
  img3?: string;
  sizes?: string[];
  trueToFit?: number;
  type: "men" | "women" | "all";
}
