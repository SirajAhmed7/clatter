import { Reviews } from "../../../firebase/shoeInterface";
import OverallRating from "./OverallRating";
import ReveiwCard from "./ReveiwCard";
import ReviewsContainer from "./ReviewsContainer";
import TrueToFit from "./TrueToFit";

type Props = {
  starRating: number | undefined;
  trueToFit: number | undefined;
  reveiws: Reviews[] | undefined;
};

function Reviews({ starRating, trueToFit, reveiws }: Props) {
  return (
    <section className="w-full bg-primary-200 py-8 md:py-14 px-5 md:px-10 lg:px-20 rounded-[48px] overflow-hidden">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
        <OverallRating starRating={starRating} ratingsQty={reveiws?.length} />
        {trueToFit && (
          <TrueToFit
            trueToFit={trueToFit}
            maxWidth={448}
            pointSize={20}
            scaleSize={12}
            scaleColor="bg-white"
            key={"trueToFit"}
          />
        )}
      </div>
      {/* <div className="flex gap-6"> */}
      {/* TODO: make review container responsive (flex wrap) */}
      <ReviewsContainer>
        {reveiws?.map((rev) => (
          <ReveiwCard review={rev} key={rev.username} />
        ))}
      </ReviewsContainer>
      {/* </div> */}
    </section>
  );
}

export default Reviews;
