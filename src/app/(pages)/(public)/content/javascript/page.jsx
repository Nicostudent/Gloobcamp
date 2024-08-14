"use client";
import { Heading, SubTitle } from "@/components/Writing";
import jsTopics from "@/utils/js-topics-and-questions.json";
import Card from "@/components/Dashboard/Card";

import ProgressBar from "@/components/ProgressBar";
import useProgress from "@/hooks/useProgress";
import CompletedContent from "@/components/Dashboard/CompletedContent";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

const Subject = () => {
  const [searchTopic, setSearchTopic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { progress, selectedTopics, handleCheckboxChange } = useProgress(
    jsTopics.length
  );

  const PROGRESS_MAX_VALUE = 100;
  const PROGRESS_VALUE = progress;

  if (PROGRESS_VALUE >= PROGRESS_MAX_VALUE) {
    return <CompletedContent title={"JavaScript"} />;
  }

  const filteredTopics = jsTopics.filter((topic) =>
    topic.title.toLocaleLowerCase().includes(searchTopic.toLocaleLowerCase())
  );

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="flex flex-col gap-4 py-10">
      <Heading>JavaScript</Heading>
      <SubTitle>Content</SubTitle>
      <button
        className="flex justify-start items-center gap-4 border-2 bg-primary p-2 rounded-md w-1/6 font-bold text-white"
        onClick={handleInputClick}
      >
        <Image src="/search.svg" alt={"search box"} width={36} height={36} />{" "}
        <p>Search...</p>
      </button>
      <SearchBar
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        searchValue={searchTopic}
        setSearchValue={setSearchTopic}
        results={filteredTopics}
        topicPath="/content/javascript"
      />
      <ProgressBar progress={progress} />
      <Card
        handleCheckboxChange={handleCheckboxChange}
        topics={jsTopics}
        selectedTopics={selectedTopics}
      />
    </section>
  );
};

export default Subject;
