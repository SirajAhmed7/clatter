import NotLaunched from "../../../components/shoes/NotLaunched";
import ShoesContent from "../../../components/shoes/ShoesContent";
import Reviews from "../../../components/shoes/reviews/Reviews";
import Footer from "../../../components/ui/Footer";
import SecondaryHeaderNav from "../../../components/ui/SecondaryHeaderNav";
import { getShoes } from "../../../firebase/getShoes";
import { Shoe } from "../../../firebase/shoeInterface";
import { reverseSlugify } from "../../../utils/utils";

export default async function ShoesPage({
  params,
}: {
  params: { slug: string };
}) {
  const name = reverseSlugify(params.slug);

  const [shoes, shoesFallback] = await getShoes(name);

  const curShoes: Shoe = shoes.launched ? shoes : shoesFallback;

  // if (shoes.launched)
  return (
    <>
      {!shoes.launched && <NotLaunched name={shoes.name} />}
      <header>
        <SecondaryHeaderNav />
      </header>
      <main className="px-4 space-y-10 mb-24">
        <ShoesContent shoes={curShoes} />
        <Reviews
          starRating={curShoes.starRating}
          trueToFit={curShoes.trueToFit}
          reveiws={curShoes.reviews}
        />
      </main>
      <Footer />
    </>
  );

  // else
  //   return (
  //     <>
  //       <NotLaunched name={shoes.name} />
  //       <header>
  //         <SecondaryHeaderNav />
  //       </header>
  //       <main className="px-4 space-y-10 mb-24">
  //         <ShoesContent shoes={shoesFallback} />
  //         <Reviews
  //           starRating={shoesFallback.starRating}
  //           trueToFit={shoesFallback.trueToFit}
  //           reveiws={shoesFallback.reviews}
  //         />
  //       </main>
  //       <Footer />
  //     </>
  //   );
}
