import Link from "next/link";
const NavigationLink = ({ children, className, href, size = null, onClick = null }) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`font-semibold ${size || "text-sm md:text-base"} my-2 hover:scale-105 duration-300 ease-in-out ${className}`}
      aria-label={`${children} navigation link`}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
