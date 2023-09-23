import Image from "next/image";

export default function HeroBgVideo() {
  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <div
        className="absolute top-0 left-0 h-full w-full"
        style={{
          background:
            "linear-gradient(231deg, rgba(130, 130, 130, 0.00) 1.42%, rgba(29, 29, 29, 0.41) 60.58%, rgba(0, 0, 0, 0.50) 84.8%)",
        }}
      ></div>

      {/* UNCOMMENT BEFORE DEPLOY */}
      {/* <video
        autoPlay
        // ref={ref}
        loop
        controls={false}
        className="h-full w-full object-cover pointer-events-none"
        // crossOrigin=""
        muted
        // src="/heroBgVideo.mp4"
        src="https://firebasestorage.googleapis.com/v0/b/clatter-c848b.appspot.com/o/Clatter%20hero%20bg%20video%202%20light%20min.mp4?alt=media&token=19de18c7-764f-4228-aa34-0ef7642da7bf"
      >
      </video> */}
      <Image
        src={"/homeVideoThumbnail-min.webp"}
        alt="Clatter bg video thumbnail"
        className="absolute top-0 left-0 h-full w-full object-cover pointer-events-none -z-10"
        width={"1920"}
        height={"1080"}
        priority
      />
    </div>
  );
}
