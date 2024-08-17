import { LinkButton } from "@/components/LinkButton";
import { Heading, Paragraph } from "@/components/Writing";

const App = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 py-24 align-middle">
      <div className="text-center">
        <Heading addClass="dark:text-white">Welcome to GloobCamp</Heading>
      </div>
      <div className="max-w-2xl px-4 text-center">
        <Paragraph addClass="dark:text-white">
          Discover the essential knowledge every JavaScript developer should
          know. Progress through our expertly crafted topics and challenge
          yourself with quizzes at the end of each lesson. Earn knowledge points
          for every correct answer and track your progress as you master
          JavaScript. Ready to begin?
        </Paragraph>
      </div>
      <LinkButton dark href={"/content"} label={"Start my learning journey!"} />
    </main>
  );
};

export default App;
