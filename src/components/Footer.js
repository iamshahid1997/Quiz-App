import React from "react";
import Button from "./Button";

function Footer({ onClick, btnText }) {
  return (
    <div className="w-full bg-slate-100 h-20 flex px-4 items-center sticky bottom-0 justify-center">
      <Button onClick={onClick} text={btnText} />
    </div>
  );
}

export default Footer;
