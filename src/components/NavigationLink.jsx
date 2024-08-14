import Link from "next/link";
const NavigationLink = ({ children, href, size = null, bgIsdark = null }) => {
  return (
    <Link
      href={href}
      className={`font-bold ${size || ("text-md" && "md:text-lg")} ${
        bgIsdark ? "text-white" : "text-secondary"
      } hover:text-primary duration-300 ease-in-out`}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
