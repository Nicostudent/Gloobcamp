import { LinkButton } from "@/components/LinkButton";
import NavigationLink from "@/components/NavigationLink";
import Container from "@/components/Footer/Container";
import SocialMediaIconLink from "../SocialMediaIconLink";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer 
    tabIndex={-1}
    className="gap-2 grid mx-auto my-12 px-6 max-w-7xl">
      <Container>
        <nav className="flex flex-wrap gap-8">
          <NavigationLink className="text-primary dark:text-white" href="/">Home</NavigationLink>
          <NavigationLink className="text-primary dark:text-white" href="/aboutus">About us</NavigationLink>
          <NavigationLink className="text-primary dark:text-white" href="/contact-us">Contact us</NavigationLink>
        </nav>

        <SocialMediaIconLink
          href="https://github.com/Nicostudent/gloobcamp"
          icon={<FaGithub  className="w-10 h-10 dark:text-white"/>}
          alt="Github"
          styles={"hover:scale-110 transition-all duration-300 ease-in-out"}
        />
      </Container>

      <Container>
        <div className="flex flex-col items-center sm:items-start gap-2">
          <p className="font-bold text-md text-tertiary dark:text-white">
            Do you want to work with us?
          </p>
          <LinkButton
            dark
            href="/contact-us"
            label="Get in touch"
            aria-label="Get in touch"
          />
        </div>
        <div>
          <p className="text-sm text-tertiary dark:text-white">© 2024. All rights reserved.</p>
          <p className="text-sm text-tertiary dark:text-white">Made with ❤️ in Argentina.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
