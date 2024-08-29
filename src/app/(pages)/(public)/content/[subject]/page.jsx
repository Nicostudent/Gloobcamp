"use client";
import { Heading, SubTitle } from "@/components/Writing";
import jsTopics from "@/utils/js-topics-and-questions.json";
import reacTopic from "@/utils/react-topics-and-questions.json";
import htmlTopic from "@/utils/html-topics-and-questions.json";
import cssTopic from "@/utils/css-topics-and-questions.json";
import Card from "@/components/Dashboard/Card";
import ProgressBar from "@/components/ProgressBar";
import useProgress from "@/hooks/useProgress";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CompletedContent from "@/components/Dashboard/CompletedContent";
import { FaSearch } from "react-icons/fa";

const Subject = ({ params: { subject } }) => {
  const [searchTopic, setSearchTopic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

    const topicsMapping = {
      react: reacTopic,
      javascript: jsTopics,
      html: htmlTopic,
      css: cssTopic,
    };

  const topicsData = topicsMapping[subject] || [];
  const limitFilter = topicsData.length;
  const { progress } = useProgress(limitFilter, subject);

  const PROGRESS_MAX_VALUE = 100;
  const PROGRESS_VALUE = progress.toFixed(2);

  if (PROGRESS_VALUE >= PROGRESS_MAX_VALUE) {
    return <CompletedContent title={subject} />;
  }

  const filteredTopics = topicsData.filter((topic) =>
    topic.title.toLowerCase().includes(searchTopic.toLowerCase())
  );

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  const title = subject.charAt(0).toUpperCase() + subject.slice(1);

  return (
    <section className="flex flex-col gap-4 py-10">
      <Heading addClass="dark:text-white">{title}</Heading>
      <SubTitle addClass="dark:text-white">Content</SubTitle>
      <button
        className="flex justify-start items-center md:gap-4 bg-primary p-2 rounded-md w-fit font-bold text-white"
        onClick={handleInputClick}
      >
        <FaSearch className="w-5 h-5" />
        <p className="pr-2">Search...</p>
      </button>
      <SearchBar
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        searchValue={searchTopic}
        setSearchValue={setSearchTopic}
        results={filteredTopics}
        topicPath={`/content/${subject}`}
      />
      <ProgressBar progress={progress} />
      <Card
        topics={topicsData}
        subject={subject}
      />
    </section>
  );
};

export default Subject;
