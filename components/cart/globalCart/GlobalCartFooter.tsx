import { useCart } from "../../../contexts/CartContext";
import Button from "../../ui/Button";

function GlobalCartFooter() {
  const { totalAmount } = useCart();
  return (
    <div className="pt-4 flex justify-between items-center">
      <p className="font-display text-xl leading-9 text-neutral-900">
        Total: <span className="text-[32px] font-bold">${totalAmount}</span>
      </p>

      <Button variant="primary" size="w-52" className="!py-3">
        Checkout
      </Button>
    </div>
  );
}

export default GlobalCartFooter;
