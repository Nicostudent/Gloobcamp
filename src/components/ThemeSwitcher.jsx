import React from "react";
import CustomButton from "./CustomButton";
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { useTheme } from "@/context/ThemeContext";

const ThemeSwitcher = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <CustomButton
        ariallabelprop="Theme button switcher"
        purple
        onClick={toggleTheme}
        className="flex h-12 w-12 justify-center rounded-lg p-2 duration-300 hover:scale-110"
        icon={
          darkMode ? (
            <ImSun className="h-6 w-6" />
          ) : (
            <FaRegMoon className="h-6 w-6" />
          )
        }
      />
    </div>
  );
};

export default ThemeSwitcher;
