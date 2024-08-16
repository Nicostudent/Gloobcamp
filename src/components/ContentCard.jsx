import Image from "next/image";
import { LinkButton } from "./LinkButton";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";


const ContentCard = ({ children, image, subject }) => {
  const pathname = String(subject).toLowerCase();
  return (
    <article className="flex flex-col flex-wrap dark:bg-stone-900 shadow-xl p-8 rounded-lg w-full max-w-xs">
      <div className="flex flex-row gap-4 mb-5">
      {image === "react" ? <FaReact className="w-14 h-14 dark:text-white"/> : <RiJavascriptFill className="w-16 h-16 dark:text-white"/>}
        <div>
          <p className="text-tertiary dark:text-primary">TUTORIAL</p>
          <h3 className="font-bold text-2xl dark:text-white">
            {subject}
            <span className="text-primary">.</span>
          </h3>
        </div>
      </div>
      <div className="h-44 text-tertiary dark:text-white overflow-hidden">{children}</div>
      <div className="flex justify-end mt-8">
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
