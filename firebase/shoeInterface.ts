import { DocumentReference } from "firebase/firestore";

export interface Colors {
  colorCode: string;
  name: string;
  id: DocumentReference;
}

export interface Reviews {
  starRating: number;
  heading: string;
  body: string;
  trueToFit: number;
  username: string;
  userImg: string;
}

export interface Shoe {
  name: string;
  price: number;
  sliderImg: string;
  thumbnailImg: string;
  launched: boolean;
  color: { colorCode: string; name: string };
  type: "men" | "women" | "all";
  id?: string;
  allColors?: Colors[];
  careGuide?: string[];
  qty?: number;
  description?: string;
  materials?: { name: string; description: string }[];
  img1?: string;
  img2?: string;
  img3?: string;
  sizes?: string[];
  starRating?: number;
  reviews?: Reviews[];
  trueToFit?: number;
}
