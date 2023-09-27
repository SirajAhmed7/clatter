import AllShoes from "../../../components/shop/allShoes/AllShoes";
import ShopHeader from "../../../components/shop/shopHeader/ShopHeader";
import Footer from "../../../components/ui/Footer";
import AllShoesProvider from "../../../contexts/AllShoesContext";
import { getAllShoes } from "../../../firebase/getAllShoes";

async function ShopPage() {
  const allShoes = await getAllShoes();

  const allShoesString = JSON.stringify(allShoes);

  return (
    <AllShoesProvider allShoes={allShoesString}>
      <ShopHeader />
      <main>
        <AllShoes />
      </main>
      <Footer />
    </AllShoesProvider>
  );
}

export default ShopPage;
