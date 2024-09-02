"use client";
import { twMerge } from "tailwind-merge";
import CheckIcon from "@/assets/check.svg";
import { motion } from "framer-motion";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Join waitlist",
    popular: false,
    inverse: false,
    features: ["Up to 15 clothing items"],
  },
  {
    title: "Premium",
    monthlyPrice: 9,
    buttonText: "Pre order",
    popular: true,
    inverse: true,
    features: [
      "Priority support",
      "1 Daily Weather based outfit",
      "Up to 50 clothing items",
    ],
  },
  {
    title: "Star",
    monthlyPrice: 19,
    buttonText: "Pre order",
    popular: false,
    inverse: false,
    features: [
      "Virtual try-on",
      "Personal body model",
      "Priority support",
      "3 Daily Weather based outfit",
      "Unlimited clothing items",
    ],
  },
];
export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            First <strong>1000 users</strong> get early access.
            <br />
            Pre-order a Premium or Star Package before our official Launch and
            get <strong>2 months</strong> on us.
          </p>
        </div>
      </div>
      <div className="cards flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
        {pricingTiers.map(
          (
            { title, monthlyPrice, buttonText, popular, inverse, features },
            key
          ) => (
            <div
              className={twMerge(
                "card",
                inverse == true && "border-black bg-black text-white"
              )}
              key={key}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    inverse == true && "text-white/60"
                  )}
                >
                  {title}
                </h3>
                {popular === true && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{ backgroundPositionX: "100%" }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>

              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${monthlyPrice}
                </span>
                <span className="tracking-tight text-black/50">/month</span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary justify-center w-full mt-[30px]",
                  inverse == true && "bg-white text-black font-bold"
                )}
              >
                {buttonText}
              </button>
              <ul className="flex-col gap-5 mt-8">
                {features.map((feature, key) => (
                  <li key={key} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
};
