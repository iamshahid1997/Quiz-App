import React from "react";

function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className={`${onClick ? 'bg-green-500' : 'bg-green-400'} px-7 py-2 rounded-full text-white text-sm`}
    >
      {text}
    </button>
  );
}

export default Button;
