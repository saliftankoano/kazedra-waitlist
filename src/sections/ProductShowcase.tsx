import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip">
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
          <Image
            className="absolute -right-36 -top-32 hidden md:block"
            height={262}
            width={262}
            src={pyramid}
            alt="Pyramid image"
          />
          <Image
            className="absolute bottom-24 -left-36 hidden md:block"
            height={248}
            src={tube}
            alt="Tube image"
          />
        </div>
      </div>
    </section>
  );
};
