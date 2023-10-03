import Image from "next/image";
import { Reviews } from "../../../firebase/shoeInterface";
import RenderStars from "../../ui/RenderStars";
import TrueToFit from "./TrueToFit";

type Props = {
  review: Reviews;
};

function ReveiwCard({ review }: Props) {
  return (
    <div className="flex flex-col gap-4 p-5 bg-white rounded-[32px] md:min-w-[320px] max-w-full md:max-w-xs md:min-h-[384px]">
      <div className="flex items-center gap-5">
        <Image
          src={review.userImg}
          width={36}
          height={36}
          className="rounded-full"
          alt="User image"
        />
        <div className="heading-h6 text-neutral-950">{review.username}</div>
      </div>
      <RenderStars starRating={review.starRating} sizeLg={24} sizeSm={24} />
      <div className="space-y-2">
        <h5 className="subheading-1 text-neutral-900">{review.heading}</h5>
        <p className="body-text text-neutral-900">{review.body}</p>
      </div>
      <div className="mt-3 md:mt-auto">
        <TrueToFit
          trueToFit={review.trueToFit}
          maxWidth={0}
          pointSize={12}
          scaleSize={7}
          scaleColor="bg-neutral-100"
        />
      </div>
    </div>
  );
}

export default ReveiwCard;
