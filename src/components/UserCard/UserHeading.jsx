const UserHeading = ({ lastname, name, position }) => {
  return (
    <div className="bg-white p-4 text-center">
      <p className="font-bold text-secondary text-xl">
        {lastname}, <span className="text-primary">{name}</span>
      </p>
      <span className="text-md text-tertiary">{position}</span>
    </div>
  );
};

export default UserHeading;
