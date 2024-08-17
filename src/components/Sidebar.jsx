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
        className="fixed left-4 top-4 z-20 rounded-md bg-gray-800 p-2 text-white md:hidden"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
          className="fixed inset-0 z-10 bg-black opacity-50"
          onClick={closeSidebar}
        ></div>
      )}

      <aside
        className={`fixed top-16 z-20 w-64 transform overflow-y-auto bg-gray-200 dark:bg-stone-900 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
        style={{ height: "93%" }}
      >
        <nav className="flex flex-col p-4">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <TopicList topics={topics} pathname={pathname} />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
