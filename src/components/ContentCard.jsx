import Image from "next/image";
import { LinkButton } from "./LinkButton";

const ContentCard = ({ children, image, subject }) => {
  return (
    <article className="flex flex-col border-gray-200 bg-white shadow p-8 border rounded-lg w-full max-w-xs">
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
          <h3 className="font-bold text-2xl">{subject}</h3>
        </div>
      </div>
      <div>{children}</div>
      <div className="flex justify-end mt-8">
        <LinkButton
          href={`/content/${subject}`}
          label="Read more"
          aria-label="Read more"
        />
      </div>
    </article>
  );
};

export default ContentCard;
