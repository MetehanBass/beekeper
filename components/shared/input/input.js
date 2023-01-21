import React from "react";

const Input = (props) => {
  const { placeholder, type } = props;
  return (
    <input
      className="h-10 rounded-md w-64 text-[#222222] pl-4 focus:border-yellow-400 focus:border-2"
      placeholder={placeholder}
      type={type}
      required
    />
  );
};

export default Input;
