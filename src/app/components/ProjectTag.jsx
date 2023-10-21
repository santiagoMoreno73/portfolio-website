import React from "react";

const ProjectTag = ({ tag, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default ProjectTag;
