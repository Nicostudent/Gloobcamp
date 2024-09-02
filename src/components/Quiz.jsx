"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const decodeHTML = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Quiz = ({ questions, nextTopicPath, topicId, subject }) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  const [correctChoices, setCorrectChoices] = useState(0);

  const [incorrectChoices, setIncorrectChoices] = useState(0);

  const currentQuestion = questions[questionIndex];

  const totalQuestions = questions.length;


  useEffect(() => {
    const storedCompletedTopics = JSON.parse(localStorage.getItem("completedTopics")) || [];
    if (!Array.isArray(storedCompletedTopics)) {
      localStorage.setItem("completedTopics", JSON.stringify([]));
    }
  }, []);

  const handleIsCorrectChoice = (e) => {
    const selectedChoice = decodeHTML(e.target.innerHTML);
    const correctAnswer = decodeHTML(currentQuestion.correctAnswer);
    if (selectedChoice == correctAnswer) {
      setCorrectChoices((prev) => prev + 1);
    } else {
      setIncorrectChoices((prev) => prev + 1);
    }

    if (questionIndex < totalQuestions) {
      setQuestionIndex((prev) => prev + 1);
    }

    if (questionIndex + 1 === totalQuestions) {
      setIsFinished(true);

      if (incorrectChoices === 0 && correctChoices + 1 === totalQuestions) {
        const storedCompletedTopicsKey = `completedTopics_${subject}`;
        const storedCompletedTopics = JSON.parse(localStorage.getItem(storedCompletedTopicsKey)) || [];
      
        if (!storedCompletedTopics.includes(topicId)) {
          storedCompletedTopics.push(topicId);
          localStorage.setItem(storedCompletedTopicsKey, JSON.stringify(storedCompletedTopics));
        }
      }
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
      <div className="flex flex-col justify-center items-center border-2 bg-primary dark:bg-stone-900 p-6 rounded-xl max-w-7xl h-full text-center text-gray-100">
        <h2 className="mb-6 font-black text-2xl text-center md:text-4xl">
          Quiz Result!
        </h2>
        <div className="mb-6">
          <p className="text-xl">Correct Answers: {correctChoices}</p>
        </div>
        <div className="mb-6">
          <p className="text-xl">Incorrect Answers: {incorrectChoices}</p>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center">
          <button
            className="bg-gray-100 dark:bg-primary hover:opacity-90 md:mx-3 mb-3 md:mb-0 p-3 rounded-md w-fit font-semibold text-center text-primary dark:text-white"
            onClick={handleRestartQuiz}
          >
            Try again
          </button>
          <Link
            href={nextTopicPath}
            className="bg-gray-100 dark:bg-primary hover:opacity-90 p-3 rounded-md w-fit font-semibold text-center text-primary dark:text-white"
          >
            Next Topic
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="border-primary border-x-2 dark:bg-stone-900 drop-shadow-xl border-t border-b-2 rounded-xl max-w-7xl">
      <div className="flex flex-col p-6 rounded-xl w-full h-full text-black text-start dark:text-white">
        <p className="mb-3 text-center md:text-start">
          QUESTION {questionIndex + 1}/{totalQuestions}
        </p>
        <hr className="border-primary mb-6" />
        <h2 className="text-center text-pretty text-xl md:text-2xl md:text-start">
          {currentQuestion.question}
        </h2>
        <section className="flex flex-col justify-center items-center h-auto text-center">
          <ul className="w-full text-pretty md:text-xl">
            {currentQuestion.choices.map((choices, index) => (
              <li className="border-2 my-6 rounded-xl w-full" key={index}>
                <button
                  className="hover:bg-primary p-4 rounded-xl w-full text-black text-center md:text-start hover:text-white dark:text-white duration-200 ease-in-out"
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
