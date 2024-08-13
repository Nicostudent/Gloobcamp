"use client";

import ReactMarkdown from "react-markdown";

const ContentPage = ({ title, content, children = null }) => {
  return (
    <div className="w-full h-full flex flex-col md:gap-10 justify-between items-center my-12">
      <h1 className="text-center text-2xl md:text-4xl font-bold ">{title}</h1>
      <div className="flex justify-center items-center w-full">
        <div className="w-full  prose md:prose-lg text-left markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <div className="max-w-7xl mt-4">{children}</div>
    </div>
  );
};

export default ContentPage;
