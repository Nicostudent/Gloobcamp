"use client";

import { useState } from "react";
import Link from "next/link";

const Quiz = ({ questions, nextTopicPath }) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  const [correctChoices, setCorrectChoices] = useState(0);

  const [incorrectChoices, setIncorrectChoices] = useState(0);

  const currentQuestion = questions[questionIndex];

  const totalQuestions = questions.length;

  const handleIsCorrectChoice = (e) => {
    const selectedChoice = e.target.innerHTML;
    if (selectedChoice === currentQuestion.correctAnswer) {
      setCorrectChoices((prev) => prev + 1);
    } else {
      setIncorrectChoices((prev) => prev + 1);
    }

    if (questionIndex < totalQuestions) {
      setQuestionIndex((prev) => prev + 1);
    }

    if (questionIndex + 1 === totalQuestions) {
      setIsFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuestionIndex(0);
    setCorrectChoices(0);
    setIncorrectChoices(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="flex h-full max-w-7xl flex-col items-center justify-center rounded-xl border-2 bg-primary p-6 text-center text-gray-100 dark:bg-stone-900">
        <h2 className="mb-6 text-center text-2xl font-black md:text-4xl">
          Quiz Result!
        </h2>
        <div className="mb-6">
          <p className="text-xl">Correct Answers: {correctChoices}</p>
        </div>
        <div className="mb-6">
          <p className="text-xl">Incorrect Answers: {incorrectChoices}</p>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <button
            className="mb-3 w-fit rounded-md bg-gray-100 p-3 text-center font-semibold text-primary hover:opacity-90 dark:bg-primary dark:text-white md:mx-3 md:mb-0"
            onClick={handleRestartQuiz}
          >
            Try again
          </button>
          <Link
            href={nextTopicPath}
            className="w-fit rounded-md bg-gray-100 p-3 text-center font-semibold text-primary hover:opacity-90 dark:bg-primary dark:text-white"
          >
            Next Topic
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl rounded-xl border-x-2 border-b-2 border-t border-primary drop-shadow-xl dark:bg-stone-900">
      <div className="flex h-full w-full flex-col rounded-xl p-6 text-start text-black dark:text-white">
        <p className="mb-3 text-center md:text-start">
          QUESTION {questionIndex + 1}/{totalQuestions}
        </p>
        <hr className="mb-6 border-primary" />
        <h2 className="text-pretty text-center text-xl md:text-start md:text-2xl">
          {currentQuestion.question}
        </h2>
        <section className="flex h-auto flex-col items-center justify-center text-center">
          <ul className="w-full text-pretty md:text-xl">
            {currentQuestion.choices.map((choices, index) => (
              <li className="my-6 w-full rounded-xl border-2" key={index}>
                <button
                  className="w-full rounded-xl p-4 text-center text-black duration-200 ease-in-out hover:bg-primary hover:text-white dark:text-white md:text-start"
                  onClick={handleIsCorrectChoice}
                >
                  {choices}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Quiz;
