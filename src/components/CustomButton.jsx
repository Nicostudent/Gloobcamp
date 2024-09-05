const CustomButton = ({
  children,
  purple,
  className,
  text,
  disabled,
  icon,
  forInput,
  'aria-label': ariaLabel,
  ...props
}) => {
  const baseStyles =
    `h-12 text-center h-full border border-primary ${forInput ? "rounded-r-md" : "rounded-md"} flex items-center hover:opacity-90 px-2 py-2 transition duration-300`;
  const purpleStyles = "text-white bg-primary";
  const defaultStyles = "text-black bg-white hover:bg-gray-50";
  const disabledStyles = "text-white bg-gray-500 cursor-not-allowed";

  const buttonStyles = disabled
    ? disabledStyles
    : purple
    ? purpleStyles
    : defaultStyles;

  return (
    <button
      aria-label={ariaLabel || text}
      className={`${baseStyles} gap-3 ${buttonStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {text}
      {icon}
    </button>
  );
};

export default CustomButton;
