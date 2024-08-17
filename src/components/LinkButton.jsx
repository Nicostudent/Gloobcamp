import Link from "next/link";
export const LinkButton = ({ href, label, dark, className }) => {
  const colored = `bg-primary hover:opacity-85 px-4 py-2 rounded font-bold text-white ease-in-out duration-300 ${className}`;

  return (
    <Link
      aria-label={label}
      href={href}
      className={`${
        dark
          ? colored
          : "text-md max-w-fit text-pretty px-4 text-tertiary duration-100 ease-in-out hover:text-secondary hover:underline dark:text-white"
      }`}
    >
      {label}
    </Link>
  );
};
