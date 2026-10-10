import ProductCard from "./ProductCard";

function HorizontalScrollItems({ items, width, height }) {
  return (
    <div className="flex gap-5 w-full pb-3 overflow-x-auto scrollbar-thin scroll-smooth [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {items.map((item) => (
        <ProductCard
          product={item}
          key={item.id}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
}

export default HorizontalScrollItems;
