import Link from "next/link";

function ShopPage() {
  return (
    <>
      <h1 className="text-9xl font-body">
        <Link scroll={false} href={"/"}>
          shop
        </Link>
      </h1>
    </>
  );
}

export default ShopPage;
