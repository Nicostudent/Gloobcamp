import Link from "next/link";
import Image from "next/image";
const UserSocial = ({ href, icon, alt, src, styles }) => {
  return (
    <div className="flex gap-3">
      <Link
        aria-label={alt}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles ? styles : "inline-block rounded-lg px-6 py-2 text-lg text-white transition-colors duration-300 hover:bg-secondary hover:text-black"}`}
      >
        {icon ? icon : <Image src={src} alt={alt} width={36} height={36} />}
      </Link>
    </div>
  );
};

export default UserSocial;
