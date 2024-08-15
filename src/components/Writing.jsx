export const Heading = ({ children, addClass }) => {
  return (
    <h1 className={`text-5xl md:text-8xl font-bold text-secondary ${addClass}`}>
      {children}
      <span className="text-primary">.</span>
    </h1>
  );
};

export const SubTitle = ({ children, addClass }) => {
  return (
    <h2 className={`text-3xl md:text-5xl font-bold text-secondary ${addClass}`}>
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, addClass }) => {
  return (
    <p className={`text-sm md:text-lg text-tertiary ${addClass}}`}>
      {children}
    </p>
  );
};
