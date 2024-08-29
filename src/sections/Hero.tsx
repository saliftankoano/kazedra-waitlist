import ArrowIcon from "@/assets/arrow-right.svg";
import Cog from "@/assets/cog.png";
import Image from "next/image";
import Cylinder from "@/assets/cylinder.png";
import Noodle from "@/assets/noodle.png";
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 1.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Effortless Outfit choices are here
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Stay stylish and ready for all possibilities, with an app that
              helps you build outifts and save you from the woes of the weather.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={Cog}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={Cylinder}
              alt="Cylinder image"
              width={220}
              height={220}
              className="sm:hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={Noodle}
              width={220}
              height={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
