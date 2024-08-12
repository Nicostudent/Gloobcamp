import jsTopics from "@/utils/js-topics-and-questions.json";
import Link from "next/link";

const Sidebar = ({ pathname }) => {
  return (
    <>
      <aside className="w-64 mt-16 overflow-y-scroll fixed bg-gray-200" style={{ height: "86%" }}>
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
