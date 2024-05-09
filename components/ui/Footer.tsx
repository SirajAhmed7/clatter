import Image from "next/image";
import Link from "next/link";
import {
  PiEnvelopeSimple,
  PiFacebookLogo,
  PiInstagramLogo,
  PiTiktokLogo,
} from "react-icons/pi";

function Footer() {
  return (
    <footer className="relative px-4 py-32 w-full overflow-hidden border-t border-t-neutral-100">
      {/* // <footer className="relative px-4 py-32 w-full overflow-hidden bg-primary-50 border-t"> */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 gap-y-16 justify-items-center lg:justify-items-start items-start">
        <div className="relative col-span-2 md:col-span-4 w-full min-h-[96px] md:min-h-[192px] lg:h-full max-h-48">
          {/* <div className="relative col-span-3 h-48 h-full"> */}
          <Link href={"/"}>
            <Image
              src={"/clatterLogoBig.svg"}
              fill
              className="absolute top-0 left-0 w-full h-full object-contain"
              alt="Clatter logo"
            />
          </Link>
        </div>
        {/* <div className="flex flex-col gap-3 col-start-5"> */}
        <div className="flex flex-col gap-3 text-base">
          <h5 className="font-display font-medium text-xl text-neutral-700">
            Shop
          </h5>
          <Link
            href={"/shop/men"}
            className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
          >
            Men
          </Link>
          <Link
            href={"/shop/women"}
            className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
          >
            Women
          </Link>
          <Link
            href={"/#new-arrivals"}
            className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
          >
            New arrivals
          </Link>
          <Link
            href={"/cart"}
            className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
          >
            Cart
          </Link>
          {/* <Link
            href={"/orders"}
            className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
          >
            My orders
          </Link> */}
        </div>
        {/* <div className="flex flex-col gap-3 col-start-6"> */}
        <div className="flex flex-col gap-3 text-base">
          <h5 className="font-display text-xl font-medium text-neutral-700">
            Information
          </h5>
          <Link
            href={"/sustainability"}
            className="font-display text-neutral-700 hover:opacity-70 active:opacity-70 capitalize"
          >
            Sustainability
          </Link>
          {/* <Link
            href={"/support"}
            className="font-display text-neutral-700 hover:opacity-70 active:opacity-70 capitalize"
          >
            support
          </Link>
          <Link
            href={"/about"}
            className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
          >
            About us
          </Link> */}
          <Link
            href={"/signin"}
            className="font-display text-neutral-700 hover:opacity-70 active:opacity-70"
          >
            Sign in
          </Link>
          <div className="flex gap-5 mt-2">
            <Link
              href={"/"}
              className="text-2xl text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              {/* <PiInstagramLogoDuotone /> */}
              <PiEnvelopeSimple />
            </Link>
            <Link
              href={"/"}
              className="text-2xl text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              {/* <PiInstagramLogoDuotone /> */}
              <PiInstagramLogo />
            </Link>
            <Link
              href={"/"}
              className="text-2xl text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              {/* <PiFacebookLogoDuotone /> */}
              <PiFacebookLogo />
            </Link>
            <Link
              href={"/"}
              className="text-2xl text-neutral-700 hover:opacity-70 active:opacity-70"
            >
              {/* <PiTiktokLogoDuotone /> */}
              <PiTiktokLogo />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 right-0 w-[60%] h-[70%] rotate-90 translate-x-[42%] translate-y-[35%] -z-10">
        <Image
          src={"/clatterWavePatternFaded.svg"}
          fill
          className="object-contain w-full h-full"
          alt="Clatter wave pattern"
        />
      </div> */}
    </footer>
  );
}

export default Footer;
