"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

const ContentPage = ({ title, content, modal, setModal, children = null }) => {
  return (
    <div className="flex flex-col justify-between items-center md:gap-10 py-24 w-full h-full">
      <h1 className="font-bold text-2xl text-center md:text-4xl dark:invert">{title}</h1>
      <div className="flex justify-center items-center w-full">
        <div className="w-full prose md:prose-lg text-left dark:invert markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <button
        aria-label="take the quiz"
        className="border-2 border-primary dark:bg-primary px-4 md:px-6 py-2 md:py-3 border rounded-lg dark:text-white"
        onClick={() => setModal(!modal)}
      >
        Take the Quiz
      </button>
      {modal && <div className="mt-4 max-w-7xl">{children}</div>}
    </div>
  );
};

export default ContentPage;
