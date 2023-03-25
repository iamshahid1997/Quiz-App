import React from "react";
import QUESTIONS from "../utils/MCQ.json";

function Answers({ answersList }) {
  return (
    <div className="mt-5 px-4">
      <p className="text-2xl font-semibold text-gray-600 text-center">
        Your Answers
      </p>
      <div className="mt-4 flex flex-col space-y-4">
        {QUESTIONS.questions.map((question, index) => (
          <div className="flex flex-col space-y-2" key={index}>
            <p className="text-sm text-gray-600 text-medium">
              {index + 1} . {question.question}
            </p>
            <p
              className={`${
                answersList[index] && answersList[index].correct
                  ? "text-green-500"
                  : "text-rose-500"
              } px-3 text-xs`}
            >
              {answersList[index] ? answersList[index].answer : "Not Answered"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Answers;
