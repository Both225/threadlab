import Hero from "../_components/Hero";
import ProductSection from "./ProductSection";
import CustomerService from "./CustomerService";
import TopBrands from "./TopBrands";

export default function Home() {
  return (
    <main className="row-start-2 h-full grid grid-cols-[2rem_repeat(4,1fr)_2rem] gap-y-[3.2rem]">
      <Hero />
      <ProductSection
        title={"New in: handpicked daily from the world’s best brands"}
      />
      <ProductSection title="Enjoy 25% off the new season" />
      <TopBrands />
      <CustomerService />
    </main>
  );
}
