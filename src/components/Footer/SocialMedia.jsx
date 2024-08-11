import Link from "next/link";
import Image from "next/image";
const SocialMedia = ({ href, src, alt, size }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="hover:scale-110 transition-all duration-300 ease-in-out"
    >
      <Image src={src} alt={alt} height={size} width={size} />
    </Link>
  );
};

export default SocialMedia;
