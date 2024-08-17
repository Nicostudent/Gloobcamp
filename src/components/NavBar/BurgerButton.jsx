const BurgerButton = ({ isOpen, toggleDropdown }) => (
  <button
    onClick={toggleDropdown}
    type="button"
    aria-label="toggle Dropdown"
    className="p-2 text-white hover:text-gray-400 focus:text-gray-400 focus:outline-none"
  >
    <svg
      className="h-8 w-8"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      )}
    </svg>
  </button>
);

export default BurgerButton;
