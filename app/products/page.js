const textItems = ["Shirts", "Pants", "Jackets", "Polo Shirts", "Denim"];
import Section from "../_components/Section";

function ProductsList() {
  return (
    <main className="row-start-2 h-full grid grid-cols-[2rem_repeat(4,1fr)_2rem] gap-y-[3.2rem]">
      <HorizontalCategories items={textItems} />
    </main>
  );
}

export default ProductsList;

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
