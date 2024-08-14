import Link from "next/link";
const NavigationLink = ({ children, href, size = null }) => {
  return (
    <Link
      href={href}
      className={`font-bold ${
        size || ("text-md" && "md:text-lg")
      } text-secondary hover:text-primary duration-300 ease-in-out`}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
