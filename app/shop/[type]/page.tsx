import AllShoes from "../../../components/shop/allShoes/AllShoes";
import ShopHeader from "../../../components/shop/shopHeader/ShopHeader";
import Footer from "../../../components/ui/Footer";

function ShopPage() {
  return (
    <>
      <ShopHeader />
      {/* @ts-expect-error Server Component */}
      <AllShoes />
      <Footer />
    </>
  );
}

export default ShopPage;
