import jsTopics from "@/utils/js-topics-and-questions.json";
import reactTopics from "@/utils/react-topics-and-questions.json";
import htmlTopic from "@/utils/html-topics-and-questions.json";
import cssTopic from "@/utils/css-topics-and-questions.json";
import { useState } from "react";
import TopicList from "./TopicList";

const Sidebar = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  let topics = [];
  let title = "";

  if (pathname.startsWith("/content/javascript")) {
    topics = jsTopics.map((topic) => ({
      ...topic,
      basePath: "/content/javascript",
    }));
    title = "JavaScript";
  } else if (pathname.startsWith("/content/react")) {
    topics = reactTopics.map((topic) => ({
      ...topic,
      basePath: "/content/react",
    }));
    title = "React";
  } else if (pathname.startsWith("/content/html")) {
    topics = htmlTopic.map((topic) => ({
      ...topic,
      basePath: "/content/html",
    }));
    title = "HTML";
  } else if (pathname.startsWith("/content/css")) {
    topics = cssTopic.map((topic) => ({
      ...topic,
      basePath: "/content/css",
    }));
    title = "CSS";
  }

  return (
    <>
      <button
        className="top-4 left-4 z-20 fixed md:hidden bg-gray-800 p-2 rounded-md text-white"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="z-10 fixed inset-0 bg-black opacity-50"
          onClick={closeSidebar}
        ></div>
      )}

      <aside
        className={`top-16 fixed bg-gray-200 dark:bg-stone-900 w-64 overflow-y-auto z-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out 2xl:translate-x-0`}
        style={{ height: "93%" }}
      >
        <nav className="flex flex-col py-9 p-4">
          <h2 className="mb-4 font-bold text-2xl text-gray-900 dark:text-white">
            {title}
          </h2>
          <TopicList topics={topics} pathname={pathname} />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
