import Image from "next/image";

function ProductCard({ product, width = "40rem", height = "24rem" }) {
  const { image, title, description, price } = product;

  return (
    <li
      style={{ width: width }}
      className="w-10 shrink-0 rounded-xl bg-white shadow-sm list-none"
    >
      <div
        style={{ height: height }}
        className="relative w-full rounded-lg mb-3"
      >
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
