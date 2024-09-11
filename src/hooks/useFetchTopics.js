import { useState, useEffect } from "react";

// Custom hook to fetch topics data
const useFetchTopics = (subject) => {
  const [topicsData, setTopicsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTopicsData = async () => {
      try {
        const response = await import(`../utils/${subject}-topics-and-questions.json`);
        setTopicsData(response.default);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTopicsData();
  }, [subject]);

  return { topicsData, loading, error };
};

export default useFetchTopics;

