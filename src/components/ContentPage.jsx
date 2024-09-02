"use client";

import ReactMarkdown from "react-markdown";
import CopyCodeButton from "./CopyCodeButton";

const ContentPage = ({ title, content, children = null }) => {
  const components = {
    code({ node, inline, className, children, ...props }) {
      const codeString = String(children).trim();
      return (
        <div className="relative">
          <pre className={className} {...props}>
            <code>{codeString}</code>
          </pre>
          {!inline && (
            <div className="absolute top-2 right-2">
              <CopyCodeButton code={codeString} />
            </div>
          )}
        </div>
      );
    },
  };

  return (
    <div className="flex flex-col justify-between items-center md:gap-10 my-12 w-full h-full">
      <h1 className="font-bold text-2xl text-center md:text-4xl dark:invert">
        {title}
      </h1>
      <div className="flex justify-center items-center w-full">
        <div className="w-full prose md:prose-lg text-left dark:invert markdown-content">
          <ReactMarkdown components={components}>{content}</ReactMarkdown>
        </div>
      </div>
      <div className="mt-4 max-w-7xl">{children}</div>
    </div>
  );
};

export default ContentPage;