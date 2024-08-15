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
      <div className="flex flex-col h-full max-w-7xl p-6 rounded-xl justify-center items-center border-2 text-center bg-primary text-gray-100">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-6">
          Quiz Result!
        </h2>
        <div className="mb-6">
          <p className="text-xl">Correct Answers: {correctChoices}</p>
        </div>
        <div className="mb-6">
          <p className="text-xl">Incorrect Answers: {incorrectChoices}</p>
        </div>
        <div className="flex justify-center flex-col items-center md:flex-row">
          <button
            className="w-fit p-3  text-center font-semibold rounded-md bg-gray-100 hover:opacity-90 text-primary md:mx-3 mb-3 md:mb-0"
            onClick={handleRestartQuiz}
          >
            Try again
          </button>
          <Link
            href={nextTopicPath}
            className="w-fit p-3  text-center font-semibold rounded-md hover:opacity-90  bg-gray-100 text-primary"
          >
            Next Topic
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl border-x-2 border-b-2 border-t border-primary drop-shadow-xl rounded-xl">
      <div className="flex flex-col h-full w-full p-6 rounded-xl text-black text-start">
        <p className="text-center md:text-start mb-3">
          QUESTION {questionIndex + 1}/{totalQuestions}
        </p>
        <hr className="border-primary mb-6" />
        <h2 className="text-xl md:text-2xl text-pretty text-center md:text-start">
          {currentQuestion.question}
        </h2>
        <section className="text-center h-auto flex flex-col justify-center items-center">
          <ul className="w-full md:text-xl text-pretty">
            {currentQuestion.choices.map((choices, index) => (
              <li className="w-full my-6 rounded-xl border-2" key={index}>
                <button
                  className="p-4 rounded-xl w-full text-center md:text-start text-black hover:bg-primary hover:text-white duration-200 ease-in-out"
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
