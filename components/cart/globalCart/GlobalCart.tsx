import { useCart } from "../../../contexts/CartContext";
import DropDown from "../../ui/DropDown";
import CartWindow from "./CartWindow";
import GlobalCartButton from "./GlobalCartButton";

function GlobalCart({
  yPos,
  layoutId,
}: {
  yPos: "top" | "bottom";
  layoutId: string;
}) {
  const { cart } = useCart();

  return (
    <DropDown
      xPos="right"
      yPos={yPos}
      openOnHover
      windowKey={`globalCart-${yPos}`}
    >
      <DropDown.Button customClassName="no-class" hoverOpenColor="" noCaret>
        <GlobalCartButton
          hoverBgColor={
            layoutId === "navLink"
              ? "bg-white/10"
              : layoutId === "floatingNavLink"
              ? "bg-[#194759]/10"
              : "bg-primary-700/10"
          }
          // layoutId={yPos === "bottom" ? "navLink" : "floatingNavLink"}
          layoutId={layoutId}
          cartLength={cart.length}
          cartLengthBgColor={
            layoutId === "navLink" ? "bg-white" : "bg-primary-500"
          }
        />
      </DropDown.Button>
      {/* <DropDown.Window maxHeight={"460px"} scrollPosNearest> */}
      <DropDown.Window scrollPosNearest>
        <CartWindow cart={cart} />
      </DropDown.Window>
    </DropDown>
  );
}

export default GlobalCart;
