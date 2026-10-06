"use client";

import Image from "next/image";
import hero from "../../../public/hero.avif";
import { mockImages } from "@/app/_data/mockData";

function ImageHero() {
  return (
    <div className="h-screen grid grid-rows-[2fr_1fr] gap-y-6">
      <div className="relative w-full">
        <Image src={hero} alt="testing" fill />
      </div>
      <HorizontalScrollImages images={mockImages} />
    </div>
  );
}

export default ImageHero;

function HorizontalScrollImages({ images }) {
  return (
    <div className="flex gap-5 w-full h-full pb-3 overflow-x-auto scrollbar-thin scroll-smooth [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {images.map((image) => (
        <ImageBox key={image.id} image={image} />
      ))}
    </div>
  );
}

function ImageBox({ image }) {
  const { src } = image;

  return (
    <div className="relative h-full w-50 shrink-0">
      <Image src={src} fill alt={src} />
    </div>
  );
}
