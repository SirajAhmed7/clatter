import slugify from "slugify";
import { CartItem, useCart } from "../../contexts/CartContext";
import Link from "next/link";
import Image from "next/image";
import { PiMinus, PiPlus, PiTrash } from "react-icons/pi";

function CartListItem({ cartItem }: { cartItem: CartItem }) {
  const { addOneQuantity, removeOneQuantity, removeFromCart } = useCart();

  const shoeSlug = slugify(cartItem.name);

  return (
    <div className="group flex gap-3 sm:gap-4 md:gap-5 items-center">
      {/* <div className="flex justify-center items-center px-3 self-stretch bg-neutral-50 rounded-[20px]"> */}
      <Link
        href={`/shoes/${shoeSlug}`}
        // className="h-full w-full inline-block"
        className="relative px-8 self-stretch bg-neutral-50 min-w-[40%] sm:min-w-[35%] basis-2/5 rounded-3xl sm:rounded-[22px] md:rounded-[20px]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-full">
          <Image
            src={cartItem.thumbnailImg}
            // height={150}
            // width={220}
            fill={true}
            priority
            className="object-contain"
            alt={cartItem.name}
          />
        </div>
      </Link>
      {/* </div> */}

      <div className="space-y-2 md:space-y-6 font-display basis-full py-1 sm:py-4 md:py-6 text-neutral-900">
        <div className="flex gap-4 justify-between">
          <div className="sm:space-y-1">
            <Link href={`/shoes/${shoeSlug}`}>
              <h2 className="text-lg sm:text-xl md:text-[28px] font-medium md:leading-8">
                {cartItem.name}
              </h2>
            </Link>

            <p className="text-sm sm:text-xl text-neutral-800">
              Size: {cartItem.size}
            </p>

            <div className="block sm:hidden text-2xl md:text-[32px] font-semibold mt-1">
              ${cartItem.price}
              {/* <span>|</span> */}
            </div>
          </div>
          <div className="hidden sm:block text-lg sm:text-2xl md:text-[32px] font-semibold">
            ${cartItem.price}
            {/* <span>|</span> */}
          </div>
        </div>

        <div className="flex gap-4 justify-between items-center">
          <div className="flex items-center overflow-hidden gap-2 sm:gap-3 border border-neutral-950 rounded-lg sm:rounded-xl w-min">
            <button
              onClick={() => removeOneQuantity(cartItem.name, cartItem.size)}
              className="px-3 py-2 border-neutral-950"
            >
              <PiMinus className="text-base sm:text-xl md:text-3xl" />
            </button>
            <span className="text-lg md:text-xl w-3 text-center">
              {cartItem.quantity}
            </span>
            <button
              onClick={() => addOneQuantity(cartItem.name, cartItem.size)}
              className="px-3 py-2 border-neutral-950"
            >
              <PiPlus className="text-base sm:text-xl md:text-3xl" />
            </button>
          </div>

          <button
            className="group/remove p-2 transition-all duration-300 rounded-full hover:bg-red-50"
            onClick={() => removeFromCart(cartItem.name, cartItem.size)}
          >
            <PiTrash className="text-2xl md:text-3xl text-neutral-600 group-hover/remove:text-red-700 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
