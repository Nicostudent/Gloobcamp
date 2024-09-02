import React from 'react';

const ProgressBar = ({ progress = 0 }) => {
  return (
    <article className="relative flex justify-center items-center">
      {progress > 0 && (
        <p
          style={{ left: `${progress}%` }}
          className="z-10 absolute text-black text-center text-md translate-x-2">
          {progress.toFixed(0)}%
        </p>
      )}
      <progress
        id="progress-bar"
        value={progress}
        max="100"
        className="relative z-0 progress-filled:bg-primary progress-unfilled:bg-slate-300 progress-filled:rounded-full progress-unfilled:rounded-full w-full h-6"
      ></progress>
    </article>
  );
};

export default ProgressBar;
