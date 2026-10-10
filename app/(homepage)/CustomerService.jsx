import Section from "../_components/Section";
import HelpAndSupport from "../_components/HelpAndSupport";
import TitleRow from "../_components/TitleRow";

function CustomerService() {
  return (
    <Section>
      <TitleRow title={"Help and Support"} seeMore={false} />
      <HelpAndSupport />
    </Section>
  );
}

export default CustomerService;
