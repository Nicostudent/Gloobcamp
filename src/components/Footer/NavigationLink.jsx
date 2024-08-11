import Link from "next/link";
const NavigationLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="font-bold text-md text-secondary md:text-xl hover:text-primary duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
