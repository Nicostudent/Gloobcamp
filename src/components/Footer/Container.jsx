import React from "react";

const Container = ({ children }) => {
  return (
    <article className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between">
      {children}
    </article>
  );
};

export default Container;
