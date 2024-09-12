import React from "react";
import CustomButton from "./CustomButton";

const Input = React.forwardRef(function Input({ type, placeholder, className, buttonText, icon, onButtonClick, ...props }, ref) {
  const hasButton = buttonText || icon;

  return (
    <div className="flex justify-between items-center w-full">
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
          onClick={onButtonClick}
        />
      )}
    </div>
  );
});

export default Input;
