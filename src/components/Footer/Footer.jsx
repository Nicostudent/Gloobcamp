import Link from "next/link";
import SocialMedia from "@/components/Footer/SocialMedia";
const Footer = () => {
  return (
    <footer className="gap-2 grid mx-auto my-12 px-6 max-w-7xl">
      <div className="flex sm:flex sm:flex-row flex-col justify-center sm:justify-between items-center gap-2">
        <div className="flex flex-wrap gap-8">
          <Link
            href="/"
            className="font-bold text-md text-secondary md:text-xl hover:text-primary duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className="font-bold text-md text-secondary md:text-xl hover:text-primary duration-300 ease-in-out"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="font-bold text-md text-secondary md:text-xl hover:text-primary duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-6">
          <SocialMedia
            href="https://github.com/Nicostudent/gloobcamp"
            src="/github-black.svg"
            alt="Github"
            size={24}
          />
        </div>
      </div>

      <div className="flex sm:flex sm:flex-row flex-col justify-center sm:justify-between items-center gap-4">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <p className="font-bold text-md text-tertiary">
            Do you want to work with us?
          </p>
          <Link
            href="/contactus"
            className="bg-primary hover:bg-opacity-90 px-4 py-2 w-fit font-bold text-white transition-all duration-300 ease-in-out"
          >
            Get in touch
          </Link>
        </div>
        <div>
          <p className="text-sm text-tertiary">© 2024. All rights reserved.</p>
          <p className="text-sm text-tertiary">Made with ❤️ in Argentina.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
