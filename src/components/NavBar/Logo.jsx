import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="items-center font-bold text-lg text-white"
        aria-label="back to homepage"
      >
        Gloobcamp {`</>`}
      </Link>
    </div>
  );
};
