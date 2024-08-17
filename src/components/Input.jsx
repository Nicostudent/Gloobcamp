import React from "react";

const Input = React.forwardRef(function Input(
  { type, placeholder, className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      className={`placeholder-text-400 w-full rounded-xl border border-gray-200 px-4 py-2 text-lg font-normal leading-7 text-gray-600 shadow-sm focus:outline-none dark:bg-tertiary dark:text-white ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
});

export default Input;
