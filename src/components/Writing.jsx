export const Heading = ({ children, addClass }) => {
  return (
    <h1 className={`text-5xl font-bold text-secondary md:text-8xl ${addClass}`}>
      {children}
      <span className="text-primary">.</span>
    </h1>
  );
};

export const SubTitle = ({ children, addClass }) => {
  return (
    <h2 className={`text-3xl font-bold text-secondary md:text-5xl ${addClass}`}>
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, addClass }) => {
  return (
    <p className={`text-sm text-tertiary md:text-lg ${addClass}`}>{children}</p>
  );
};
