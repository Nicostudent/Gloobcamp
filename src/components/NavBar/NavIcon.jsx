import Link from "next/link";
import Image from "next/image";
const NavIcon = ({ pathname, icon, ariallabelprop }) => {
  return (
    <Link 
      href={`${pathname}`} 
      className="lg:block hover:scale-110 duration-300"
      aria-label={ariallabelprop}  
    >
      {icon}
    </Link>
  );
};

export default NavIcon;
