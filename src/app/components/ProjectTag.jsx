import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-2 border-transparent bg-gradient-to-r from-blue-400 to-green-500 bg-clip-border"
    : "text-[#ADB7BE] border-2 border-slate-600 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-500 hover:bg-clip-border";
  
  return (
    <button
      className={`${buttonStyles} rounded-full px-6 py-3 text-xl cursor-pointer bg-black`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
