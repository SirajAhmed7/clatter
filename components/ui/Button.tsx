"use client";

import Link from "next/link";

type Props = {
  className?: string;
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "white"
    | "outline"
    | "free"
    | "link"
    | "ghost";
  size?: string;
  to?: string;
  scroll?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({
  className,
  disabled,
  variant = "primary",
  size,
  to,
  onClick,
  scroll = true,
  children,
}: Props) {
  type variantsType = {
    [key: string]: string;
  };

  const variants: variantsType = {
    primary: "bg-primary-600 text-white font-medium",
    secondary: "bg-secondary-600 text-white font-medium",
    white: "bg-white text-neutral-900 font-medium",
    outline:
      "border border-neutral-800 text-neutral-900 hover:bg-neutral-50 transition-colors",
    ghost:
      "bg-transparent hover:bg-neutral-50 transition-colors text-neutral-900 font-medium",
    free: "",
  };

  if (variant === "link")
    return (
      <Link
        className={`font-display max-w-full flex justify-center items-center rounded-2xl text-base sm:text-lg ${
          className ? className : ""
        }  ${size ? size : ""}`}
        href={`/${to!}`}
        scroll={scroll}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={`font-display max-w-full flex justify-center items-center p-4 rounded-2xl ${
        variants[variant]
      } ${className ? className : ""}  ${size ? size : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
