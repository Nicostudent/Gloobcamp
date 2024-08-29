"use client";

const LabelWithCheckbox = ({ children, inputId, isChecked, handleChange }) => {
  return (
    <label
      className={`flex items-center p-2 rounded-md duration-100 cursor-pointer ease-in-out ${
        isChecked ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-slate-100 dark:hover:bg-stone-600"
      }`}
    >
      {isChecked && (
        <input
          type="checkbox"
          id={inputId}
          className="m-4 accent-primary size-4"
          onChange={handleChange}
          checked={isChecked}
          readOnly
        />
      )}
      {children}
    </label>
  );
};

export default LabelWithCheckbox;
