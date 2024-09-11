"use client";
import ContentPage from "@/components/ContentPage.jsx";
import Quiz from "@/components/Quiz";
import EndTopic from "@/components/EndTopic";
import useFetchTopics from "@/hooks/useFetchTopics";

const TopicPage = ({ params: { topics, subject } }) => {
  const { topicsData, loading, error } = useFetchTopics(subject);

  const topicData = topicsData.find((t) => t.path === `/${topics}`);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        Error: {error}
      </div>
    );
  }

  if (`/${topics}` === "/end") {
    return (
      <div className="flex justify-center items-center h-screen">
        <EndTopic />
      </div>
    );
  }

  if (!topicData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Topic not found
      </div>
    );
  }

  return (
    <>
      <ContentPage title={topicData.title} content={topicData.content} />
      <div className="flex justify-center w-full max-w-7xl">
        <Quiz
          questions={topicData.questions}
          nextTopicPath={`/content/${subject}/${topicData.next}`}
          topicId={topicData.id}
          subject={subject}
        />
      </div>
    </>
  );
};

export default TopicPage;
