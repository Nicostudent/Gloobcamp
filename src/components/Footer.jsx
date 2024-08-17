import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-gray-200">
      <div className="flex md:flex-row flex-col justify-between items-center mx-auto container">
        <Link
          href="/"
          className="flex items-center gap-3 mb-4 md:mb-0 ml-3 font-bold text-center text-lg text-white md:text-left"
        >
          <Image src="/icon.svg" alt="Logo" width={30} height={30} />
          Gloobcamp
        </Link>
        <div className="flex space-x-4">
          <Link href="/aboutus" className="hover:text-white">
            About
          </Link>
          <Link href="/" className="hover:text-white">
            Newsletter
          </Link>
          <Link href="/contact-us" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;