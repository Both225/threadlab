"use client";
import Button from "@/app/_components/Button";
import ImageHero from "./ImageHero";
import SelectSizes from "./SelectSizes";
import Collapses from "./Collapses";

function ProductDetailPage() {
  return (
    <main className="row-start-2 h-full col-start-2 col-end-6 space-y-[3.2rem] pt-[1.2rem]">
      <ImageHero />
      <div className="flex flex-col gap-3">
        <SelectSizes />
        <Button color="black" width="100%">
          Add to wishlist
        </Button>
      </div>
      <Collapses />
    </main>
  );
}

export default ProductDetailPage;
