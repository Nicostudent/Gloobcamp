import Link from "next/link";
import Image from "next/image";
const UserSocial = ({ href, icon, alt, src, styles }) => {
  return (
    <div tabIndex={-1} className="flex gap-3">
      <Link
        tabIndex={-1}
        aria-label={alt}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          styles
            ? styles
            : "inline-block hover:bg-secondary px-6 py-2 rounded-lg text-lg text-white hover:text-black transition-colors duration-300"
        }`}
      >
        {icon ? icon : <Image src={src} alt={alt} width={36} height={36} />}
      </Link>
    </div>
  );
};

export default UserSocial;
