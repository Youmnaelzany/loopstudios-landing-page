import Image from "next/image";

export default function InteractiveVR() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-12 px-6 py-24 xl:flex-row xl:items-end xl:px-40 xl:pt-40 xl:pb-44.5">
      <div className="relative">
        <div className="absolute inset-0 bg-[#E5EAF1] mix-blend-color"></div>
        <picture className="relative mix-blend-multiply">
          <source
            media="(min-width:768px)"
            srcSet="/images/desktop/image-interactive.jpg"
          />
          <Image
            src="/images/mobile/image-interactive.jpg"
            alt="Interactive VR experience"
            width={398}
            height={224}
            className="sm:w-[489px] lg:w-[689px] xl:h-[500] xl:w-[889px]"
          />
        </picture>
      </div>
      <div className="interactive-vr flex h-auto w-auto flex-col items-center justify-center gap-y-4 bg-white px-6 text-center xl:relative xl:bottom-0 xl:-left-30 xl:justify-start xl:pt-24 xl:pr-0 xl:pb-0 xl:pl-24 xl:text-left">
        <h2 className="w-68 font-[Josefin_Sans] text-[2rem] leading-8 font-light text-black uppercase xl:w-[27rem] xl:text-[3rem] xl:leading-12">
          The leader in interactive VR
        </h2>
        <p className="w-68 font-[Alata] text-[0.9375rem] leading-[1.5625rem] font-normal text-black opacity-[0.4994] sm:w-[35rem] xl:w-[27rem]">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
