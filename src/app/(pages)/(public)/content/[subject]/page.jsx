"use client";
import { Heading, SubTitle } from "@/components/Writing";
import useFetchTopics from '@/hooks/useFetchTopics';
import Card from "@/components/Dashboard/Card";
import ProgressBar from "@/components/ProgressBar";
import useProgress from "@/hooks/useProgress";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CompletedContent from "@/components/Dashboard/CompletedContent";
import { FaSearch } from "react-icons/fa";
import CustomButton from "@/components/CustomButton";

const Subject = ({ params: { subject } }) => {
  const [searchTopic, setSearchTopic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { topicsData } = useFetchTopics(subject);

  const limitFilter = topicsData?.length || 0;
  const { progress } = useProgress(
    limitFilter,
    subject
  );

  const PROGRESS_MAX_VALUE = 100;
  const PROGRESS_VALUE = progress.toFixed(2);

  if (PROGRESS_VALUE >= PROGRESS_MAX_VALUE) {
    return <CompletedContent title={subject} />;
  }

  const filteredTopics = topicsData?.filter((topic) =>
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
      <CustomButton
        onClick={handleInputClick}
        icon={<FaSearch className="w-4 h-4" />}
        text="Search"
        purple
        className="w-fit"
        aria-label="Open Searchbar"
      />
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

