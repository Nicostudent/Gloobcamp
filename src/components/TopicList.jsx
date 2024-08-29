import Link from "next/link";

const TopicList = ({ topics, pathname }) => {
  console.log("pathname", pathname)
  return (
    <ul className="space-y-2">
      {topics.map((topic) => {
        const topicPath = `/content/${pathname.split("/")[2]}${topic.path}`;
        const isActive = `/${pathname.split("/")[3]}` === topic.path

        return (
          <li key={topic.id} className={`rounded-md ${isActive ? 'bg-primary' : 'hover:bg-gray-300 dark:hover:bg-stone-600'}`}>
            <Link
              aria-label={`go to ${topic.path}`}
              href={topicPath}
              className={`block p-2 text-sm ${isActive ? 'text-white' : 'text-gray-800 dark:text-white'}`}
            >
              {topic.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopicList;