import Footer from "../../../components/ui/Footer";
import SecondaryHeaderNav from "../../../components/ui/SecondaryHeaderNav";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <header>
        <SecondaryHeaderNav />
      </header>
      {/* <div className="h-[50vh] w-full m-4 rounded-2xl bg-primary-200 animate-pulse"></div> */}
      <main className="px-4 space-y-10 mb-24">
        <section className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-2 lg:gap-5">
          <div className="h-full">
            <div className="w-full h-[400px] md:h-full hidden md:block overflow-hidden rounded-[48px]">
              <div className="flex flex-row h-full md:flex-col gap-0 md:gap-5 transition-all duration-500">
                <div className="relative w-full h-[360px] md:h-[400px] lg:h-auto flex-grow basis-full shrink-0 md:shrink md:rounded-[48px] bg-primary-200 animate-pulse overflow-hidden"></div>
                <div className="relative w-full h-[360px] md:h-[400px] lg:h-auto flex-grow basis-full shrink-0 md:shrink md:rounded-[48px] bg-primary-200 animate-pulse overflow-hidden"></div>
              </div>
            </div>
            <div className="md:hidden rounded-[36px] overflow-hidden">
              <div className="relative w-full h-[360px] md:h-[400px] lg:h-auto flex-grow basis-full shrink-0 md:shrink md:rounded-[48px] bg-primary-200 animate-pulse overflow-hidden"></div>
            </div>
          </div>

          <div className="pt-4 md:pt-8 px-3 lg:px-9 pb-6 space-y-4 lg:space-y-6">
            <div className="space-y-3">
              <div className="h-14 w-1/2 rounded-lg bg-primary-200 animate-pulse"></div>
              <div className="h-9 w-1/3 rounded-lg bg-primary-200 animate-pulse"></div>
              {/* <h1 className="heading-h2 lg:!text-5xl">{shoes.name}</h1>
            <h2 className="text-2xl lg:text-4xl font-display text-neutral-950 font-medium tracking-tight">
              ${shoes.price}
            </h2> */}
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="h-6 w-1/3 rounded-lg bg-primary-200 animate-pulse"></div>
              {/* <div className="grid grid-cols-10 items-center"> */}
              <div className="hidden lg:grid grid-cols-[repeat(auto-fill,minmax(48px,48px))] gap-3 items-center">
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
              </div>
              <div className="grid lg:hidden grid-cols-[repeat(auto-fill,minmax(32px,32px))] gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-primary-200 animate-pulse"></div>
                <div className="w-8 h-8 rounded-lg bg-primary-200 animate-pulse"></div>
                <div className="w-8 h-8 rounded-lg bg-primary-200 animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="h-6 w-1/3 rounded-lg bg-primary-200 animate-pulse"></div>
              {/* <div className="grid grid-cols-10 items-center"> */}
              <div className="hidden lg:grid grid-cols-[repeat(auto-fill,minmax(48px,48px))] gap-3 items-center">
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 animate-pulse"></div>
              </div>

              <div className="grid lg:hidden grid-cols-[repeat(auto-fill,minmax(32px,32px))] gap-3 items-center">
                <div className="w-9 h-9 rounded-[9px] bg-primary-200 animate-pulse"></div>
                <div className="w-9 h-9 rounded-[9px] bg-primary-200 animate-pulse"></div>
                <div className="w-9 h-9 rounded-[9px] bg-primary-200 animate-pulse"></div>
                <div className="w-9 h-9 rounded-[9px] bg-primary-200 animate-pulse"></div>
                <div className="w-9 h-9 rounded-[9px] bg-primary-200 animate-pulse"></div>
                <div className="w-9 h-9 rounded-[9px] bg-primary-200 animate-pulse"></div>
                <div className="w-9 h-9 rounded-[9px] bg-primary-200 animate-pulse"></div>
                <div className="w-9 h-9 rounded-[9px] bg-primary-200 animate-pulse"></div>
                <div className="w-9 h-9 rounded-[9px] bg-primary-200 animate-pulse"></div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 md:gap-4 py-2">
              <div className="h-14 rounded-2xl bg-primary-200 animate-pulse"></div>
              <div className="h-14 rounded-2xl bg-primary-200 animate-pulse"></div>
            </div>

            <div className="md:space-y-2 space-y-2">
              <div className="h-6 w-1/3 rounded-lg bg-primary-200 animate-pulse"></div>
              <div className="h-36 w-full rounded-xl bg-primary-200 animate-pulse"></div>
            </div>

            <div className="md:space-y-2 space-y-2">
              <div className="h-6 w-1/3 rounded-lg bg-primary-200 animate-pulse"></div>
              <div className="h-52 w-full rounded-xl bg-primary-200 animate-pulse"></div>
            </div>

            <div className="md:space-y-2 space-y-2">
              <div className="h-6 w-1/3 rounded-lg bg-primary-200 animate-pulse"></div>
              <div className="h-64 w-full rounded-xl bg-primary-200 animate-pulse"></div>
            </div>
          </div>
          {/* 
          <ButtonGroup />
          <Description description={shoes.description} />
          <Materials
            materials={shoes.materials}
            className="block md:hidden lg:block"
          />
          <CareGuide careGuide={shoes.careGuide} />
        {shoes.img3 && (
          <Image
            src={shoes.img3}
            height={0}
            width={0}
            sizes="100%"
            className="hidden xl:block w-full max-h-[640px] object-cover col-span-2 rounded-[48px]"
            alt={shoes.name}
            unoptimized
          />
        )}
        <Materials
          materials={shoes.materials}
          className="hidden md:block lg:hidden col-span-2 p-4"
        /> */}
        </section>
      </main>
      <Footer />
    </>
  );
}
