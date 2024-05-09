import CartContainer from "./CartContainer";
import CartSummary from "./CartSummary";

function CartSection() {
  return (
    <section className="px-4 flex flex-col lg:flex-row gap-6 mt-7 mb-36">
      <CartContainer />
      <CartSummary />
    </section>
  );
}

export default CartSection;
