import Image from "next/image";
import { LinkButton } from "./LinkButton";

const ContentCard = ({ children, image, subject }) => {
  const pathname = String(subject).toLowerCase();
  return (
    <article className="flex flex-col flex-wrap border-2 shadow-xl p-8 rounded-lg w-full max-w-xs">
      <div className="flex flex-row gap-4 mb-5">
        <Image
          src={image}
          alt="image1"
          className="aspect-square"
          width={50}
          height={50}
        />
        <div>
          <p className="text-tertiary">TUTORIAL</p>
          <h3 className="font-bold text-2xl">
            {subject}
            <span className="text-primary">.</span>
          </h3>
        </div>
      </div>
      <div className="h-44 text-tertiary overflow-hidden text-sm">{children}</div>
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
