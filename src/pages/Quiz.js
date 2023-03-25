import React, { useState } from "react";
import CompletedPage from "../components/CompletedPage";
import Footer from "../components/Footer";
import Questions from "../components/Questions";
import TimerHeader from "../components/TimerHeader";
import QUESTIONS from "../utils/MCQ.json";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(true);
  const [score, setScore] = useState(0);
  function quizScoreHandler() {
    if (currentQuestion < QUESTIONS.questions.length) {
      if (selectedAnswer) {
        if (selectedAnswer.correct) {
          setScore((prev) => prev + 1);
        }
      }
      if (currentQuestion < QUESTIONS.questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setQuizCompleted(true);
      }
    }
  }

  return quizCompleted ? (
    <CompletedPage score={score} />
  ) : (
    <>
      <TimerHeader
        currentQuestion={currentQuestion + 1}
        totalQuestions={QUESTIONS.questions.length}
        setQuizCompleted={setQuizCompleted}
      />
      <Questions
        question={QUESTIONS.questions[currentQuestion]}
        setSelectedAnswer={setSelectedAnswer}
        selectedAnswer={selectedAnswer}
      />
      <Footer
        onClick={selectedAnswer && quizScoreHandler}
        btnText={
          currentQuestion === QUESTIONS.questions.length - 1 ? "Submit" : "Next"
        }
      />
    </>
  );
}

export default Quiz;
