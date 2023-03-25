import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ConfettiExplosion from "react-confetti-explosion";
import Footer from "./Footer";
import "./CompletedPage.css";

function CompletedPage({ score, onClick }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="relative min-h-[91.5vh] bg-purple-800 flex flex-col items-center justify-center space-y-4">
        <div className="h-[200px] w-[200px] bg-white rounded-full overflow-hidden flex flex-col justify-center items-center space-y-3">
          <img src="/assets/congratulations.gif" alt="congratulations" />
        </div>
        {!loading && (
          <ConfettiExplosion
            particleCount={400}
            duration={5000}
            height="350vh"
          />
        )}
        {!loading ? (
          <span className="textAnimation flex flex-col items-center space-y-2">
            <span className="flex items-center space-x-2 bg-emerald-500 px-4 py-2 rounded-full">
              <span className="h-6 w-6 rounded-full bg-yellow-500 flex justify-center items-center">
                <AiFillStar className="text-yellow-200" />
              </span>
              <p className="text-white font-semibold">60</p>
            </span>
            <p className="text-2xl font-semibold text-white tracking-wider">
              Karma Points earned!
            </p>
          </span>
        ) : (
          <img
            src="/assets/loading.gif"
            alt="congratulations"
            className="h-14 w-14"
          />
        )}
        <div className="absolute left-4 bottom-8 flex flex-col space-y-2 ">
          <p className="text-sm text-white text-semibold">
            What are karma Points?
          </p>
          <p className="text-[11px] text-gray-100 w-4/5">
            Karma points are awarded for various actions like atempting quizes
            and watching videos, allowing you to move up the leaderboards and
            unlock new features.
          </p>
        </div>
      </div>
      <Footer btnText="Check Result" onClick={onClick} />
    </>
  );
}

export default CompletedPage;
