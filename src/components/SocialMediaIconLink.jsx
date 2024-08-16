import Link from "next/link";
import Image from "next/image";
const UserSocial = ({ href, icon, alt,  styles }) => {
  return (
    <div className="flex gap-3">
      <Link
        aria-label={alt}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles ? styles : "inline-block hover:bg-secondary px-6 py-2 rounded-lg text-lg text-white hover:text-black transition-colors duration-300"}`}
      >
        {icon}
      </Link>
    </div>
  );
};

export default UserSocial;
