import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  sortBy: string;
  desc?: boolean;
};

function SortButton({ sortBy, desc }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const order = !desc ? "asc" : "desc";

  const curSortBy = searchParams.get("sort");

  const sortParam = `${sortBy}-${order}`;

  function handleClick() {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    curSortBy !== sortParam
      ? current.set("sort", sortParam)
      : current.delete("sort");

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    // // Save current scrollY value to localStorage before pushing the new route
    // localStorage.setItem("persistentScroll", window.scrollY.toString());

    router.push(`${pathname}${query}`, { scroll: false });
    // router.push(`${pathname}${query}`);
  }

  return (
    <>
      <li className="w-full">
        <button
          className={`flex justify-between items-end w-full text-xl text-neutral-900 font-medium px-3 py-2 rounded-xl hover:bg-neutral-50 transition-colors duration-300 ${
            curSortBy === sortParam ? "bg-neutral-50" : ""
          }`}
          onClick={handleClick}
        >
          <span>{`${sortBy.at(0)?.toUpperCase()}${sortBy.slice(1)}`}</span>
          <span className="text-neutral-400 text-base">{order}</span>
        </button>
      </li>
    </>
  );
}

export default SortButton;
