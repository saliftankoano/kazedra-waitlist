"use client";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Turn your ideas into a template effortlessly in just minutes
          </p>
        </div>
        <div className="relative">
          <Image className="mt-10" src={productImage} alt="product image" />
          <motion.img
            className="absolute -right-36 -top-32 hidden md:block"
            height={262}
            width={262}
            src={pyramid.src}
            alt="Pyramid image"
            style={{ translateY }}
          />
          <motion.img
            className="absolute bottom-24 -left-36 hidden md:block"
            height={248}
            width={248}
            src={tube.src}
            alt="Tube image"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
