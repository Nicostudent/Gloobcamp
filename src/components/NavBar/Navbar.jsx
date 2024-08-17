"use client";
import React, { useState } from "react";
import { Logo } from "./Logo";
import BurgerButton from "./BurgerButton";
import NavigationLink from "@/components/NavigationLink";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const pages = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
  ];
  const renderLinks = () => (
    <>
      {pages.map((page) => (
        <NavigationLink
          className="text-white"
          key={page.to}
          href={page.to}
          aria-label={page.label}
          onClick={toggleDropdown}
        >
          {page.label}
        </NavigationLink>
      ))}
    </>
  );

  return (
    <nav className="fixed z-50 w-full bg-primary py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="flex items-center gap-6 align-middle md:hidden"></div>
        <div className="hidden items-center gap-8 md:flex">{renderLinks()}</div>
        <div className="flex md:hidden">
          <ThemeSwitcher />
          <BurgerButton isOpen={isOpen} toggleDropdown={toggleDropdown} />
        </div>
        <div className="hidden items-center gap-6 align-middle md:flex">
          <ThemeSwitcher />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center justify-center md:hidden">
          {renderLinks()}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
