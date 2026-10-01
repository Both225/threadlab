import Title from "./Title";
import LinkButton from "./LinkButton";

function TitleRow({ title, seeMore = true }) {
  return (
    <div className="flex justify-between items-start mb-[1.2rem]">
      <Title>{title}</Title>
      {seeMore && <LinkButton>see more</LinkButton>}
    </div>
  );
}

export default TitleRow;
