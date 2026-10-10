import { Button } from "antd";

function LinkButton({ children }) {
  return (
    <Button
      style={{
        padding: "0px",
        fontWeight: "500",
        display: "flex",
        alignItems: "start",
      }}
      type="link"
    >
      {children}
    </Button>
  );
}

export default LinkButton;
