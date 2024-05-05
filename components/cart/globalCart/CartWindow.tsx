import { PiWarningCircle } from "react-icons/pi";
import { CartItem } from "../../../contexts/CartContext";

function CartWindow({ cart }: { cart: CartItem[] }) {
  return (
    <div className="px-8 py-5 text-neutral-900">
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <p key={cartItem.name}>
            {cartItem.name} {cartItem.size} Quantity:{cartItem.quantity}
          </p>
        ))
      ) : (
        <div className="flex flex-col gap-2 items-center justify-center text-center text-neutral-900 min-h-28 max-w-44">
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
