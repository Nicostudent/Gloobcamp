import jsTopics from "@/utils/js-topics-and-questions.json";
import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);
  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 bg-gray-800 text-white p-2 rounded-md"
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

      {/* Overlay para cerrar el sidebar cuando está abierto en móviles */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeSidebar}></div>}

      <aside className="w-64 top-16 overflow-y-scroll fixed bg-gray-200" style={{ height: "93%" }}>
        <nav className="flex flex-col p-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Javascript</h2>
          <ul className="space-y-2">
            {jsTopics.map((topic) => {
              const topicPath = `/content/javascript${topic.path}`;
              const isActive = pathname === topicPath;
              return (
                <li key={topic.id} className={`rounded-md ${isActive ? 'bg-green-500' : 'hover:bg-gray-300'}`}>
                  <Link
                    aria-label={`go to ${topic.path}`}
                    href={`/content/javascript/${topic.path}`}
                    className={`block p-2 text-sm ${isActive ? 'text-white' : 'text-gray-800'}`}
                  >
                    {topic.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
