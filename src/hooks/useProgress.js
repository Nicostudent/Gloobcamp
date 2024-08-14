"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const useProgress = (limit, subject) => {
  const [progress, setProgress] = useLocalStorage(subject, 0);

  const [selectedTopics, setSelectedTopics] = useLocalStorage(
    "selectedTopics",
    {}
  );

  const handleCheckboxChange = (event) => {
    const percentage = 100 / limit;
    const isChecked = event.target.checked;
    const topicId = event.target.id;

    setProgress((prevProgress) => {
      let newProgress = isChecked
        ? prevProgress + percentage
        : prevProgress - percentage;

      if (newProgress > 100) newProgress = 100;
      if (newProgress < 0) newProgress = 0;

      return newProgress;
    });

    setSelectedTopics((prevSelected) => ({
      ...prevSelected,
      [topicId]: isChecked,
    }));
  };

  return { progress, selectedTopics, handleCheckboxChange };
};

export default useProgress;
