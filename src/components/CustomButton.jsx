const CustomButton = ({
  children,
  purple,
  className,
  text,
  disabled,
  icon,
  ...props
}) => {
  const baseStyles =
    "h-12 text-center text-base font-semibold leading-6 rounded-md flex items-center";
  const purpleStyles = "text-white hover:opacity-90 bg-primary duration-300";
  const defaultStyles = "text-black bg-white hover:bg-gray-50";
  const disabledStyles = "text-white bg-gray-500 cursor-not-allowed";

  const buttonStyles = disabled
    ? disabledStyles
    : purple
    ? purpleStyles
    : defaultStyles;

  return (
    <button
      aria-label={text}
      className={`${baseStyles} ${buttonStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default CustomButton;
