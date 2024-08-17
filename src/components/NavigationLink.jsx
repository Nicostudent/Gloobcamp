import Link from "next/link";
const NavigationLink = ({
  children,
  className,
  href,
  size = null,
  onClick = null,
}) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`font-semibold ${size || "text-sm md:text-base"} my-2 duration-300 ease-in-out hover:scale-105 ${className}`}
      aria-label={`${children} navigation link`}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
