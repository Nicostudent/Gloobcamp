"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const contentPatterns = [
  /^\/content\/javascript\/.+/,
  /^\/content\/react\/.+/,
  /^\/content\/html\/.+/,
  /^\/content\/css\/.+/
];

const ClientLayout = () => {
  const pathname = usePathname();
  const showSidebar = contentPatterns.some((pattern) => pattern.test(pathname));

  return (
    <div className="flex  absolute items-center ">
      {showSidebar && (
        <div className="relative left-0">
          <Sidebar pathname={pathname} />
        </div>
      )}
    </div>
  );
};

export default ClientLayout;
