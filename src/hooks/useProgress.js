"use client";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const useProgress = (limit, subject) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCompletedTopicsKey = `completedTopics_${subject}`;
      const storedCompletedTopics = JSON.parse(localStorage.getItem(storedCompletedTopicsKey)) || [];

      const newProgress = (storedCompletedTopics.length / limit) * 100;
      setProgress(newProgress > 100 ? 100 : newProgress);
    }
  }, [limit, subject]);

  return { progress };
};

export default useProgress;
