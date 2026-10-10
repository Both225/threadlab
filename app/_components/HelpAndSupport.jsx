import InfoCard from "./InfoCard";
import {
  ShoppingBagIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

function HelpAndSupport() {
  return (
    <div className="space-y-4">
      <InfoCard
        title={"How to shop"}
        description={"Your guide to shopping and placing order"}
      >
        <ShoppingBagIcon
          style={{ width: "24px", height: "24px", color: "#00000053" }}
        />
      </InfoCard>
      <InfoCard title={"FAQS"} description={"Your questions answered"}>
        <QuestionMarkCircleIcon
          style={{ width: "24px", height: "24px", color: "#00000053" }}
        />
      </InfoCard>
      <InfoCard
        title={"Need help?"}
        description={"Contact our global Customer Service team"}
      >
        <ChatBubbleLeftIcon
          style={{ width: "24px", height: "24px", color: "#00000053" }}
        />
      </InfoCard>
    </div>
  );
}

export default HelpAndSupport;
