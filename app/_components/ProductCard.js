import Image from "next/image";

function ProductCard({ product }) {
  const { image, title, description, price } = product;

  return (
    <li className="w-100 shrink-0 rounded-xl bg-white shadow-sm">
      <div className="relative w-full h-120 rounded-lg mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-fit rounded-t-lg"
        />
      </div>
      <div className="px-4 pb-4">
        <h1 className="text-[1.6rem] font-semibold text-t-strong ">{title}</h1>
        <p className="text-[1.4rem] text-t-weak">{description}</p>
        <p className="text-[1.6rem] font-medium text-t-strong mt-4">${price}</p>
      </div>
    </li>
  );
}

export default ProductCard;
