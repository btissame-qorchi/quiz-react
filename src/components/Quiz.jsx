import React, { useState } from "react";
import questions from "../data/questions";
import "../css/Quiz.css";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    setUserAnswer(option);
    setIsAnswered(true);
    if (option.isCorrect) setScore(score + 1);
  };

  const handleNext = () => {
    if (isAnswered) {
      setUserAnswer(null);
      setIsAnswered(false);
      setCurrentQuestionIndex((prevIndex) =>
        Math.min(prevIndex + 1, questions.length - 1)
      );
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setUserAnswer(null);
    setIsAnswered(false);
    setScore(0);
  };

  const { question, options } = questions[currentQuestionIndex];

  return (
    <div className="wrapper-box">
      <div className="question-box">
        <h3>{question}</h3>
        <ul>
          {options.map((option, idx) => {
            const className = isAnswered
              ? option.isCorrect
                ? "correct"
                : userAnswer === option
                ? "incorrect"
                : ""
              : "";
            return (
              <li
                key={idx}
                className={className}
                onClick={() => !isAnswered && handleAnswer(option)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="index-question">
        Question {currentQuestionIndex + 1} sur {questions.length}
      </div>
      <div className="bottom">
        {isAnswered && currentQuestionIndex < questions.length - 1 && (
          <button onClick={handleNext}>Suivant</button>
        )}
        {isAnswered && currentQuestionIndex === questions.length - 1 && (
          <div>
            <span>
              Votre score : {score} / {questions.length}
            </span>
            <button onClick={handleReset}>Recommencer</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
