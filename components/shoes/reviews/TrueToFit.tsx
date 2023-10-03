type Props = {
  trueToFit: number;
  maxWidth: number;
  pointSize: number;
  scaleSize: number;
  scaleColor: string;
};

function TrueToFit({
  trueToFit,
  pointSize,
  scaleSize,
  scaleColor,
  maxWidth,
}: Props) {
  return (
    <div
      className="space-y-2 font-display w-full"
      style={{
        maxWidth: maxWidth !== 0 ? `${maxWidth}px` : "100%",
      }}
    >
      <h6 className="heading-h6 text-neutral-700">Fit:</h6>
      <div
        className="relative grid grid-cols-10 justify-items-center w-full"
        style={{ height: `${pointSize}px` }}
      >
        <div
          className="relative h-full bg-primary-900 rounded-full z-10"
          style={{
            width: `${pointSize}px`,
            gridColumnStart: trueToFit,
            justifyItems:
              trueToFit === 1 ? "start" : trueToFit === 10 ? "end" : "center",
          }}
        ></div>
        <div
          className={`absolute w-full left-0 top-1/2 -translate-y-1/2 rounded-full ${scaleColor}`}
          style={{
            height: `${scaleSize}px`,
          }}
        ></div>
      </div>
      <div className="flex justify-between heading-h6 text-neutral-700">
        <span>Runs small</span>
        <span>Spot on</span>
        <span>Runs large</span>
      </div>
    </div>
  );
}

export default TrueToFit;
