import React from "react";
import UserImage from "./UserImage.jsx";
import UserHeading from "./UserHeading.jsx";
import SocialMediaIconLink from "../SocialMediaIconLink.jsx";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const UserCard = ({ picture, lastname, name, position, github, linkedin }) => {
  return (
    <div className="relative max-w-fit overflow-hidden">
      <div className="relative group">
        <UserImage source={picture} />
        <div className="absolute inset-0 flex flex-row justify-center items-center gap-4 bg-primary opacity-0 group-hover:opacity-100 p-8 transition-opacity duration-300 ease-in-out">
          <SocialMediaIconLink
            href={github}
            icon={<IoLogoGithub className="w-10 h-10 text-white" />}
            alt={`Github link to ${name} ${lastname} profile`}
          />
          <SocialMediaIconLink
            href={linkedin}
            icon={<IoLogoLinkedin className="w-10 h-10 text-white" />}
            alt={`Linkedin link to ${name} ${lastname} profile`}
          />
        </div>
      </div>
      <UserHeading lastname={lastname} name={name} position={position} />
    </div>
  );
};

export default UserCard;
