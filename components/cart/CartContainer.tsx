"use client";

import { PiWarningCircle, PiX } from "react-icons/pi";
import { useCart } from "../../contexts/CartContext";
import CartListItem from "./CartListItem";

function CartContainer() {
  const { cart, clearCart } = useCart();
  return (
    <div className="space-y-6 lg:basis-2/3">
      <div className="flex gap-5 items-center text-neutral-950">
        <h2 className="heading-h2 mr-2">Cart</h2>

        <div className="min-h-full basis-[2px] self-stretch flex-shrink-0 py-1">
          <div className="bg-neutral-300 h-full w-full"></div>
        </div>

        <button
          className="flex justify-center items-center gap-3 flex-shrink-0 text-base sm:text-xl font-medium px-3 py-2 text-neutral-950 rounded-xl hover:bg-primary-200 transition-colors duration-300"
          onClick={clearCart}
        >
          <span>
            <PiX className="text-2xl" />
          </span>
          Empty cart
        </button>
      </div>
      <div
        className={`flex flex-col gap-3 sm:gap-4 md:gap-6 ${
          cart.length > 0 ? "p-3 sm:p-4 mg:p-6" : "px-5 py-12 lg:py-20"
        } bg-white rounded-[32px]`}
      >
        {cart.length > 0 ? (
          cart.map((shoe) => (
            <CartListItem
              cartItem={shoe}
              key={`cart-${shoe.name}-${shoe.size}`}
            />
          ))
        ) : (
          // <div className="flex flex-col gap-2 items-center justify-center text-center text-neutral-900 min-h-20 md:min-h-28 mx-auto">
          <div className="flex flex-col gap-2 items-center justify-center text-center text-neutral-900 mx-auto">
            <PiWarningCircle className="text-2xl md:text-4xl" />
            <p className="text-xl md:text-3xl font-display font-normal">
              Your cart is currently empty
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartContainer;
