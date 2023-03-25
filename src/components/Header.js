import React from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full bg-slate-100 h-[16dvh] flex justify-between px-4 items-center sticky top-0">
      <FaArrowLeft className="text-gray-600 font-light" />
      <div className="flex space-x-4 items-center">
        <FaSearch />
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img src="/assets/yuji.jpg" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
