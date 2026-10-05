import Section from "./Section";
import TextBox from "./TextBox";

function HorizontalTextCategories({ items }) {
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

export default HorizontalTextCategories;
