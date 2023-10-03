import { PiStarFill } from "react-icons/pi";

type Props = {
  starRating: number | undefined;
  sizeLg: number;
  sizeSm: number;
};

function RenderStars({ starRating, sizeLg, sizeSm }: Props) {
  const ratingFloor = Math.floor(starRating!);
  const extraRating = starRating! - ratingFloor;
  const clipPercent = (extraRating / 1) * 100;

  return (
    <div className="flex gap-1">
      {Array(ratingFloor)
        .fill(0)
        .map((_, i) => (
          <div key={`${_}${i}`}>
            <PiStarFill
              className="hidden md:inline-block text-[#ED8A19]"
              style={{
                fontSize: `${sizeLg}px`,
              }}
            />
            <PiStarFill
              className="inline-block md:hidden text-[#ED8A19]"
              style={{
                fontSize: `${sizeSm}px`,
              }}
            />
          </div>
        ))}
      {extraRating > 0 && (
        <div>
          <PiStarFill
            className="hidden md:inline-block text-[#ED8A19]"
            style={{
              clipPath: `polygon(0 0, ${clipPercent}% 0, ${clipPercent}% 100%, 0% 100%)`,
              fontSize: `${sizeLg}px`,
            }}
          />
          <PiStarFill
            className="inline-block md:hidden text-[#ED8A19]"
            style={{
              fontSize: `${sizeSm}px`,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default RenderStars;
