"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = ({ homeElement, separator, capitalizeLinks }) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const formatLink = (link) => {
    let formattedLink = link.replace(/-/g, " ");

    if (capitalizeLinks) {
      formattedLink =
        formattedLink.charAt(0).toUpperCase() + formattedLink.slice(1);
    }

    return formattedLink;
  };

  return (
    <div>
      <ul className="flex flex-wrap bg-transparent pt-24">
        <li className="mx-2 font-bold dark:text-white hover:underline">
          <Link href={"/"} aria-label="back to homepage">
            {homeElement}
          </Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href
              ? "hover:underline mx-2 font-bold text-primary"
              : "hover:underline mx-2 font-bold dark:text-white";
          let itemLink = formatLink(link);

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href} aria-label={"go to " + href.slice(1)}>
                  {itemLink}
                </Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
