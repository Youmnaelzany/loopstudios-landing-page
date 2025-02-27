import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

export default function OurCreations() {
  const ourCreationsImg = [
    {
      id: 1,
      imgDesktop: "/images/desktop/image-deep-earth.jpg",
      imgMobile: "/images/mobile/image-deep-earth.jpg",
      title: "Deep Earth",
    },
    {
      id: 2,
      imgDesktop: "/images/desktop/image-night-arcade.jpg",
      imgMobile: "/images/mobile/image-night-arcade.jpg",
      title: "Night Arcade",
    },
    {
      id: 3,
      imgDesktop: "/images/desktop/image-soccer-team.jpg",
      imgMobile: "/images/mobile/image-soccer-team.jpg",
      title: "Soccer Team VR",
    },
    {
      id: 4,
      imgDesktop: "/images/desktop/image-grid.jpg",
      imgMobile: "/images/mobile/image-grid.jpg",
      title: "The Grid",
    },
    {
      id: 5,
      imgDesktop: "/images/desktop/image-from-above.jpg",
      imgMobile: "/images/mobile/image-from-above.jpg",
      title: "From Up Above VR",
    },
    {
      id: 6,
      imgDesktop: "/images/desktop/image-pocket-borealis.jpg",
      imgMobile: "/images/mobile/image-pocket-borealis.jpg",
      title: "Pocket Borealis",
    },
    {
      id: 7,
      imgDesktop: "/images/desktop/image-curiosity.jpg",
      imgMobile: "/images/mobile/image-curiosity.jpg",
      title: "The Curiosity",
    },
    {
      id: 8,
      imgDesktop: "/images/desktop/image-fisheye.jpg",
      imgMobile: "/images/mobile/image-fisheye.jpg",
      title: "Make It Fisheye",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-12 px-6 pb-24 sm:px-10 lg:pb-44.5 xl:px-40">
      {/* Title and button wrapper */}
      <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:justify-between">
        <h1 className="font-josefin-sans s text-[2rem] leading-8 font-light text-black uppercase xl:text-[3rem] xl:leading-12">
          Our Creations
        </h1>

        {/* Button visible only on xl screens */}
        <Button className="font-alata hidden h-10 w-[9.8125rem] rounded-none border border-black bg-transparent text-sm leading-[0.875rem] font-normal tracking-[0.3125rem] text-black uppercase transition-colors duration-300 ease-in-out hover:bg-black hover:text-white sm:block">
          <Link href="/">See All</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 items-center justify-center gap-y-6 sm:grid-cols-2 sm:gap-x-6 xl:grid-cols-4">
        {ourCreationsImg.map((img) => (
          <div key={img.id}>
            {/* Images */}
            <div className="group relative">
              {/* Black gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <picture>
                <source media="(min-width:1280px)" srcSet={img.imgDesktop} />
                <Image
                  src={img.imgMobile}
                  alt={img.title}
                  width={327}
                  height={120}
                />
              </picture>

              {/* Text overlay */}
              <h2
                className={`font-josefin-sans absolute bottom-5 left-5 text-2xl leading-6 text-white uppercase xl:bottom-8 xl:left-10 xl:text-[2rem] xl:leading-8 ${
                  img.id === 4
                    ? "max-w-[6rem]"
                    : img.id === 3
                      ? "max-w-[9rem]"
                      : "max-w-[10rem]"
                }`}
              >
                {img.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Button visible only on smaller screens */}
      <Button className="font-alata h-10 w-[9.8125rem] rounded-none border border-black bg-transparent text-sm leading-[0.875rem] font-normal tracking-[0.3125rem] text-black uppercase transition-colors duration-300 ease-in-out hover:bg-black hover:text-white sm:hidden">
        <Link href="/">See All</Link>
      </Button>
    </section>
  );
}
