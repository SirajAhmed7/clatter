"use client";

import Image from "next/image";

function AboutSm() {
  return (
    <div className="relative z-[1] px-4 space-y-16">
      <div className="space-y-8">
        <div className="relative w-full h-96 rounded-[48px] overflow-hidden">
          <Image
            src={"/about1.jpg"}
            fill
            className="w-full h-full object-cover"
            alt="About 1"
          />
        </div>
        <div className="space-y-4 max-w-[440px] mx-auto max-h-min px-2">
          <h2 className="heading-h2">Where fashion meets sustainability</h2>
          <p className="body-text">
            At Clatter, we understand how frustrating it can be to find stylish
            and sustainable options. We believe that style and responsibility go
            hand in hand, and that&apos;s why we&apos;re committed to creating
            footwear that not only looks good but also does good. With Clatter,
            you can step confidently knowing that every pair of shoes is crafted
            with a deep respect for the planet and its people.
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <div className="relative w-full h-96 rounded-[48px] overflow-hidden">
          <Image
            src={"/about2.jpg"}
            fill
            className="w-full h-full object-cover"
            alt="About 1"
          />
        </div>
        <div className="space-y-4 max-w-[440px] mx-auto max-h-min px-2">
          <h2 className="heading-h2">Uncompromising Comfort and Quality</h2>
          <p className="body-text">
            We understand that sustainability goes beyond materials and
            production methods. That&apos;s why Clatter is committed to crafting
            footwear that offers superior comfort and lasting quality. Each pair
            is carefully designed and engineered to provide optimal support and
            durability, so you can step confidently throughout your day, knowing
            your shoes are made to last.
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <div className="relative w-full h-96 rounded-[48px] overflow-hidden">
          <Image
            src={"/about3.jpg"}
            fill
            className="w-full h-full object-cover"
            alt="About 1"
          />
        </div>
        <div className="space-y-4 max-w-[440px] mx-auto max-h-min px-2">
          <h2 className="heading-h2">
            Join a Movement of Empowered Conscious Consumers
          </h2>
          <p className="body-text">
            Clatter is more than just a brand; it&apos;s a movement. By choosing
            Clatter, you become part of a community of conscious consumers who
            value sustainability and want to make a positive impact. We&apos;re
            empowering individuals like you to make informed choices, inspire
            others, and collectively shape a better, more sustainable world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSm;
