const LabelWithCheckbox = ({ children, inputId, handleChange, isChecked }) => {
  return (
    <label className="flex cursor-pointer items-center rounded-md p-2 duration-100 ease-in-out hover:bg-slate-100 dark:hover:bg-stone-600">
      <input
        type="checkbox"
        id={inputId}
        className="m-4 size-4 accent-primary"
        onChange={handleChange}
        checked={isChecked}
      />
      {children}
    </label>
  );
};

export default LabelWithCheckbox;
