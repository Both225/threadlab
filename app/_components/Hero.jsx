import Image from "next/image";
import Button from "./Button";
import heroBanner from "../../public/hero.avif";

function Hero() {
  return (
    <section className="relative h-full flex items-end overflow-hidden bg-gray-900 col-start-1 col-end-7 aspect-4/5 w-full ">
      <Image
        src={heroBanner}
        alt="Product preview"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative px-[2rem] mb-[8rem] z-20 max-w-4xl text-white">
        <h1 className="text-[2.4rem]">Redefine Your Everyday Style</h1>
        <p className="mt-4 text-[1.4rem] text-gray-200  max-w-120 mb-5">
          Explore our latest arrival of premium streetwear designed for comfort,
          durability.
        </p>
        <Button>Shop now</Button>
      </div>
    </section>
  );
}

export default Hero;
