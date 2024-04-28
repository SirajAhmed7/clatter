import CartShoeSize from "./CartShoeSize";
import DropDown from "./DropDown";

type Props = {
  name: string;
  price: number;
  thumbnailImg: string;
  sizes?: string[];
};

function CardAddToCart({ name, price, thumbnailImg, sizes }: Props) {
  // const ref = useRef<HTMLDivElement>(null);
  // const [sizesWindowWidth, setSizesWindowWidth] = useState<number>();

  // // card-atc-flex

  // const getWidth = useCallback(function getWidth() {
  //   const flexContainerWidth = ref.current
  //     ?.closest(".card-atc-flex")
  //     ?.getBoundingClientRect().width;

  //   setSizesWindowWidth(flexContainerWidth);
  // }, []);

  // useWindowResize(getWidth);

  // // useEffect(function () {
  // //   const flexContainerWidth = ref.current
  // //     ?.closest(".card-atc-flex")
  // //     ?.getBoundingClientRect().width;
  // // }, []);
  const lint = { price, thumbnailImg };
  console.log(lint);

  return (
    <div className="relative flex justify-end w-full z-20">
      {/* <button className="relative after:absolute after:bg-neutral-100/80 after:content-[''] after:w-[140%] after:h-[140%] after:opacity-0 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:after:opacity-100 after:transition-opacity after:ease-in-out after:duration-500 after:rounded-full z-20">
        <span className="relative z-10">Add to cart</span>
      </button> */}
      <DropDown xPos="right" openOnHover windowKey={`${name}-atc`}>
        <DropDown.Button
          customClassName="relative backdrop-blur-lg rounded-xl px-4 py-1 transition-colors"
          noCaret
        >
          Quick add
        </DropDown.Button>
        <DropDown.Window
          className="bg-neutral-100/30 backdrop-blur-lg rounded-2xl w-full"
          scrollPosNearest
        >
          <div
            className="w-full h-full p-4"
            // style={{ width: sizesWindowWidth }}
          >
            <h6 className="text-xl font-medium font-display text-inherit mb-4">
              Pick your size
            </h6>
            <div className="flex flex-wrap gap-3">
              {sizes?.map((size) => (
                <CartShoeSize
                  shoeSize={size}
                  size={40}
                  key={`${name}-${size}`}
                />
              ))}
            </div>
          </div>
        </DropDown.Window>
      </DropDown>
    </div>
  );
}

export default CardAddToCart;
