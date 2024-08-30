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
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
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
    <div>
      <ContentPage title={topicData.title} content={topicData.content}>
        <Quiz
          questions={topicData.questions}
          nextTopicPath={`/content/${subject}/${topicData.next}`}
          subject={subject}
          topic={topicData}
        />
      </ContentPage>
    </div>
  );
};

export default TopicPage;
