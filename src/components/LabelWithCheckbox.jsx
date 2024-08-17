const LabelWithCheckbox = ({ children, inputId, handleChange, isChecked }) => {
  return (
    <label className="flex items-center hover:bg-slate-100 dark:hover:bg-stone-600 p-2 rounded-md duration-100 cursor-pointer ease-in-out">
      <input
        type="checkbox"
        id={inputId}
        className="m-4 accent-primary size-4"
        onChange={handleChange}
        checked={isChecked}
      />
      {children}
    </label>
  );
};

export default LabelWithCheckbox;
