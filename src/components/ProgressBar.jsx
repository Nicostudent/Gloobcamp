import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress, initialProgress }) => {
  const [currentProgress, setCurrentProgress] = useState(initialProgress || 0);

  useEffect(() => {
    setCurrentProgress(progress);
  }, [progress]);

  return (
    <article className="flex relative justify-center items-center">
      {currentProgress > 0 && (
        <p
          style={{ left: `${currentProgress}%` }}
          className="translate-x-2 z-10 absolute text-black text-center text-md">
          {currentProgress.toFixed(0)}%
        </p>
      )}
      <progress
        id="progress-bar"
        value={currentProgress}
        max="100"
        className="z-0 relative progress-filled:bg-primary progress-unfilled:bg-slate-300 progress-filled:rounded-full progress-unfilled:rounded-full w-full h-6"
      ></progress>
    </article>
  );
};

export default ProgressBar;
