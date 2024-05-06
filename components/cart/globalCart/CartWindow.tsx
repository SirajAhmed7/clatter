import { PiWarningCircle } from "react-icons/pi";
import { CartItem } from "../../../contexts/CartContext";
import GlobalCartItem from "./GlobalCartItem";
import GlobalCartFooter from "./GlobalCartFooter";

function CartWindow({ cart }: { cart: CartItem[] }) {
  return (
    <div className="p-4 text-neutral-900 w-[460px]" data-lenis-prevent>
      {cart.length > 0 ? (
        <>
          <div className="flex flex-col gap-3 max-h-[440px] rounded-[20px] overflow-y-auto scrollbar-thin rounded-scrollbar scrollbar-track-rounded-full">
            {cart.map((cartItem) => (
              // <p key={cartItem.name}>
              //   {cartItem.name} {cartItem.size} Quantity:{cartItem.quantity}
              // </p>
              <GlobalCartItem
                cartItem={cartItem}
                key={`${cartItem.name}-${cartItem.size}`}
              />
            ))}
          </div>
          <GlobalCartFooter />
        </>
      ) : (
        <div className="flex flex-col gap-2 items-center justify-center text-center text-neutral-900 min-h-28 mx-auto">
          <PiWarningCircle className="text-3xl" />
          <p className="text-xl font-display font-normal">
            Your cart is currently empty
          </p>
        </div>
      )}
    </div>
  );
}

export default CartWindow;
