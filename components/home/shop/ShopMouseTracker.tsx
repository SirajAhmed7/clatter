"use client";

type Props = {
  x: number;
  y: number;
  left: boolean;
};

function ShopMouseTracker({ x, y, left }: Props) {
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div
      // className="absolute top-0 left-0 bg-gradient-to-br from-primary-100/50 to-primary-100/40 backdrop-blur-[20px] w-24 aspect-square rounded-full transition-all duration-500 z-10 border ease-out shadow"
      className={`absolute top-0 left-0 bg-gradient-to-br 
      bg-white/50 border-white backdrop-blur-[20px] w-24 aspect-square rounded-full transition-all duration-500 z-10 border ease-out shadow pointer-events-none`}
      // className={`absolute top-0 left-0 bg-gradient-to-br ${
      //   left
      //     ? "from-blue-200/50 to-blue-100/40 border-blue-300"
      //     : "from-fuchsia-200/50 to-fuchsia-100/40 border-fuchsia-300"
      // } backdrop-blur-[20px] w-24 aspect-square rounded-full transition-all duration-500 z-10 border ease-out shadow pointer-events-none`}
      style={{
        transform: `translate(${x - 48}px, ${y ? y - 48 : 0}px)`,
        // transform: `translate(${x - 48}px, ${y - 48}px)`,
        // top: `${y - 48}px`,
        // left: `${x - 48}px`,
      }}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-base font-medium text-neutral-900 text-center leading-tight pointer-events-none select-none">
        Shop
        <p
          className={`uppercase ${left ? "text-xl" : "text-lg"} leading-tight`}
        >
          {left ? "men" : "women"}
        </p>
      </span>
    </div>
  );
}

export default ShopMouseTracker;
