import jsTopics from "@/utils/js-topics-and-questions.json";
import reactTopics from "@/utils/react-topics-and-questions.json";
import htmlTopics from "@/utils/html-topics-and-questions.json";
import cssTopics from "@/utils/css-topics-and-questions.json"
import { useState } from "react";
import TopicList from "./TopicList";

const Sidebar = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const topicMapping = {
    "/content/javascript": { topics: jsTopics, title: "JavaScript" },
    "/content/react": { topics: reactTopics, title: "React" },
    "/content/css": { topics: cssTopics, title: "CSS" },
    "/content/html": { topics: htmlTopics, title: "HTML" },
  };
  const basePath = Object.keys(topicMapping).find((path) => pathname.startsWith(path));

  const { topics, title } = topicMapping[basePath];
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
        className={`top-16 fixed bg-gray-200 w-64 overflow-y-auto z-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
        style={{ height: "93%" }}
      >
        <nav className="flex flex-col p-4">
          <h2 className="mb-4 font-bold text-2xl text-gray-900">{title}</h2>
          <TopicList topics={topics} pathname={pathname} />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
