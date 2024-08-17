import Link from "next/link";
import Image from "next/image";
const NavIcon = ({ pathname, icon, ariallabelprop }) => {
  return (
    <Link
      href={`${pathname}`}
      className="duration-300 hover:scale-110 lg:block"
      aria-label={ariallabelprop}
    >
      {icon}
    </Link>
  );
};

export default NavIcon;
