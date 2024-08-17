import Image from "next/image";
import { LinkButton } from "./LinkButton";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const ContentCard = ({ children, icon, subject }) => {
  const pathname = String(subject).toLowerCase();
  return (
    <article className="flex w-full max-w-xs flex-col flex-wrap rounded-lg p-8 shadow-xl dark:bg-stone-900">
      <div className="mb-5 flex flex-row gap-4">
        {icon}
        <div>
          <p className="text-tertiary dark:text-primary">TUTORIAL</p>
          <h3 className="text-2xl font-bold dark:text-white">
            {subject}
            <span className="text-primary">.</span>
          </h3>
        </div>
      </div>
      <div className="h-40 text-sm text-tertiary dark:text-white">
        {children}
      </div>
      <div className="mt-8 flex justify-end">
        <LinkButton
          dark
          href={`/content/${pathname}`}
          label={`Learn ${subject}`}
        />
      </div>
    </article>
  );
};

export default ContentCard;
