import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress, initialProgress }) => {
  const [currentProgress, setCurrentProgress] = useState(initialProgress || 0);

  useEffect(() => {
    setCurrentProgress(progress);
  }, [progress]);

  return (
    <article className="relative flex items-center justify-center">
      {currentProgress > 0 && (
        <p
          style={{ left: `${currentProgress}%` }}
          className="text-md absolute z-10 translate-x-2 text-center text-black"
        >
          {currentProgress.toFixed(0)}%
        </p>
      )}
      <progress
        id="progress-bar"
        value={currentProgress}
        max="100"
        className="relative z-0 h-6 w-full progress-unfilled:rounded-full progress-unfilled:bg-slate-300 progress-filled:rounded-full progress-filled:bg-primary"
      ></progress>
    </article>
  );
};

export default ProgressBar;
