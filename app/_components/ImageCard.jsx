import Image from "next/image";

function ImageCard({ image, title }) {
  return (
    <div className="relative h-100 overflow-hidden rounded-lg  flex items-end pb-8 justify-center aspect-4/5 bg-gray-900 w-full h-">
      <Image src={image} alt={title} fill className="object-fit rounded-lg " />
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 text-white">{title}</div>
    </div>
  );
}

export default ImageCard;
