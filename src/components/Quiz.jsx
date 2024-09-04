"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const decodeHTML = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Quiz = ({ questions, nextTopicPath, topicId, subject }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [correctChoices, setCorrectChoices] = useState([]);
  const [incorrectChoices, setIncorrectChoices] = useState([]);

  const [completedTopics, setCompletedTopics] = useLocalStorage(
    `completedTopics_${subject}`,
    []
  );

  const currentQuestion = questions[questionIndex];
  const totalQuestions = questions.length;

  const handleIsCorrectChoice = (e) => {
    const selectedChoice = decodeHTML(e.target.innerHTML);
    const correctAnswer = decodeHTML(currentQuestion.correctAnswer);

    if (selectedChoice === correctAnswer) {
      setCorrectChoices((prev) => [...prev, selectedChoice]);
    } else {
      setIncorrectChoices((prev) => [
        ...prev,
        { choice: selectedChoice, index: questionIndex },
      ]);
    }

    if (questionIndex + 1 < totalQuestions) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);

      if (
        incorrectChoices.length === 0 &&
        correctChoices.length + 1 === totalQuestions
      ) {
        if (!completedTopics.includes(topicId)) {
          setCompletedTopics([...completedTopics, topicId]);
        }
      }
    }
  };

  const handleRestartQuiz = () => {
    setQuestionIndex(0);
    setCorrectChoices([]);
    setIncorrectChoices([]);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="flex flex-col justify-center items-center border-2
       bg-primary dark:bg-stone-900 p-6 rounded-xl  w-2/3 max-w-7xl h-full text-center text-gray-100 ease-in-out duration-700">
        <h2 className="mb-6 font-black text-2xl text-center md:text-4xl">
          Quiz Result!
        </h2>
        <p className="text-xl mb-6">Correct Answers: {correctChoices.length}</p>
        <div className="mb-6">
          <p className="text-xl mb-2">
            Incorrect Answers: {incorrectChoices.length}
          </p>
          <ul>
            {incorrectChoices.map((item, index) => (
              <li
                className="border-2 m-1 px-2 bg-slate-500 rounded-lg opacity-65"
                key={index}
              >
                <p className="text-start">
                  Question {item.index + 1}: {questions[item.index].question}
                </p>
                <p className="text-start">
                  Your answer: {item.choice}{" "}
                  <span className="text-red-500 drop-shadow-sm font-bold items-center text-center">
                    X
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center">
          {incorrectChoices.length !== 0 ? (
            <button
              className="bg-gray-100 dark:bg-primary hover:opacity-90 md:mx-3 mb-3 md:mb-0 p-3 rounded-md w-fit font-semibold text-center text-primary dark:text-white"
              onClick={handleRestartQuiz}
            >
              Try again
            </button>
          ) : (
            <Link
              href={nextTopicPath}
              className="bg-gray-100 dark:bg-primary hover:opacity-90 p-3 rounded-md w-fit font-semibold text-center text-primary dark:text-white"
            >
              Next Topic
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="border-primary border-x-2 dark:bg-stone-900 drop-shadow-xl border-t border-b-2 rounded-xl w-2/3 h-2/3">
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
            {currentQuestion.choices.map((choice, index) => (
              <li className="border-2 my-6 rounded-xl w-full" key={index}>
                <button
                  className="hover:bg-primary p-4 rounded-xl w-full text-black text-center md:text-start hover:text-white dark:text-white duration-200 ease-in-out"
                  onClick={handleIsCorrectChoice}
                >
                  {choice}
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
