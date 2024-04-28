// "use client";

// import { createContext, useState } from "react";

// export interface CartItem {
//   name: string;
//   price: number;
//   thumbnailImg: string;
//   size: string;
//   quantity: number;
// }

// type cartContextType = {
//   cart: CartItem[];
//   addToCart: (shoe: CartItem) => void;
//   removeFromCart: (name: string) => void;
//   clearCart: () => void;
//   totalAmount: number;
// };

// const cartContext = createContext<cartContextType>({
//   cart: [],
//   addToCart() {},
//   removeFromCart() {},
//   clearCart() {},
//   totalAmount: 0,
// });

// export default function CartContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   return (
//     <cartContext.Provider value={{ cart }}>{children}</cartContext.Provider>
//   );
// }

export {};
