"use client";
import ContentPage from "@/components/ContentPage.jsx";
import jsTopics from "@/utils/js-topics-and-questions.json";
import reactTopics from "@/utils/react-topics-and-questions.json";
import htmlTopic from "@/utils/html-topics-and-questions.json";
import cssTopic from "@/utils/css-topics-and-questions.json";
import Quiz from "@/components/Quiz";
import EndTopic from "@/components/EndTopic";

const TopicPage = ({ params: { topics, subject } }) => {

  const allTopics = {
    react: reactTopics,
    javascript: jsTopics,
    html:htmlTopic,
    css: cssTopic,
  };

  const topicsData = allTopics[subject] || [];


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
