import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineClockCircle, AiFillWarning } from "react-icons/ai";
import { BsPatchQuestion } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./BottomBar.css";
import Button from "./Button";
import IconText from "./IconText";

function BottomBar({ showBottomBar, setShowBottomBar }) {
  return (
    <SlidingPane
      //   closeIcon={<div>Some div containing custom close icon.</div>}
      isOpen={showBottomBar}
      //   stitle="Hey, it is optional pane title.  I can be React component too."
      from="bottom"
      //   width="100%"
      className="h-[30vh] mt-[70vh] w-full lg:w-[33%] overflow-hidden"
      onRequestClose={() => setShowBottomBar(false)}
    >
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-xl text-gray-700 font-semibold">Quiz Rules</p>
          <div className="flex flex-col space-y-5 mt-5">
            <IconText
              title="10 mins"
              subTitle="Keep in mind that this is a time-bound quiz."
              icon={<AiOutlineClockCircle />}
              space="space-x-4 text-2xl"
            />
            <IconText
              title="5 Questions"
              subTitle="We believe that you will ace it!"
              icon={<BsPatchQuestion />}
              space="space-x-4 text-2xl"
            />
            <IconText
              title="50% Passing Criteria"
              subTitle="All the best! See you on the other side."
              icon={<GrCertificate />}
              space="space-x-4 text-2xl"
            />
          </div>
        </div>
        <div className="mt-7 space-x-3 flex justify-center rounded-xl p-2 items-center bg-slate-200 text-sm">
          <AiFillWarning className="text-green-500" />
          <p className="text-[11px]">
            This quiz can only be attempted once daily.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <Link to="/quiz">
            <Button text="Start" />
          </Link>
        </div>
      </div>
    </SlidingPane>
  );
}

export default BottomBar;
