import React from "react";

const Button = ({
  secondary,
  className,
  outlined,
  primary,
  primaryOutlined,
  text,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} border-2 p-2 hover:opacity-70 w-28 cursor-pointer outline-none font-sofia text-sm relative flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed ${
        secondary ? "bg-black border-none text-white" : ""
      } ${outlined ? "border-black bg-transparent text-black" : ""} ${
        primary ? "bg-white text-black border-none" : ""
      } ${primaryOutlined ? "bg-transparent border-white text-white" : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
