"use client";

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface CartItem {
  name: string;
  price: number;
  thumbnailImg: string;
  size: string;
  quantity: number;
}

type CartInput = {
  name: string;
  price: number;
  thumbnailImg: string;
  size: string;
};

type cartContextType = {
  cart: CartItem[];
  addToCart: (shoe: CartInput) => void;
  removeFromCart: (name: string, size: string) => void;
  clearCart: () => void;
  addOneQuantity: (name: string, size: string) => void;
  removeOneQuantity: (name: string, size: string) => void;
  totalAmount: number;
};

const cartContext = createContext<cartContextType>({
  cart: [],
  addToCart() {},
  removeFromCart() {},
  clearCart() {},
  addOneQuantity() {},
  removeOneQuantity() {},
  totalAmount: 0,
});

function updateLocalStorageCart(newCart: CartItem[]) {
  const cartString = JSON.stringify(newCart);
  localStorage.setItem("cart", cartString);
}

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(function () {
    const localCart = localStorage.getItem("cart");

    if (localCart) setCart(JSON.parse(localCart));
  }, []);

  const addToCart = (shoe: CartInput) => {
    let cartItem: CartItem;

    const shoeExistsIndex = cart.findIndex(
      (curShoe) => curShoe.name === shoe.name && curShoe.size === shoe.size
    );

    if (shoeExistsIndex > -1) {
      cartItem = { ...shoe, quantity: cart[shoeExistsIndex].quantity + 1 };

      const prevCart = cart.map((el) => el);

      prevCart.splice(shoeExistsIndex, 1);

      const newCart = [...prevCart, cartItem];

      setCart(newCart);

      updateLocalStorageCart(newCart);
    } else {
      cartItem = { ...shoe, quantity: 1 };

      const newCart = [...cart, cartItem];

      setCart(newCart);

      updateLocalStorageCart(newCart);
    }

    toast.success(`${shoe.name} added to cart`);
  };

  const removeFromCart = (name: string, size: string) => {
    const curShoeId = cart.findIndex(
      (shoe) => shoe.name === name && shoe.size === size
    );

    const newCart = cart.filter((shoe, id) => id !== curShoeId);

    setCart(newCart);

    updateLocalStorageCart(newCart);
  };

  const clearCart = () => {
    setCart([]);

    localStorage.removeItem("cart");
  };

  const addOneQuantity = (name: string, size: string) => {
    const newCart = cart.map((shoe) =>
      shoe.name === name && shoe.size === size
        ? { ...shoe, quantity: shoe.quantity + 1 }
        : shoe
    );

    setCart(newCart);
    updateLocalStorageCart(newCart);
  };

  const removeOneQuantity = (name: string, size: string) => {
    const curShoe = cart.find(
      (shoe) => shoe.name === name && shoe.size === size
    );

    if (curShoe?.quantity === 1) {
      removeFromCart(name, size);
      return;
    }

    const newCart = cart.map((shoe) =>
      shoe.name === name && shoe.size === size
        ? { ...shoe, quantity: shoe.quantity - 1 }
        : shoe
    );

    setCart(newCart);
    updateLocalStorageCart(newCart);
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        addOneQuantity,
        removeOneQuantity,
        totalAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(cartContext);

  if (context === undefined) {
    throw new Error("cartContext was used outside the CartProvider");
  }

  return context;
}
