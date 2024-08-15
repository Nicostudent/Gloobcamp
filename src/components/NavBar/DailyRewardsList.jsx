"use client";
import React, { useState, useEffect, useRef } from "react";

const DailyRewardsList = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const listRef = useRef(null); // Create a ref for the dropdown

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleClickOutside = (event) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setIsListOpen(false); // Close the list if clicked outside
    }
  };

  useEffect(() => {
    if (isListOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isListOpen]);

  const rewards = [
    "Complete 1 subtopic - 10 gloobpoints",
    "Complete 3 subtopics - 30 gloobpoints",
    "Complete 10 subtopics - 60 gloobpoints",
    "Complete a full topic - 100 gloobpoints",
  ];

  return (
    <div className="relative" ref={listRef}>
      {/* Icon that toggles the list */}
      <img
        src="/questIcon.png"
        alt="Daily Rewards"
        onClick={toggleList}
        className="cursor-pointer w-8 h-8"
      />
      {isListOpen && (
        <ul className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
          {rewards.map((reward, index) => (
            <li key={index} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              {reward}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DailyRewardsList;
