import React, { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Input from "./Input";
import HighlightText from "@/helpers/HighlightText";

const SearchBar = ({
  isOpen,
  onClose,
  searchValue,
  setSearchValue,
  results,
  topicPath,
}) => {
  const inputRef = useRef(null);

  const handleClose = useCallback(() => {
    setSearchValue("");
    onClose();
  }, [setSearchValue, onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-4 w-full max-w-lg rounded-lg bg-primary shadow-lg md:mx-4">
        <div className="relative border-b border-gray-700 p-4">
          <div className="flex items-center gap-4">
            <Input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="flex w-full rounded border bg-white p-2 text-black focus:outline-none"
            />
            <button
              aria-label="Close"
              className="flex h-5 items-center rounded bg-indigo-300 px-2"
              onClick={handleClose}
              type="button"
            >
              x
            </button>
          </div>
          {searchValue ? (
            results.length > 0 ? (
              <div className="absolute left-0 mt-2 max-h-64 w-full overflow-y-auto rounded bg-white text-primary shadow-lg dark:bg-stone-900">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={`${topicPath}/${result.path}`}
                    className="flex cursor-pointer items-center p-2 text-black hover:bg-indigo-100 dark:text-white dark:hover:bg-stone-400"
                  >
                    <HighlightText
                      text={result.title}
                      searchValue={searchValue}
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="absolute left-0 mt-2 max-h-64 w-full overflow-y-auto rounded bg-primary text-white shadow-lg">
                <p className="p-2 text-center">{`No results found for "${searchValue}"`}</p>
              </div>
            )
          ) : (
            <div className="absolute left-0 mt-2 max-h-64 w-full overflow-y-auto rounded bg-primary text-white shadow-lg">
              <p className="p-2 text-center">Search something</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
