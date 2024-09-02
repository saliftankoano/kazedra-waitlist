"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import Cog from "@/assets/cog.png";
import Image from "next/image";
import Cylinder from "@/assets/cylinder.png";

import Noodle from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-no-repeat bg-center bg-cover bg-[url('../assets/hero.jpg')] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag text-white">Version 1.0</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/85 bg-clip-text mt-6">
              Effortless Outfit choices are here
            </h1>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn-primary">Join the waitlist</button>
              {/* <button className="btn btn-text gap-1">
                <span className="text-white">Learn More</span>
                <ArrowIcon className=" h-5 w-5" />
              </button> */}
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            {/* <motion.img
              src={Cylinder.src}
              alt="Cylinder image"
              width={220}
              height={220}
              className="sm:hidden md:block -top-5 right-80 md:absolute"
              style={{
                translateY: translateY,
              }}
            />

            <motion.img
              src={Noodle.src}
              width={220}
              height={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{ rotate: 30, translateY: translateY }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
