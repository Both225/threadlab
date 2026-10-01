import Hero from "./_components/Hero";
import TitleRow from "./_components/TitleRow";
import Section from "./_components/Section";
import Title from "./_components/Title";
import HorizontalScrollItems from "./_components/HorizontalScrollItems";
import ImageCard from "./_components/ImageCard";
import GridItems from "./_components/GridItems";
import { mockTrendBrand, mockItems } from "./data/mockData";
import InfoCard from "./_components/InfoCard";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="row-start-2 h-full grid grid-cols-[2rem_repeat(4,1fr)_2rem] gap-y-[3.2rem]">
      <Hero />
      <Section>
        <TitleRow
          title={"New in: handpicked daily from the world’s best brands"}
        />
        <HorizontalScrollItems products={mockItems} />
      </Section>
      <Section>
        <TitleRow title={"Enjoy 25% off the new season"} />
        <HorizontalScrollItems products={mockItems} />
      </Section>
      <Section padding="0 6rem">
        <Title className={"text-center mb-[1.2rem]"}>Top Brands</Title>
        <GridItems gap={"1.6rem"}>
          {mockTrendBrand.map((item) => (
            <ImageCard image={item.image} title={item.title} key={item.title} />
          ))}
        </GridItems>
      </Section>
      <Section>
        <TitleRow title={"Help and Support"} seeMore={false} />
        <InfoCard />
      </Section>
    </main>
  );
}
