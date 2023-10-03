import ShoeColor from "../../ui/ShoeColor";
import { Colors } from "../../../firebase/shoeInterface";

type Props = {
  colors: Colors[];
};

function Colors({ colors }: Props) {
  return (
    <div className="space-y-2 md:space-y-3">
      <h4 className="heading-h5">Colors</h4>
      {/* <div className="grid grid-cols-10 items-center"> */}
      <div className="hidden lg:grid grid-cols-[repeat(auto-fill,minmax(48px,48px))] gap-3 items-center">
        {colors.map((color) => (
          <ShoeColor
            colorCode={color.colorCode}
            size={48}
            name={color.name}
            isLink
            to={`${color.name}`}
            key={color.colorCode}
          />
        ))}
      </div>
      <div className="grid lg:hidden grid-cols-[repeat(auto-fill,minmax(32px,32px))] gap-3 items-center">
        {colors.map((color) => (
          <ShoeColor
            colorCode={color.colorCode}
            size={32}
            name={color.name}
            isLink
            to={`${color.name}`}
            key={color.colorCode}
          />
        ))}
      </div>
    </div>
  );
}

export default Colors;
