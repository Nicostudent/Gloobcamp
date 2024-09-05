"use client";
import React, { useEffect, useState } from "react";

const CompletedTopicsCounter = () => {
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const fetchCompletedTopics = () => {
      const completedTopics = Object.keys(localStorage).filter((key) =>
        key.startsWith("completedTopics_")
      );
      setCompletedCount(completedTopics.length);
    };

    fetchCompletedTopics();

    window.addEventListener("storage", fetchCompletedTopics);

    return () => window.removeEventListener("storage", fetchCompletedTopics);
  }, []);

  return (
    <div className="flex justify-center items-center w-full bg-gray-200 dark:bg-gray-800 p-4 my-6">
      <h2 className="text-lg font-semibold dark:text-white">
        Completed Topics: {completedCount}
      </h2>
    </div>
  );
};

export default CompletedTopicsCounter;