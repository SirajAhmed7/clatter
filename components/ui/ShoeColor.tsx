"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PiCheckBold } from "react-icons/pi";
import slugify from "slugify";

type Props = {
  colorCode: string;
  name?: string;
  size: number;
  isLink?: boolean;
  to?: string;
};

function ShoeColor({ colorCode, name, size, isLink, to }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const borderRadius = size / 4;

  // useEffect(() => {
  //   // Retrieve scrollY value from localStorage after routing
  //   const persistentScroll = localStorage.getItem("persistentScroll");
  //   if (persistentScroll === null) return;

  //   // Restore the window's scroll position
  //   window.scrollTo({ top: Number(persistentScroll) });

  //   // Remove scrollY from localStorage after restoring the scroll position
  //   // This hook will run before and after routing happens so this check is
  //   // here to make we don't delete scrollY before routing
  //   if (Number(persistentScroll) === window.scrollY)
  //     localStorage.removeItem("persistentScroll");
  // }, [searchParams]);

  const curColorFilter = searchParams.get("color");

  const filterParam = slugify(name!, { lower: true });

  function handleClickFilter() {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    curColorFilter !== filterParam
      ? current.set("color", filterParam)
      : current.delete("color");

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    // // Save current scrollY value to localStorage before pushing the new route
    // localStorage.setItem("persistentScroll", window.scrollY.toString());

    router.push(`${pathname}${query}`, { scroll: false });
    // router.push(`${pathname}${query}`);
  }

  function handleClickLink() {
    router.push(to ? slugify(to!) : "");
  }

  return (
    <button
      style={{
        backgroundColor: colorCode,
        width: size,
        height: size,
        borderRadius,
      }}
      onClick={!isLink ? handleClickFilter : handleClickLink}
      className="font-display relative border border-neutral-100"
    >
      {curColorFilter === filterParam && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white/25">
          <PiCheckBold className="text-neutral-900 text-xl" />
        </div>
      )}
    </button>
  );
}

export default ShoeColor;
