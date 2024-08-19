"use client";
import React, { useState, useEffect, useRef } from "react";

const DailyRewardsList = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const listRef = useRef(null);

  // Initial rewards state with points and claimed status
  const initialRewards = [
    { label: "Complete 1 subtopic", points: 10, claimed: false },
    { label: "Complete 3 subtopics", points: 30, claimed: false },
    { label: "Complete 10 subtopics", points: 60, claimed: false },
    { label: "Complete a full topic", points: 100, claimed: false },
  ];

  const [rewards, setRewards] = useState(initialRewards);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRewards = localStorage.getItem("rewards");
      if (storedRewards) {
        setRewards(JSON.parse(storedRewards));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("rewards", JSON.stringify(rewards));
//      console.log("Rewards state updated succesfully ", rewards)
    }
  }, [rewards]);

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

  const redeemPoints = (index) => {
    if (rewards[index].claimed || rewards[index].points === 0) return;

    const interval = setInterval(() => {
      setRewards((prevRewards) => {
        const newRewards = [...prevRewards];
        if (newRewards[index].points > 0) {
          newRewards[index].points -= 1;
        }
        if (newRewards[index].points === 0) {
          newRewards[index].claimed = true;
          clearInterval(interval);
        }
        return newRewards;
      });
    }, 100); // time interval
  };

  return (
    <div className="relative" ref={listRef}>
      <img
        src="/questIcon.png"
        alt="Daily Rewards"
        onClick={toggleList}
        className="cursor-pointer w-8 h-8"
      />
      {isListOpen && (
        <ul className="absolute left-8 mt-12 w-80">
          {rewards.map((reward, index) => (
            <li
              key={index}
              onClick={() => redeemPoints(index)}
              className={`cursor-pointer border rounded-lg border-primary mb-2 px-4 py-2 text-sm ${
                reward.claimed ? "line-through text-gray-400" : "text-gray-700"
              } hover:bg-primary hover:text-white duration-200 ease-in-out`}
            >
              {reward.label} - {reward.points} gloobpoints
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DailyRewardsList;
