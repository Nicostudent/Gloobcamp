"use client";

import React, { Fragment } from 'react';
import ReactMarkdown from "react-markdown";
import CopyCodeButton from './CopyCodeButton';

const processContent = (content) => {
  const codeBlockRegex = /```([\s\S]*?)```/g;
  let match;
  const elements = [];
  let lastIndex = 0;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    const [fullMatch, code] = match;
    const startIndex = match.index;
    
    elements.push(content.slice(lastIndex, startIndex));

    elements.push(
      <div className="relative" key={startIndex}>
        <pre>
          <code>{code.trim()}</code>
        </pre>
        <CopyCodeButton code={code.trim()} />
      </div>
    );

    lastIndex = codeBlockRegex.lastIndex;
  }

  elements.push(content.slice(lastIndex));

  return elements;
};

const ContentPage = ({ title, content, children = null }) => {
  const processedContent = processContent(content);

  return (
    <div className="flex flex-col justify-between items-center md:gap-10 my-12 w-full h-full">
      <h1 className="font-bold text-2xl text-center md:text-4xl dark:invert">{title}</h1>
      <div className="flex justify-center items-center w-full">
        <div className="w-full prose md:prose-lg text-left dark:invert markdown-content">
          {processedContent.map((section, index) => (
            <Fragment key={index}>
              {typeof section === 'string' ? (
                <ReactMarkdown>{section}</ReactMarkdown>
              ) : (
                section
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="mt-4 max-w-7xl">{children}</div>
    </div>
  );
};

export default ContentPage;
