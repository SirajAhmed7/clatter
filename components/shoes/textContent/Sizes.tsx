import ShoeSize from "../../ui/ShoeSize";

type Props = {
  sizes: string[];
};

function Sizes({ sizes }: Props) {
  const allSizes = sizes.sort((a, b) => Number(a) - Number(b));

  return (
    <div className="md:space-y-2 space-y-3">
      <h4 className="heading-h5">Size</h4>
      <div className="hidden lg:grid grid-cols-[repeat(auto-fill,minmax(48px,48px))] gap-3 items-center">
        {allSizes.map((size) => (
          <ShoeSize shoeSize={size} size={48} key={size} />
        ))}
      </div>
      <div className="grid lg:hidden grid-cols-[repeat(auto-fill,minmax(36px,36px))] gap-3 items-center">
        {allSizes.map((size) => (
          <ShoeSize shoeSize={size} size={36} key={size} />
        ))}
      </div>
    </div>
  );
}

export default Sizes;
