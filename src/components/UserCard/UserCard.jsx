import React from "react";
import UserImage from "./UserImage.jsx";
import UserHeading from "./UserHeading.jsx";
import UserSocial from "./UserSocial.jsx";

const UserCard = ({ picture, lastname, name, position, github, linkedin }) => {
  return (
    <div className="relative max-w-fit overflow-hidden">
      <div className="relative group">
        <UserImage source={picture} />
        <div className="absolute inset-0 flex flex-row justify-center items-center gap-4 bg-primary opacity-0 group-hover:opacity-100 p-8 transition-opacity duration-300 ease-in-out">
          <UserSocial
            href={github}
            src="/github.svg"
            alt={`Github link to ${name} ${lastname} profile`}
          />
          <UserSocial
            href={linkedin}
            src="/linkedin.svg"
            alt={`Linkedin link to ${name} ${lastname} profile`}
          />
        </div>
      </div>
      <UserHeading lastname={lastname} name={name} position={position} />
    </div>
  );
};

export default UserCard;
