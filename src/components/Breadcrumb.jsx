"use client";
import React from "react";
import Link from "next/link";
import useBreadcrumb from "../hooks/useBreadcrumb";
import { usePathname } from "next/navigation";

const Breadcrumb = ({ homeElement, separator, capitalizeLinks }) => {
  const { pathNames, formatLink } = useBreadcrumb(capitalizeLinks);
  
  const currentPath = usePathname();

  return (
    <div className={`flex flex-wrap bg-transparent ${pathNames.includes("content") && "md:mx-32"} pt-24`}>
      <div className="mx-2 font-bold dark:text-white hover:underline">
        <Link href={"/"} aria-label="back to homepage">
          {homeElement}
        </Link>
      </div>
      
      {pathNames.length > 1 && separator}

      {pathNames.slice(1).map((link, index) => {
        let href = `/${pathNames.slice(0, index + 2).join("/")}`;
        let itemClasses =
          `hover:underline mx-2 font-bold ${currentPath === href ? 'text-primary' : 'dark:text-white'}`;
        let itemLink = formatLink(link);
        
        return (
          <React.Fragment key={index}>
            <div className={itemClasses}>
              <Link href={href} aria-label={"go to " + href.slice(1)}>
                {itemLink}
              </Link>
            </div>
            {index < pathNames.slice(1).length - 1 && separator}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
