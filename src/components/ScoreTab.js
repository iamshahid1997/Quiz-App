import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";

function ScoreTab({ score, totalQuestions, time }) {
  const SUCCESS_MSG = "Congratulations, You have passed the quiz.";
  const FAIL_MSG = "Oh Snap, YOu can do better";
  return (
    <div className="bg-purple-300 h-50vh px-4 py-6 flex flex-col items-center">
      <p className="text-2xl font-semibold text-gray-800 mt-7">
        The Daily Node js Quiz
      </p>
      <div className="w-full bg-white flex flex-col items-center p-3 rounded-xl mt-4 space-y-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <p className="text-green-500 text-xs">You Scored: </p>
        <p className="text-2xl text-purple-700 font-semibold animate-bounce">
          {(score / totalQuestions) * 100}%
        </p>
        <p className="text-sm text-gray-600 font-semibold">
          {score < 3 ? FAIL_MSG : SUCCESS_MSG}
        </p>
        <p className="text-xs text-gray-600 text-center">
          Success is not final, failure is not fatal; It is the courage to
          continue that counts.
        </p>
      </div>
      <div className="flex justify-between items-center w-full mt-6 px-5">
        <div className="flex flex-col space-y-1 items-center">
          <p className="text-sm text-gray-600 font-semibold">Your Score</p>
          <p className="text-2xl text-purple-700 font-semibold tracking-widest">
            {score}/{totalQuestions}
          </p>
        </div>
        <div className="flex flex-col space-y-1 items-center">
          <p className="text-sm text-gray-600 font-semibold">Time Taken</p>
          <p className="text-2xl text-purple-700 font-semibold tracking-widest">
            {time.minutes}: {20 - time.seconds}
          </p>
        </div>
      </div>
      <img src="/assets/seekho.png" alt="logo" className="w-1/4 mt-4" />
      <div className="flex space-x-2 mt-4">
        <AiOutlineShareAlt className="text-green-800" />
        <p className="text-[11px] text-gray-600">Share with your friends.</p>
      </div>
    </div>
  );
}

export default ScoreTab;
