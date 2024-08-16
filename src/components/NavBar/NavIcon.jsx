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
    <Link href={`${pathname}`} className="lg:block hidden hover:scale-110 duration-300">
      <Image
        src={`${image}`}
        alt={`${String(image).split("/")[0]} icon`}
        aria-label={`${iconName} icon`}
        width={15}
        height={15}
      />
    </Link>
  );
};

export default NavIcon;
