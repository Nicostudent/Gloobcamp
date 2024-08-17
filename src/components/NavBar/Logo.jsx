import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="items-center text-lg font-bold text-white"
        aria-label="back to homepage"
      >
        Gloobcamp {`</>`}
      </Link>
    </div>
  );
};
