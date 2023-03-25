import React from "react";

function Questions({ question, setSelectedAnswer, selectedAnswer }) {
  return (
    <div className="min-h-[83vh] bg-slate-100 px-4 flex flex-col justify-between">
      <p className="text-gray-600 mt-6">{question.question}</p>
      <div className="flex flex-col space-y-2">
        {question.answers.map((answer, index) => (
          <div
            key={index}
            onClick={() => setSelectedAnswer(answer)}
            className="grid grid-cols-12 bg-white rounded-lg p-3 items-center cursor-pointer"
          >
            <div className="col-span-11 flex space-x-3 items-center">
              <span
                className={`${
                  selectedAnswer && selectedAnswer.answer === answer.answer
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white text-gray-800 border-gray-500"
                }p-2 font-semibold border rounded-lg w-10 h-10 flex justify-center items-center`}
              >
                {index + 1}
              </span>
              <p className="text-gray-700 w-3/4">{answer.answer}</p>
            </div>
            <div
              className={`${
                selectedAnswer && selectedAnswer.answer === answer.answer
                  ? "border-green-500"
                  : "border-gray-500"
              } rounded-full h-4 w-4 border flex justify-center items-center`}
            >
              <div
                className={`${
                  selectedAnswer && selectedAnswer.answer === answer.answer
                    ? "bg-green-500"
                    : "bg-white"
                } w-2 h-2 rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
