import React from "react";

const Input = React.forwardRef(function Input({ type, placeholder, className, ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      className={`w-full shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none py-2 px-4 ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
});

export default Input;
