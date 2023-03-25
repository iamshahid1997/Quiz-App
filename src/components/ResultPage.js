import React from "react";
import { Link } from "react-router-dom";
import Answers from "./Answers";
import Footer from "./Footer";
import Header from "./Header";
import ScoreTab from "./ScoreTab";

function ResultPage({ score, totalQuestions, time, answersList }) {
  return (
    <>
      <Header />
      <ScoreTab score={score} totalQuestions={totalQuestions} time={time} />
      <Answers answersList={answersList} />
      <Link to="/">
        <Footer btnText="Home" />
      </Link>
    </>
  );
}

export default ResultPage;
