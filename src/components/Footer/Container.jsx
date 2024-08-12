import React from "react";

const Container = ({ children }) => {
  return (
    <article className="flex sm:flex-row flex-col justify-center sm:justify-between items-center gap-2">
      {children}
    </article>
  );
};

export default Container;
