import Link from "next/link";

const TopicList = ({ topics, pathname }) => {
  return (
    <ul className="space-y-2">
      {topics.map((topic) => {
        const topicPath = `${topic.basePath}${topic.path}`;
        const isActive = pathname === topicPath;
        console.log('topicPath',topicPath)

        return (
          <li key={topic.id} className={`rounded-md ${isActive ? 'bg-primary' : 'hover:bg-gray-300'}`}>
            <Link
              aria-label={`go to ${topic.path}`}
              href={topicPath}
              className={`block p-2 text-sm ${isActive ? 'text-white' : 'text-gray-800'}`}
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