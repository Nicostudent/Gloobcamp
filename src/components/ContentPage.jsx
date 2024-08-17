"use client";

import ReactMarkdown from "react-markdown";

const ContentPage = ({ title, content, children = null }) => {
  return (
    <div className="my-12 flex h-full w-full flex-col items-center justify-between md:gap-10">
      <h1 className="text-center text-2xl font-bold dark:invert md:text-4xl">
        {title}
      </h1>
      <div className="flex w-full items-center justify-center">
        <div className="markdown-content prose w-full text-left md:prose-lg dark:invert">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <div className="mt-4 max-w-7xl">{children}</div>
    </div>
  );
};

export default ContentPage;
