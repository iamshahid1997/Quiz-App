import React from "react";
import Answers from "./Answers";
import Header from "./Header";
import ScoreTab from "./ScoreTab";

function ResultPage({ score, totalQuestions, time, answersList }) {
  return (
    <>
      <Header />
      <ScoreTab score={score} totalQuestions={totalQuestions} time={time} />
      <Answers answersList={answersList}/>
    </>
  );
}

export default ResultPage;
