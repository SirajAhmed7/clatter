import SortButton from "./SortButton";

function Sort() {
  return (
    <div className="py-4 px-3 max-w-xs min-w-[256px]">
      <ul className="w-full space-y-1">
        <SortButton sortBy="name" />
        <SortButton sortBy="name" desc />
        <SortButton sortBy="price" />
        <SortButton sortBy="price" desc />
      </ul>
    </div>
  );
}

export default Sort;
