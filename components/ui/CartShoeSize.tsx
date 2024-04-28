function CartShoeSize({ shoeSize, size }: { shoeSize: string; size: number }) {
  const borderRadius = size / 4;

  return (
    <button
      style={{
        width: size,
        height: size,
        borderRadius,
      }}
      className={`border border-current text-inherit font-medium hover:bg-neutral-300/40 font-display transition-colors duration-300`}
      // onClick={handleClick}
    >
      {shoeSize}
    </button>
  );
}

export default CartShoeSize;
