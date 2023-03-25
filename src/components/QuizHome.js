import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { GiCrossedSwords } from "react-icons/gi";
import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { CiStickyNote } from "react-icons/ci";
import { BsPatchQuestion } from "react-icons/bs";
import { RiStackLine } from "react-icons/ri";
import BottomBar from "./BottomBar";
import IconText from "./IconText";

const QUIZ_DESCRIPTION =
  "This Node Js Proficiency Testis designed to evaluate an individual's knowledge and skills in using Node Js. It covers a wide range of topics and test your knowledge in the field of backend.";

function QuizHome({ showBottomBar, setShowBottomBar }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <div className="min-h-[84.5vh]">
      <img
        src="/assets/quizPoster.jpeg"
        alt="poster"
        className="w-full h-64 lg:h-96 transition ease-in-out delay-150 before:w-0 after:w-full"
      />
      <div className="px-4 py-6">
        <p className="text-xl lg:text-2xl font-semibold text-gray-600">
          The Daily Node Js Quiz
        </p>
        <div className="flex justify-between mt-8">
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-2 items-center text-gray-500 font-medium">
              <FaRegCommentDots />
              <p className="text-[11px] lg:text-sm text-gray-600">Leave a comment</p>
            </div>
            <div className="flex space-x-2 items-center text-gray-500 font-medium">
              <BsSave />
              <p className="text-[11px] lg:text-sm text-gray-600">Save Quiz</p>
            </div>
            <div className="flex space-x-2 items-center text-gray-500 font-medium">
              <GiCrossedSwords />
              <p className="text-[11px] lg:text-sm text-gray-600">Challenge a Friend</p>
            </div>
          </div>
          <div>
            <div className="flex items-center -space-x-3 lg:-space-x-4">
              <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="/assets/gojo.avif"
                  alt="enrolled"
                  className="h-full w-full"
                />
              </div>
              <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="/assets/nanami.webp"
                  alt="enrolled"
                  className="h-full w-full"
                />
              </div>
              <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="/assets/otaku.webp"
                  alt="enrolled"
                  className="h-full w-full"
                />
              </div>
              <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="/assets/sukuna.jpeg"
                  alt="enrolled"
                  className="h-full w-full"
                />
              </div>
              <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full overflow-hidden border-2 border-white bg-green-500 text-white flex justify-center items-center text-[8px]">
                <p>98+</p>
              </div>
            </div>
            <p className="text-[9px] lg:text-xs text-gray-500">people enrolled</p>
            <div className="flex items-center text-sm text-[#FDCC0D] mt-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="text-[9px] lg:text-xs text-gray-500">3 Ratings(5.0)</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-xs lg:text-sm text-gray-600 font-medium">
            {showFullDescription
              ? QUIZ_DESCRIPTION
              : `${QUIZ_DESCRIPTION.substr(0, 98)} ...`}
          </p>
          <p
            className="font-semibold text-green-600 text-[11px]"
            onClick={() => setShowFullDescription((prev) => !prev)}
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </p>
          <div className="mt-5">
            <p className="text-lg lg:text-xl font-semibold text-gray-500">
              The Quiz Includes
            </p>
            <div className="mt-3 flex flex-col space-y-3">
              <IconText
                subTitle="50% Passing Percentage"
                icon={<CiStickyNote />}
                space="space-x-2"
              />
              <IconText
                subTitle="5 Questions"
                icon={<BsPatchQuestion />}
                space="space-x-2"
              />
              <IconText
                subTitle="1 Min"
                icon={<AiOutlineClockCircle />}
                space="space-x-2"
              />
              <IconText
                subTitle="1 Attempt Daily"
                icon={<RiStackLine />}
                space="space-x-2"
              />
            </div>
          </div>
        </div>
      </div>
      {showBottomBar && (
        <BottomBar
          showBottomBar={showBottomBar}
          setShowBottomBar={setShowBottomBar}
        />
      )}
    </div>
  );
}

export default QuizHome;
