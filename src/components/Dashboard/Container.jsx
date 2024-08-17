import React from "react";

const Container = ({ children }) => {
  return (
    <article className="grid grid-cols-1 gap-4 rounded-lg bg-white p-2 shadow-xl dark:bg-stone-900 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </article>
  );
};

export default Container;
