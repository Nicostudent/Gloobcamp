import React from "react";

const HighlightText = ({ text, searchValue }) => {
  if (!searchValue.trim()) return <span>{text}</span>;

  const lowerText = text.toLowerCase();
  const lowerSearchValue = searchValue.toLowerCase();

  const index = lowerText.indexOf(lowerSearchValue);

  if (index === -1) return <span>{text}</span>;

  const beforeMatch = text.slice(0, index);
  const match = text.slice(index, index + searchValue.length);
  const afterMatch = text.slice(index + searchValue.length);

  return (
    <span>
      {beforeMatch}
      <span className="font-bold text-primary">{match}</span>
      {afterMatch}
    </span>
  );
};

export default HighlightText;
