import AllShoes from "../../../components/shop/allShoes/AllShoes";
import ShopHeader from "../../../components/shop/shopHeader/ShopHeader";
import Footer from "../../../components/ui/Footer";
import { getAllShoes } from "../../../firebase/getAllShoes";

async function ShopPage({ params }: { params: { type: string } }) {
  const allShoes = await getAllShoes();
  const { type } = params;

  const shoes = allShoes.filter(
    (shoe) => shoe.type === type || shoe.type === "all"
  );

  return (
    <>
      <ShopHeader />
      <AllShoes shoes={shoes} />
      <Footer />
    </>
  );
}

export default ShopPage;
