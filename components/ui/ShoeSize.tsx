import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  shoeSize: string;
  size: number;
};

function ShoeSize({ shoeSize, size }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const borderRadius = size / 4;

  const curSizeFilter = searchParams.get("size");

  function handleClick() {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    curSizeFilter !== shoeSize
      ? current.set("size", shoeSize)
      : current.delete("size");

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }

  return (
    <button
      style={{
        width: size,
        height: size,
        borderRadius,
      }}
      className={`${
        curSizeFilter !== shoeSize
          ? "border border-neutral-900 text-neutral-900"
          : "bg-neutral-900 text-white"
      }`}
      onClick={handleClick}
    >
      {shoeSize}
    </button>
  );
}

export default ShoeSize;
