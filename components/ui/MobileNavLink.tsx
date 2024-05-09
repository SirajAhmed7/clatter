import Link from "next/link";
import { usePathname } from "next/navigation";
import { Renderable } from "react-hot-toast";

function MobileNavLink({
  to,
  linkText,
  icon,
  iconFill,
}: {
  to: string;
  linkText: string;
  icon: Renderable;
  iconFill: Renderable;
}) {
  const pathname = usePathname();
  const curPage = to === pathname ? true : false;
  // console.log(pathname);

  return (
    <Link
      href={to}
      className={`flex flex-col items-center py-2 rounded-[12px] text-neutral-950 ${
        curPage ? "bg-primary-100" : ""
      }`}
    >
      {curPage ? iconFill : icon}
      <p className="text-sm">{linkText}</p>
    </Link>
  );
}

export default MobileNavLink;
