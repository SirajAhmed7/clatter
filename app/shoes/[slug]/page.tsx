import ShoesContent from "../../../components/shoes/ShoesContent";
import Reviews from "../../../components/shoes/reviews/Reviews";
import Footer from "../../../components/ui/Footer";
import SecondaryHeaderNav from "../../../components/ui/SecondaryHeaderNav";
import { getShoes } from "../../../firebase/getShoes";
import { reverseSlugify } from "../../../utils/utils";

export default async function ShoesPage({
  params,
}: {
  params: { slug: string };
}) {
  const name = reverseSlugify(params.slug);

  const [shoes] = await getShoes(name);

  return (
    <>
      <header>
        <SecondaryHeaderNav />
      </header>
      <main className="px-4 space-y-10 mb-24">
        <ShoesContent shoes={shoes} />
        <Reviews
          starRating={shoes.starRating}
          trueToFit={shoes.trueToFit}
          reveiws={shoes.reviews}
        />
      </main>
      <Footer />
    </>
  );
}
