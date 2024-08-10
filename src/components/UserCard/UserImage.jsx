import Image from "next/image";
const UserImage = ({ source }) => {
  return (
    <article>
      <Image
        src={source}
        alt="A picture of the member team"
        width={500}
        height={500}
        className="size-72"
      />
    </article>
  );
};

export default UserImage;
