import Image from "next/image";
import { CartItem, useCart } from "../../../contexts/CartContext";
import { PiMinus, PiPlus, PiTrash } from "react-icons/pi";
import slugify from "slugify";
import Link from "next/link";

function GlobalCartItem({ cartItem }: { cartItem: CartItem }) {
  const { addOneQuantity, removeOneQuantity, removeFromCart } = useCart();

  const shoeSlug = slugify(cartItem.name);

  return (
    <div className="group flex gap-5 items-center">
      {/* <div className="flex justify-center items-center px-3 self-stretch bg-neutral-50 rounded-[20px]"> */}
      <Link
        href={`/shoes/${shoeSlug}`}
        // className="h-full w-full inline-block"
        className="flex justify-center items-center px-3 self-stretch bg-neutral-50 rounded-[20px]"
      >
        <Image
          src={cartItem.thumbnailImg}
          height={144}
          width={164}
          priority
          alt={cartItem.name}
        />
      </Link>
      {/* </div> */}

      <div className="space-y-2 font-display basis-full py-2">
        <Link href={`/shoes/${shoeSlug}`}>
          <h2 className="text-2xl font-bold leading-8">{cartItem.name}</h2>
        </Link>

        <div className="space-x-2 text-lg">
          <span>${cartItem.price}</span>
          <span>|</span>
          <span>Size: {cartItem.size}</span>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-center overflow-hidden gap-3 border border-neutral-950 rounded-xl w-min">
            <button
              onClick={() => removeOneQuantity(cartItem.name, cartItem.size)}
              className="px-3 py-2 border-neutral-950"
            >
              <PiMinus className="text-2xl" />
            </button>
            <span className="text-base w-2">{cartItem.quantity}</span>
            <button
              onClick={() => addOneQuantity(cartItem.name, cartItem.size)}
              className="px-3 py-2 border-neutral-950"
            >
              <PiPlus className="text-2xl" />
            </button>
          </div>

          {/* <div className="basis-[1.5px] self-stretch py-1 group-hover:opacity-100 opacity-0 transition-all duration-300">
            <div className="h-full w-full bg-neutral-900"></div>
          </div> */}

          <button
            className="group/remove group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto invisible opacity-0 pointer-events-none p-2 transition-all duration-300 rounded-full hover:bg-red-50"
            onClick={() => removeFromCart(cartItem.name, cartItem.size)}
          >
            <PiTrash className="text-2xl text-neutral-900 group-hover/remove:text-red-700 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GlobalCartItem;
