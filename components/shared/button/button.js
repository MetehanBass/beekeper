import React from "react";

const Button = (props) => {
  const { type, text, onClick, color, textColor } = props;
  return (
    <button
      onClick={onClick}
      className={`${color} ${textColor} rounded-md px-12 py-2`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
