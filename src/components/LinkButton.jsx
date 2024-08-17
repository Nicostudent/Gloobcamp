import Link from "next/link";
export const LinkButton = ({ href, label, dark, className }) => {
  const colored =
    `bg-primary hover:opacity-85 px-4 py-2 rounded font-bold text-white ease-in-out duration-300 ${className}`;

  return (
    <Link
      aria-label={label}
      href={href}
      className={`${
        dark
          ? colored
          : "px-4 max-w-fit text-pretty text-tertiary dark:text-white text-md hover:text-secondary hover:underline duration-100 ease-in-out"
      }`}
    >
      {label}
    </Link>
  );
};
