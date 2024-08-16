import Link from "next/link";
import Image from "next/image";
const NavIcon = ({ pathname, image }) => {
  console.log(Array(image).slice(1, 1));

  return (
    <Link href={`${pathname}`} className="lg:block hidden">
      <Image
        src={`${image}`}
        alt={`${Array(image)} icon`}
        aria-label={`${image} icon`}
        width={24}
        height={24}
      />
    </Link>
  );
};

export default NavIcon;
