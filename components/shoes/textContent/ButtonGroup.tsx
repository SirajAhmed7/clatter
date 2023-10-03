"use client";

import Button from "../../ui/Button";

// To get selected size from search params

function ButtonGroup() {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-4 py-2">
      <Button variant="primary" className="text-base lg:text-lg">
        Buy now
      </Button>
      <Button variant="secondary" className="text-base lg:text-lg">
        Add to cart
      </Button>
    </div>
  );
}

export default ButtonGroup;
