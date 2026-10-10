import GridItems from "./GridItems";
import ProductCard from "./ProductCard";

function Products({ products }) {
  return (
    <GridItems cols={2}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          width="100%"
          height="18rem"
        />
      ))}
    </GridItems>
  );
}

export default Products;
