import { Select } from "antd";

function SelectSizes() {
  function handleChange() {
    console.log("select");
  }

  return (
    <Select
      style={{ width: "100%" }}
      onChange={handleChange}
      options={[
        { value: "small", label: "S" },
        { value: "medium", label: "M" },
        { value: "large", label: "L" },
      ]}
      placeholder="select size"
    />
  );
}

export default SelectSizes;
