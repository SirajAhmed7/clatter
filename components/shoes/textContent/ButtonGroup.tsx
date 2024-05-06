"use client";

import { useSearchParams } from "next/navigation";
import Button from "../../ui/Button";
import { useCart } from "../../../contexts/CartContext";
import toast from "react-hot-toast";

// To get selected size from search params

function ButtonGroup({
  shoe,
}: {
  shoe: { name: string; price: number; thumbnailImg: string };
}) {
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const { addToCart } = useCart();

  // const name = pathname.split("/").at(2)?.replaceAll("-", " ");
  const size = searchParams.get("size");

  return (
    <div className="w-full flex flex-col gap-2 md:gap-4 py-2">
      <Button variant="primary" className="text-base lg:text-lg">
        Buy now
      </Button>
      <Button
        variant="secondary"
        className="text-base lg:text-lg"
        // disabled={size ? false : true}
        onClick={() => {
          if (!size) toast.error("Select a shoe size!");
          else addToCart({ ...shoe, size });
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ButtonGroup;
