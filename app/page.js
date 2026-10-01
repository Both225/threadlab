import Hero from "./_components/Hero";
import TitleRow from "./_components/TitleRow";
import Section from "./_components/Section";
import Title from "./_components/Title";
import HorizontalScrollItems from "./_components/HorizontalScrollItems";
import ImageCard from "./_components/ImageCard";
import GridItems from "./_components/GridItems";
import HelpAndSupport from "./_components/HelpAndSupport";
import { mockTrendBrand, mockItems } from "./data/mockData";
import Button from "./_components/Button";

export default function Home() {
  return (
    <main className="row-start-2 h-full grid grid-cols-[2rem_repeat(4,1fr)_2rem] gap-y-[3.2rem]">
      <Hero />
      <Section>
        <Title className={"mb-3"}>
          New in: handpicked daily from the world’s best brands
        </Title>
        <HorizontalScrollItems products={mockItems} />
        <Button width={"100%"}>Shop now</Button>
      </Section>
      <Section>
        <Title className={"mb-3"}>Enjoy 25% off the new season</Title>
        <HorizontalScrollItems products={mockItems} />
        <Button width={"100%"}>Shop now</Button>
      </Section>
      <Section padding="0 6rem">
        <Title className={"text-center mb-[1.2rem]"}>Top Brands</Title>
        <GridItems gap={1.6}>
          {mockTrendBrand.map((item) => (
            <ImageCard image={item.image} title={item.title} key={item.title} />
          ))}
        </GridItems>
      </Section>
      <Section>
        <TitleRow title={"Help and Support"} seeMore={false} />
        <HelpAndSupport />
      </Section>
    </main>
  );
}
