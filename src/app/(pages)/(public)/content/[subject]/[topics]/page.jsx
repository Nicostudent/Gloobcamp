"use client";
import ContentPage from "@/components/ContentPage.jsx";
import jsTopics from "@/utils/js-topics-and-questions.json";
import reactTopics from "@/utils/react-topics-and-questions.json";
import Quiz from "@/components/Quiz";
import EndTopic from "@/components/EndTopic";

const TopicPage = ({ params: { topics, subject } }) => {
  const isReact = subject === "react";
  const topicsData = isReact ? reactTopics : jsTopics;

  const topicData = topicsData.find((t) => t.path === `/${topics}`);

  if (`/${topics}` === "/end") {
    return (
      <div className="flex justify-center items-center h-screen">
        <EndTopic />
      </div>
    );
  }

  if (!topicData) {
    return (
      <div className="h-screen flex justify-center items-center">
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
        />
      </ContentPage>
    </div>
  );
};

export default TopicPage;
