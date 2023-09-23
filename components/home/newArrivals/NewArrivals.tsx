import NewArrivalsContainer from "./NewArrivalsContainer";

export default function NewArrivals() {
  return (
    <section className="mt-32 lg:mt-48 px-4 overflow-x-clip">
      <h2 className="font-display text-5xl text-neutral-950 font-bold text-center mb-16">
        New Arrivals
      </h2>
      {/* @ts-expect-error Server Component */}
      <NewArrivalsContainer />
    </section>
  );
}
