import React from "react";

function IconText({ title, subTitle, icon, space }) {
  return (
    <div
      className={`flex ${space} items-center text-gray-500 font-medium`}
    >
      {icon}
      <div className="flex flex-col">
        <p className="text-sm lg:text-base font-medium text-gray-600">{title}</p>
        <p className="text-xs lg:text-sm">{subTitle}</p>
      </div>
    </div>
  );
}

export default IconText;
