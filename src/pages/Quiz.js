import React, { useState } from "react";
import CompletedPage from "../components/CompletedPage";
import Footer from "../components/Footer";
import Questions from "../components/Questions";
import ResultPage from "../components/ResultPage";
import TimerHeader from "../components/TimerHeader";
import QUESTIONS from "../utils/MCQ.json";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answersList, setAnswersList] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(null);
  const [score, setScore] = useState(0);

  function quizScoreHandler() {
    setAnswersList((prev) => [...prev, selectedAnswer]);
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

  function showResultHandler() {
    setShowResult(true);
  }

  return quizCompleted && !showResult ? (
    <CompletedPage onClick={showResultHandler} />
  ) : !showResult && !quizCompleted ? (
    <>
      <TimerHeader
        currentQuestion={currentQuestion + 1}
        totalQuestions={QUESTIONS.questions.length}
        setQuizCompleted={setQuizCompleted}
        setTime={setTime}
      />
      <Questions
        question={QUESTIONS.questions[currentQuestion]}
        setSelectedAnswer={setSelectedAnswer}
        selectedAnswer={selectedAnswer}
        setAnswersList={setAnswersList}
      />
      <Footer
        onClick={selectedAnswer && quizScoreHandler}
        btnText={
          currentQuestion === QUESTIONS.questions.length - 1 ? "Submit" : "Next"
        }
      />
    </>
  ) : (
    quizCompleted &&
    showResult && (
      <ResultPage
        answersList={answersList}
        score={score}
        totalQuestions={QUESTIONS.questions.length}
        time={time}
      />
    )
  );
}

export default Quiz;
