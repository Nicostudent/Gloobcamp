"use client";
import React, { useState, useEffect, useRef } from "react";

const DailyRewardsList = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const listRef = useRef(null);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleClickOutside = (event) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setIsListOpen(false); 
    }
  };

  useEffect(() => {
    if (isListOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }


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
      
      <img
        src="/questIcon.png"
        alt="Daily Rewards"
        onClick={toggleList}
        className="cursor-pointer w-8 h-8"
      />
      {isListOpen && (
        <ul className="absolute left-0 mt-6 w-80">
          {rewards.map((reward, index) => (
            <li key={index} className="cursor-pointer border rounded-lg border-primary mb-2 px-4 py-2 text-sm text-pretty text-gray-700 hover:bg-primary hover:text-white duration-200 ease-in-out">
              {reward}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DailyRewardsList;
