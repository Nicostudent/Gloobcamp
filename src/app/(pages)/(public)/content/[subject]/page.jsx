"use client";
import { Heading, SubTitle } from "@/components/Writing";
import jsTopics from "@/utils/js-topics-and-questions.json";
import reacTopic from "@/utils/react-topics-and-questions.json";
import htmlTopic from "@/utils/html-topics-and-questions.json";
import cssTopic from "@/utils/css-topics-and-questions.json";
import Card from "@/components/Dashboard/Card";
import ProgressBar from "@/components/ProgressBar";
import useProgress from "@/hooks/useProgress";
import CompletedContent from "@/components/Dashboard/CompletedContent";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

const Subject = ({ params: { subject } }) => {
  const [searchTopic, setSearchTopic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

    const topicsMapping = {
      react: reacTopic,
      javascript: jsTopics,
      html: htmlTopic,
      css: cssTopic,
    };
    
    // const topicsLength = {
    //   react: reacTopic.length,
    //   javascript: jsTopics.length,
    //   html: htmlTopic.length,
    //   css: cssTopic.length,
    // };

    
  const topicsData = topicsMapping[subject] || [];
  const limitFilter = topicsData.length;
  const { progress, selectedTopics, handleCheckboxChange } = useProgress(
    limitFilter,
    subject
  );

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
      <Heading>{title}</Heading>
      <SubTitle>Content</SubTitle>
      <button
        className="flex w-fit justify-start items-center border-2 bg-primary p-2 md:gap-4 rounded-md font-bold text-white"
        onClick={handleInputClick}
      >
        <Image src="/search.svg" alt="search box" width={36} height={36} />
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
        handleCheckboxChange={handleCheckboxChange}
        topics={topicsData}
        selectedTopics={selectedTopics}
        subject={subject}
      />
    </section>
  );
};

export default Subject;
