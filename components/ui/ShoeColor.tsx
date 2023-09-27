"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PiCheckBold } from "react-icons/pi";

type Props = {
  colorCode: string;
  name: string;
  size: number;
};

function ShoeColor({ colorCode, name, size }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const borderRadius = size / 4;

  const curColorFilter = searchParams.get("color");

  function handleClick() {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    curColorFilter !== name
      ? current.set("color", name)
      : current.delete("color");

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }

  return (
    <button
      style={{
        backgroundColor: colorCode,
        width: size,
        height: size,
        borderRadius,
      }}
      onClick={handleClick}
      className="relative border border-neutral-100"
    >
      {curColorFilter === name && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white/25">
          <PiCheckBold className="text-neutral-900 text-xl" />
        </div>
      )}
    </button>
  );
}

export default ShoeColor;
