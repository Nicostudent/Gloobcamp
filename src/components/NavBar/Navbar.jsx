"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import BurgerButton from "./BurgerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const pages = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About" },
    { to: "/contact-us", label: "Contact us" },
  ];

  const asd = () => {
return(

  <>
      {pages.map((page) => (
        <Link
        key={page.to}
        href={page.to}
        aria-label={page.label}
        className={`px-3 py-2 rounded-md font-medium text-sm text-white`}
        onClick={() => setIsOpen(false)}
        >
          {page.label}
        </Link>
      ))}
    </>
  )
    }
   
  const renderLinks = () => (
    <>
      {pages.map((page) => (
        <Link
          key={page.to}
          href={page.to}
          aria-label={page.label}
          className={`px-3 py-2 rounded-md font-medium text-sm text-white`}
          onClick={() => setIsOpen(false)}
        >
          {page.label}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="z-50 fixed bg-primary p-3 w-full">
      <div className="flex justify-between items-center mx-auto container">
        <Logo />
        <div className="md:flex items-center hidden">{asd()}</div>
        <div className="md:hidden">
          <BurgerButton isOpen={isOpen} toggleDropdown={toggleDropdown} />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col justify-center items-center md:hidden">
          {renderLinks()}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
