import Link from "next/link";
import Image from "next/image";
const NavIcon = ({ pathname, image }) => {
  const iconName = String(image)
    .replace("/", "")
    .replace(".svg", "")
    .replace("-", " ")
    .replace("_", " ")
    .replace(".", " ")
    .replace(".png", " ");

  return (
    <Link href={`${pathname}`} className="lg:block hidden">
      <Image
        src={`${image}`}
        alt={`${String(image).split("/")[0]} icon`}
        aria-label={`${iconName} icon`}
        width={24}
        height={24}
      />
    </Link>
  );
};

export default NavIcon;
