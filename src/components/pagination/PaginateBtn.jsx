import React from "react";

const PaginateBtn = ({ title, icon }) => {
  return (
    <button className="text-primary600 cursor-pointer flex items-center gap-x-1 bg-isWhite p-1.5 w-fit px-6 rounded-r25 hover:bg-primary600 hover:text-isWhite transition-all duration-500 ease-in-out">
      {title == "Prev" && <span>{icon}</span>}
      <span className="tracking-wider">{title}</span>
      {title == "Next" && <span>{icon}</span>}
    </button>
  );
};

export default PaginateBtn;
