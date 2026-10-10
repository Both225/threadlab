import { Collapse } from "antd";
import TheDetail from "./TheDetail";
import SizeFit from "./SizeFit";
import Delivery from "./Delivery";

function Collapses() {
  const items = [
    {
      key: "1",
      label: "The Details",
      children: <TheDetail />,
    },
    {
      key: "2",
      label: "Size & Fit",
      children: <SizeFit />,
    },
    {
      key: "3",
      label: "Delivery, Return & Seller",
      children: <Delivery />,
    },
  ];

  return <Collapse items={items} ghost expandIconPlacement={"end"} />;
}

export default Collapses;
