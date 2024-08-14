"use client";
import Heading from "@/components/Writing/Heading";
import SubTitle from "@/components/Writing/SubTitle";
import jsTopics from "@/utils/js-topics-and-questions.json";
import Card from "@/components/Dashboard/Card";

import ProgressBar from "@/components/ProgressBar";
import useProgress from "@/hooks/useProgress";
import CompletedContent from "@/components/Dashboard/CompletedContent";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";

const Subject = () => {
  const [searchTopic, setSearchTopic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { progress, selectedTopics, handleCheckboxChange } = useProgress(
    jsTopics.length
  );

  const PROGRESS_MAX_VALUE = 100;
  const PROGRESS_VALUE = progress.toFixed();

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
        className="w-1/6 flex justify-start items-center border-2 gap-4 bg-primary text-white rounded-md p-2 font-bold"
        arialLabelProp="Search JavaScript content"
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
