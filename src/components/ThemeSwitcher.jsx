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
        aria-label="Theme button switcher"
        purple
        onClick={toggleTheme}
        className="flex justify-center hover:scale-110 p-2 rounded-lg w-12 h-12 duration-300"
        icon={darkMode ? <ImSun className='w-6 h-6'/> : <FaRegMoon className='w-6 h-6'/>} 
      />        
    </div>
  );
};

export default ThemeSwitcher;
