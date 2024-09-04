"use client";
import { Waitlist } from "@/sections/Waitlist";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { useRef } from "react";
import { Why } from "@/sections/Why";
import Head from "next/head";
import Hotjar from "@hotjar/browser";

const siteId = 5123508;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
export default function Home() {
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const waitlistRef = useRef<HTMLDivElement | null>(null);
  const whyRef = useRef<HTMLDivElement | null>(null);

  const scrollToWaitlist = () => {
    if (waitlistRef.current) {
      waitlistRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const scrollToWhy = () => {
    if (whyRef.current) {
      whyRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <>
      <Header
        onJoin={scrollToWaitlist}
        onWhy={scrollToWhy}
        onPricing={scrollToPricing}
        onTestimonials={scrollToTestimonials}
      />
      <Hero onJoin={scrollToWaitlist} />
      <LogoTicker />
      <Why refProp={whyRef} />
      <Pricing refProp={pricingRef} onJoin={scrollToWaitlist} />
      <Testimonials refProp={testimonialsRef} />
      <Waitlist refProp={waitlistRef} />
      <Footer
        onJoin={scrollToWaitlist}
        onWhy={scrollToWhy}
        onPricing={scrollToPricing}
        onTestimonials={scrollToTestimonials}
      />
    </>
  );
}
