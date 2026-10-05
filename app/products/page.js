import { mockItems } from "../_data/mockData";
import FilterButton from "../_components/FilterButton";
import Products from "../_components/Products";
import Header from "./Header";
import Pagination from "../_components/Pagination";
import HelpAndSupport from "../_components/HelpAndSupport";

function ProductsList() {
  return (
    <main className="row-start-2 h-full col-start-2 col-end-6 space-y-[1.2rem] pt-[1.2rem]">
      <Header
        title={"T-Shirts"}
        description={
          "Soft yet striking, suede defines this season’s styles. Explore tailored jackets"
        }
      />
      <FilterButton width={"100%"}>Refine</FilterButton>
      <Products products={mockItems} />
      <Pagination total={50} />
      <div className="mt-[3.2rem]">
        <HelpAndSupport />
      </div>
    </main>
  );
}

export default ProductsList;
