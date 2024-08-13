const LabelWithCheckbox = ({ children, inputId, inputOnClick, isChecked }) => {
  return (
    <label className="flex items-center hover:bg-slate-100 p-2 rounded-md duration-100 cursor-pointer ease-in-out">
      <input
        type="checkbox"
        id={inputId}
        className="m-4 accent-primary size-4"
        onClick={inputOnClick}
        checked={isChecked}
      />
      {children}
    </label>
  );
};

export default LabelWithCheckbox;
