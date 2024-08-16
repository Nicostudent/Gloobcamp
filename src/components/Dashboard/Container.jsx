import React from "react";

const Container = ({ children }) => {
  return (
    <article className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white dark:bg-stone-900 shadow-xl p-2 rounded-lg">
      {children}
    </article>
  );
};

export default Container;
