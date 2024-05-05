function CartShoeSize({
  shoeSize,
  size,
  onClick,
}: {
  shoeSize: string;
  size: number;
  onClick: (size: string) => void;
}) {
  const borderRadius = size / 4;

  return (
    <button
      style={{
        width: size,
        height: size,
        borderRadius,
      }}
      className={`border border-current text-inherit font-medium hover:bg-neutral-300/40 font-display transition-colors duration-300`}
      onClick={() => onClick(shoeSize)}
    >
      {shoeSize}
    </button>
  );
}

export default CartShoeSize;
