import React, { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Input from "./Input";
import HighlightText from "@/helpers/HighlightText";

const SearchBar = ({ isOpen, onClose, searchValue, setSearchValue, results, topicPath }) => {
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
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative bg-primary shadow-lg mx-4 md:mx-4 rounded-lg w-full max-w-lg">
        <div className="relative border-gray-700 p-4 border-b">
          <div className="flex items-center gap-4">
            <Input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="flex bg-white p-2 border rounded w-full text-black focus:outline-none"
            />
            <button 
              aria-label="Close"
              className="flex items-center bg-indigo-300 px-2 rounded h-5"
              onClick={handleClose} type="button"
            >
              x
            </button>
          </div>
          {searchValue ? 
            <div className="left-0 absolute bg-white shadow-lg mt-2 rounded w-full max-h-64 text-primary overflow-y-auto">
              {results.length > 0 ? (
                results.map((result, index) => (
                  <Link
                    key={index}
                    href={`${topicPath}/${result.path}`}
                    className="flex items-center hover:bg-indigo-100 p-2 text-black cursor-pointer"
                  >
                    <HighlightText text={result.title} searchValue={searchValue} />
                  </Link>
                ))
              ) : (
                <p className="p-2 text-center">{`No results found for "${searchValue}"`}</p>
              )}
            </div>
            :
            <div className="left-0 absolute bg-white shadow-lg mt-2 rounded w-full max-h-64 text-primary overflow-y-auto">
              <p className="p-2 text-center">Search something</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
