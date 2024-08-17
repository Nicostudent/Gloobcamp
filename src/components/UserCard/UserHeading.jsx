const UserHeading = ({ lastname, name, position }) => {
  return (
    <div className="dar bg-white p-4 text-center dark:bg-stone-900">
      <p className="text-xl font-bold text-secondary dark:text-white">
        {lastname}, <span className="text-primary">{name}</span>
      </p>
      <span className="text-md text-tertiary dark:text-white">{position}</span>
    </div>
  );
};

export default UserHeading;
