import Link from "next/link";
export const LinkButton = ({ href, children, dark }) => {
  const colored =
    "bg-primary hover:opacity-95 mt-5 px-4 py-2 rounded font-bold text-white ease-in-out duration-300";

  return (
    <Link href={href}>
      <span
        className={`${
          dark
            ? colored
            : "px- text-sm text-tertiary sm:text-md hover:text-secondary hover:underline duration-100 ease-in-out"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};
