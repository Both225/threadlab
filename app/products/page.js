const textItems = ["Shirts", "Pants", "Jackets", "Polo Shirts", "Denim"];
import Button from "../_components/Button";
import ProductCard from "../_components/ProductCard";
import Section from "../_components/Section";
import Title from "../_components/Title";
import GridItems from "../_components/GridItems";
import { mockItems } from "../_data/mockData";

function ProductsList() {
  return (
    <main className="row-start-2 h-full col-start-2 col-end-6 space-y-[1.2rem] pt-[1.2rem]">
      <ProductsHeader
        title={"T-Shirts"}
        description={
          "Soft yet striking, suede defines this season’s styles. Explore tailored jackets"
        }
      />
      <FilterButton width={"100%"}>Refine</FilterButton>
      <ProductList products={mockItems} />
    </main>
  );
}

function ProductList({ products }) {
  return (
    <GridItems cols={2}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </GridItems>
  );
}

function FilterButton({ children, width }) {
  return <Button width={width}>{children}</Button>;
}

export default ProductsList;

function ProductsHeader({ title, description }) {
  return (
    <div className="col-start-2 col-end-6">
      <Title>{title}</Title>
      <p className="text-t-weak">{description}</p>
    </div>
  );
}

function HorizontalCategories({ items }) {
  return (
    <Section>
      <div className="flex gap-5 w-full overflow-x-auto scrollbar-thin scroll-smooth [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <TextBox text={item} key={item} />
        ))}
      </div>
    </Section>
  );
}

function TextBox({ text }) {
  return (
    <div className="px-[1.6rem] whitespace-nowrap py-[0.8rem] border border-stroke-weak">
      <p className="text-t-strong">{text}</p>
    </div>
  );
}
