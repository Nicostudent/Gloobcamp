import Link from "next/link";
const NavigationLink = ({ children, href, size = null, bgIsdark = null }) => {
  return (
    <Link
      href={href}
      className={`font-semibold ${size || "text-lg md:text-base"} ${
        bgIsdark
          ? "text-white hover:text-secondary"
          : "text-secondary hover:text-primary"
      } duration-300 ease-in-out mx-auto my-4`}
      aria-label={`${children} navigation link`}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
