import RenderStars from "../../ui/RenderStars";

type Props = {
  starRating: number | undefined;
  ratingsQty: number | undefined;
};

function OverallRating({ starRating, ratingsQty }: Props) {
  // const ratingFloor = Math.floor(starRating!);
  // const extraRating = starRating! - ratingFloor;
  // const clipPercent = (extraRating / 1) * 100;

  return (
    <div className="space-y-2 font-display">
      <h6 className="heading-h6 text-neutral-700">Overall rating:</h6>
      <div className="flex items-end gap-4">
        {/* <div className="flex gap-1">
          {Array(ratingFloor)
            .fill(0)
            .map((_, i) => (
              <PiStarFill
                className="text-4xl text-[#ED8A19]"
                key={`${_}${i}`}
              />
            ))}
          {extraRating > 0 && (
            <PiStarFill
              className="text-4xl text-[#ED8A19]"
              style={{
                clipPath: `polygon(0 0, ${clipPercent}% 0, ${clipPercent}% 100%, 0% 100%)`,
              }}
            />
          )}
        </div> */}
        <RenderStars starRating={starRating} sizeLg={40} sizeSm={32} />
        <div className="text-4xl md:text-5xl font-display font-bold text-neutral-950 tracking-tight">
          {starRating?.toFixed(1)}
          <span className="font-display font-light text-neutral-800 text-3xl md:text-4xl ml-2">
            ({ratingsQty})
          </span>
        </div>
      </div>
    </div>
  );
}

export default OverallRating;
