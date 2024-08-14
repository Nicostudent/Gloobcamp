"use client";
import React, { useState } from "react";
import { Logo } from "./Logo";
import BurgerButton from "./BurgerButton";
import NavigationLink from "@/components/NavigationLink";
import NavIcon from "./NavIcon";

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
          bgIsdark
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
    <nav className="z-50 fixed bg-primary py-4 w-full">
      <div className="flex justify-between items-center mx-auto px-6 max-w-7xl">
        <Logo />
        <div className="md:flex items-center gap-8 hidden">{renderLinks()}</div>
        <div className="md:hidden">
          <BurgerButton isOpen={isOpen} toggleDropdown={toggleDropdown} />
        </div>
        <div className="flex items-center gap-6 align-middle">
          <NavIcon pathname={"/"} image={"/user.svg"} />
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
