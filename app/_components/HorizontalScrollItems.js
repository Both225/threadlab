import ProductCard from "./ProductCard";

function HorizontalScrollItems({ products }) {
  return (
    <div className="flex gap-5 w-full pb-3 overflow-x-auto scrollbar-thin scroll-smooth [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default HorizontalScrollItems;
