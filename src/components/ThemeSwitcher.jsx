import React from 'react';
import CustomButton from './CustomButton';
import { FaRegMoon } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';
import { useTheme } from '@/context/ThemeContext';

const ThemeSwitcher = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="flex justify-center items-center">
      <CustomButton
        ariallabelprop="Theme button switcher"
        purple
        onClick={toggleTheme}
        className="flex justify-center hover:scale-110 p-2 rounded-lg w-10 h-10 duration-300"
        icon={darkMode ? <ImSun className="w-5 h-5" /> : <FaRegMoon />} 
      />        
    </div>
  );
};

export default ThemeSwitcher;
