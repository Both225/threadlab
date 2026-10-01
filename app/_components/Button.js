"use client";

import { Button as ButtonApi } from "antd";

function Button({
  children,
  color = "#1e3a8a",
  size = "md",
  onClick,
  disabled = false,
  htmlType = "button",
  type = "primary",
  width,
  customStyles,
}) {
  const sizes = {
    sm: "12px 18px",
    md: "14px 20px",
    lg: "16px 24px",
  };

  const styles = {
    backgroundColor: color,
    color: "white",
    fontWeight: "500",
    border: "none",
    padding: sizes[size],
    fontSize: "1.6rem",
    cursor: "pointer",
    width: `${width}`,
    customStyles,
  };

  return (
    <ButtonApi
      onClick={onClick}
      color={color}
      style={styles}
      disabled={disabled}
      htmlType={htmlType}
      type={type}
    >
      {children}
    </ButtonApi>
  );
}

export default Button;
