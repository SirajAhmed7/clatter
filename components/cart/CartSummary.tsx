"use client";

import { FormEvent, useRef } from "react";
import { useCart } from "../../contexts/CartContext";
import Button from "../ui/Button";
import Image from "next/image";

function CartSummary() {
  const { subtotal, totalAmount } = useCart();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    inputRef.current?.classList.add(
      "animate-wiggle",
      "outline-red-300",
      "bg-red-50"
    );

    setTimeout(() => {
      inputRef.current?.classList.remove(
        "animate-wiggle",
        "outline-red-300",
        "bg-red-50"
      );
    }, 400);
  }

  return (
    <div className="relative lg:basis-1/3">
      <div className="sticky top-6 space-y-6">
        <h2 className="heading-h2">Summary</h2>
        <div
          className={`flex flex-col gap-4 md:gap-5 p-4 mg:p-6 bg-white rounded-[32px] font-display text-lg md:text-xl text-neutral-900`}
        >
          <div className="flex justify-between">
            <div className="space-x-2">
              <span>Subtotal</span>
              <span className="text-xs text-neutral-600">(Including tax)</span>
            </div>
            <div className="font-medium">${subtotal}</div>
          </div>

          <div className="flex justify-between">
            <div>Shipping</div>
            <div className="font-medium">Free</div>
          </div>

          <div className="h-[1px] bg-neutral-600"></div>

          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="w-full bg-neutral-50 border border-neutral-100 rounded-xl text-base px-3 py-[10px]"
              placeholder="Discount coupon"
              type="text"
            />
          </form>

          <div className="h-[1px] bg-neutral-600"></div>

          <div className="flex items-end justify-between text-neutral-950">
            <div className="text-xl md:text-2xl font-medium">Total</div>
            <div className="text-2xl md:text-[32px] font-semibold">
              ${totalAmount}
            </div>
          </div>
        </div>
        <Button variant="primary" className="w-full text-xl">
          Checkout
        </Button>
        <div className="space-y-3">
          <h4 className="text-base sm:text-xl">We accept</h4>
          <div className="flex flex-wrap items-center gap-6">
            <p className="text-lg sm:text-xl font-medium flex-grow-0">
              Cash on delivery
            </p>
            <Image
              src={"/mastercard logo.svg"}
              alt="Master card logo"
              width={72}
              height={48}
              className="w-12 sm:w-[72px]"
            />
            <Image
              src={"/visa logo.svg"}
              alt="Visa logo"
              width={72}
              height={48}
              className="w-12 sm:w-[72px]"
            />
            <Image
              src={"/paypal logo.svg"}
              alt="Paypal logo"
              width={44}
              height={44}
              className="w-9 sm:w-11"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
