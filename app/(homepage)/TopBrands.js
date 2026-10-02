import Section from "../_components/Section";
import Title from "../_components/Title";
import ImageCard from "../_components/ImageCard";
import GridItems from "../_components/GridItems";

import { mockTrendBrand } from "../_data/mockData";

function TopBrands() {
  return (
    <Section padding="0 6rem">
      <Title className={"text-center mb-[1.2rem]"}>Top Brands</Title>
      <GridItems>
        {mockTrendBrand.map((item) => (
          <ImageCard image={item.image} title={item.title} key={item.title} />
        ))}
      </GridItems>
    </Section>
  );
}

export default TopBrands;
