import Link from "next/link";
const NavigationLink = ({ children, href, size = null, bgIsdark = null }) => {
  return (
    <Link
      href={href}
      className={`font-semibold ${size || "text-lg md:text-base"} ${
        bgIsdark
          ? "text-white hover:text-secondary my-2"
          : "text-secondary hover:text-primary"
      } duration-300 ease-in-out mx-auto`}
      aria-label={`${children} navigation link`}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
