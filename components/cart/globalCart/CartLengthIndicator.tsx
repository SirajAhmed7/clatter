import { useCart } from "../../../contexts/CartContext";

function CartLengthIndicator({
  cartLengthBgColor,
}: {
  cartLengthBgColor: string;
}) {
  const { cartLength } = useCart();
  return (
    <>
      {cartLength > 0 && (
        <div
          className={`absolute -top-2 -right-2 h-5 w-5 rounded-full ${cartLengthBgColor} ${
            cartLengthBgColor === "bg-white" ? "text-neutral-900" : "text-white"
          } flex justify-center items-center font-display text-xs z-20`}
        >
          {cartLength}
        </div>
      )}
    </>
  );
}

export default CartLengthIndicator;
