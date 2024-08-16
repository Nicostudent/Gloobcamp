"use client"
import { useState, useEffect } from "react"
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { BiAdjust } from "react-icons/bi";


import React from 'react'
import CustomButton from "./CustomButton";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode])
  

  return (    
    <div className="flex justify-center items-center">
      <CustomButton
        arialLabelProp="Theme button switcher"
        purple
        onClick={() => setDarkMode(!darkMode)}
        className="flex justify-center hover:scale-110 p-2 rounded-lg w-10 h-10 duration-300"
        icon={darkMode ? <ImSun className="w-5 h-5" /> : <FaRegMoon />} 
      />        
    </div>
  )
}

export default ThemeSwitcher