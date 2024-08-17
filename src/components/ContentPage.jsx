"use client";

import ReactMarkdown from "react-markdown";

const ContentPage = ({ title, content, children = null }) => {
  return (
    <div className="flex flex-col justify-between items-center md:gap-10 my-12 w-full h-full">
      <h1 className="font-bold text-2xl text-center md:text-4xl dark:invert">{title}</h1>
      <div className="flex justify-center items-center w-full">
        <div className="w-full prose md:prose-lg text-left dark:invert markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <div className="mt-4 max-w-7xl">{children}</div>
    </div>
  );
};

export default ContentPage;
