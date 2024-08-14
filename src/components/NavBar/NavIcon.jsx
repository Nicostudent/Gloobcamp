import Link from "next/link";
import Image from "next/image";
const NavIcon = ({ pathname, image }) => {
  return (
    <Link href={`${pathname}`} className="lg:block hidden">
      <Image src={`${image}`} alt={`${image} icon`} width={24} height={24} />
    </Link>
  );
};

export default NavIcon;
