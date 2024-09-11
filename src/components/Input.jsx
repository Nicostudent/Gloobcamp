import React from "react";
import CustomButton from "./CustomButton";

const Input = React.forwardRef(function Input({ type, placeholder, className, buttonText, icon, ...props }, ref) {
  const hasButton = buttonText || icon;

  return (
    <div className="flex justify-center items-center">
      <input
        ref={ref}
        type={type}
        className={`w-full shadow-sm dark:bg-tertiary dark:text-white rounded-l-md border dark:border-tertiary focus:outline-none px-3 py-2  ${hasButton ? 'rounded-l-md' : 'rounded-md'} ${className}`}
        placeholder={placeholder}
        {...props}
      />
      {hasButton && (
        <CustomButton
          forInput
          purple
          text={buttonText}
          icon={icon}
        />
      )}
    </div>
  );
});

export default Input;
