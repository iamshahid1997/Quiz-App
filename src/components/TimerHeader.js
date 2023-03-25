import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

function TimerHeader({
  currentQuestion,
  totalQuestions,
  setQuizCompleted,
  setTime,
}) {
  const [startTimer, setStartTimer] = useState(null);

  useEffect(() => {
    setStartTimer(
      <Countdown
        date={Date.now() + 6000000}
        renderer={renderer}
        onComplete={() => {
          setQuizCompleted(true);
          setTime({ minutes: 0, seconds: 0 });
        }}
      />
    );
  }, [setQuizCompleted]);

  function renderer({ minutes, seconds }) {
    setTime({ minutes: minutes, seconds: seconds });
    return (
      <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-semibold leading-3">
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    );
  }
  return (
    <div className="w-full bg-slate-100 h-[16dvh] flex justify-between px-4 items-center sticky top-0">
      <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold leading-3">
        {`0${currentQuestion} / 0${totalQuestions}`}
      </span>
      {startTimer}
    </div>
  );
}

export default TimerHeader;
