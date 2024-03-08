import ShopHeader from "../../../components/shop/shopHeader/ShopHeader";
import Footer from "../../../components/ui/Footer";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <ShopHeader />
      <section className="px-4 mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          <div
            className={`relative font-body text-base md:text-lg text-neutral-950 rounded-[36px] min-h-[256px] md:min-h-[296px] py-4 px-7 flex-grow w-full bg-primary-200 animate-pulse`}
          ></div>
          <div
            className={`relative font-body text-base md:text-lg text-neutral-950 rounded-[36px] min-h-[256px] md:min-h-[296px] py-4 px-7 flex-grow w-full bg-primary-200 animate-pulse`}
          ></div>
          <div
            className={`relative font-body text-base md:text-lg text-neutral-950 rounded-[36px] min-h-[256px] md:min-h-[296px] py-4 px-7 flex-grow w-full bg-primary-200 animate-pulse`}
          ></div>
          <div
            className={`relative font-body text-base md:text-lg text-neutral-950 rounded-[36px] min-h-[256px] md:min-h-[296px] py-4 px-7 flex-grow w-full bg-primary-200 animate-pulse`}
          ></div>
          <div
            className={`relative font-body text-base md:text-lg text-neutral-950 rounded-[36px] min-h-[256px] md:min-h-[296px] py-4 px-7 flex-grow w-full bg-primary-200 animate-pulse`}
          ></div>
          <div
            className={`relative font-body text-base md:text-lg text-neutral-950 rounded-[36px] min-h-[256px] md:min-h-[296px] py-4 px-7 flex-grow w-full bg-primary-200 animate-pulse`}
          ></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
