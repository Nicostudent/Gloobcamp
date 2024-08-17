const UserHeading = ({ lastname, name, position }) => {
  return (
    <div className="bg-white dark:bg-stone-900 p-4 text-center dar">
      <p className="font-bold text-secondary text-xl dark:text-white">
        {lastname}, <span className="text-primary">{name}</span>
      </p>
      <span className="text-md text-tertiary dark:text-white">{position}</span>
    </div>
  );
};

export default UserHeading;
