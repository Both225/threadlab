import Section from "../_components/Section";
import Title from "../_components/Title";
import HorizontalScrollItems from "../_components/HorizontalScrollItems";
import Button from "../_components/Button";

function ProductSection({ type, title }) {
  // type is type of data that need to be fetch (new pro, discount, trending)
  return (
    <Section>
      <Title className={"mb-3"}>{title}</Title>
      <HorizontalScrollItems products={mockItems} />
      <Button width={"100%"}>Shop now</Button>
    </Section>
  );
}

export default ProductSection;
