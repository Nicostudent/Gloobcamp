"use client";
import { usePathname } from "next/navigation";

export default function useBreadcrumb(capitalizeLinks) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);

  const formatLink = (link) => {
    let formattedLink = link.replace(/-/g, ' ');

    if (capitalizeLinks) {
      formattedLink = formattedLink.charAt(0).toUpperCase() + formattedLink.slice(1);
    }

    return formattedLink;
  };

  return { pathNames, formatLink };
}
