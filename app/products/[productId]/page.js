"use client";
import Button from "@/app/_components/Button";
import ImageHero from "./ImageHero";
import SelectSizes from "./SelectSizes";
import Collapses from "./Collapses";

function ProductDetailPage() {
  return (
    <main className="row-start-2 h-full col-start-2 col-end-6 space-y-[3.2rem] pt-[1.2rem]">
      <ImageHero />
      <ProductInformation />
      <div className="flex flex-col gap-3">
        <SelectSizes />
        <Button color="black" width="100%">
          Add to bag
        </Button>
      </div>
      <Collapses />
    </main>
  );
}

export default ProductDetailPage;

function ProductInformation() {
  return (
    <div>
      <p className="text-t-strong text-[1.8rem]">Product Name</p>
      <p className="text-t-weak">Product Description</p>
      <p>$29.00</p>
    </div>
  );
}
