"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const contentPatterns = [
  /^\/content\/javascript\/.+/,
<<<<<<< HEAD
  /^\/content\/react\/.+/
=======
  /^\/content\/react\/.+/,
  /^\/content\/html\/.+/,
  /^\/content\/css\/.+/
>>>>>>> 3b58ed6bb5dce6886572368028dd9d5da51bb9cc
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
