"use client";
import Heading from "@/components/Writing/Heading";
import SubTitle from "@/components/Writing/SubTitle";
import jsTopics from "@/utils/js-topics-and-questions.json";
import reacTopic from "@/utils/react-topics-and-questions.json";
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

  const subjectLenght = subject === "react" ? reacTopic.length : jsTopics.length;
  const { progress, selectedTopics, handleCheckboxChange } = useProgress(subjectLenght);
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
  const title = subject.charAt(0).toUpperCase() + subject.slice(1);
  return (
    <section className="flex flex-col gap-4 py-10">
      <Heading>{title}</Heading>
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
        topicPath={`/content/${subject}`}
      />
      <ProgressBar progress={progress} />
      {subject === "javascript" ? (
        <Card
          handleCheckboxChange={handleCheckboxChange}
          topics={jsTopics}
          selectedTopics={selectedTopics}
          subject={"javascript"}
        />
      ) : (
        subject === "react" && (
          <Card
            handleCheckboxChange={handleCheckboxChange}
            topics={reacTopic}
            selectedTopics={selectedTopics}
            subject={"react"}
          />
        )
      )}
    </section>
  );
};

export default Subject;
