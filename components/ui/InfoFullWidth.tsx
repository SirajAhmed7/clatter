import Image from "next/image";

type Props = {
  heading: string;
  body: string;
  img: string;
  isImgLeft?: boolean;
  showPattern?: boolean;
};

function InfoFullWidth({ heading, body, img, isImgLeft, showPattern }: Props) {
  return (
    <div className="relative overflow-x-clip">
      <div
        className={`grid grid-cols-1 gap-5 ${
          !isImgLeft ? "md:grid-cols-[1fr_1.4fr]" : "md:grid-cols-[1.4fr_1fr]"
        }`}
      >
        <div
          className={`w-full ${
            !isImgLeft
              ? "p-5 md:pl-10 col-start-1"
              : "col-start-1 md:col-start-2 p-5 md:p-0 flex justify-end md:pr-14"
          }`}
        >
          <div className="space-y-3 max-w-md py-0 md:py-8 lg:py-28">
            <h2 className="heading-h2 text-neutral-950">{heading}</h2>
            <p className="body-text text-neutral-900">{body}</p>
          </div>
        </div>
        <div
          className={`relative ${
            !isImgLeft
              ? "rounded-l-[48px] col-start-1 md:col-start-2 row-start-1 h-80 md:h-auto translate-x-[20%] md:translate-x-0"
              : "rounded-r-[48px] col-start-1 row-start-1 h-80 md:h-auto -translate-x-[20%] md:translate-x-0"
          } overflow-hidden`}
        >
          <Image
            src={img}
            fill
            // sizes="(min-width: 1200px) 67vw"
            className="object-cover"
            alt="Production"
            priority
          />
        </div>
      </div>
      {showPattern && (
        <img
          src={"/clatterWavePatternFaded.svg"}
          // className="absolute w-[40%] h-auto -right-[15%] -bottom-[95%] -z-10"
          className={`absolute sm:w-[35%] lg:w-[27%] h-auto ${
            !isImgLeft
              ? "right-0 translate-x-[40%] md:translate-x-[30%]"
              : // : "left-0 -rotate-90 -translate-x-[40%] lg:-translate-x-[30%]"
                "left-0 -rotate-90 -translate-x-[30%]"
          } bottom-0 translate-y-[70%] sm:translate-y-[70%] lg:translate-y-[70%] -z-50 opacity-20 md:opacity-100`}
          alt="Clatter wave pattern"
        />
      )}
    </div>
  );
}

export default InfoFullWidth;
