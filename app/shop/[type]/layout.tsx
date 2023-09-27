import ShopHeader from "../../../components/shop/shopHeader/ShopHeader";
import Footer from "../../../components/ui/Footer";
import AllShoesProvider from "../../../contexts/AllShoesContext";
import { getAllShoes } from "../../../firebase/getAllShoes";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allShoes = await getAllShoes();

  const allShoesString = JSON.stringify(allShoes);

  return (
    <AllShoesProvider allShoes={allShoesString}>
      <ShopHeader />
      <main>{children}</main>
      <Footer />
    </AllShoesProvider>
  );
}
