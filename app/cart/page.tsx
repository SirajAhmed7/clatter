import CartSection from "../../components/cart/CartSection";
import Trending from "../../components/home/trending/Trending";
import Footer from "../../components/ui/Footer";
import SecondaryHeaderNav from "../../components/ui/SecondaryHeaderNav";

function CartPage() {
  return (
    <>
      <header>
        <SecondaryHeaderNav />
      </header>
      <main>
        <CartSection />
        <Trending headingLeft />
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
