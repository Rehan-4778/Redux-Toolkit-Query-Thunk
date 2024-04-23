/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [isExpanded, setIsExpended] = useState(false);
  const handleClick = () => {
    setIsExpended(!isExpanded);
  };

  return (
    <div className="border border-gray-800 mb-2">
      <div className="p-2 flex justify-between items-center bg-gray-100">
        <div className="flex gap-3 items-center">{header}</div>
        <div className="cursor-pointer" onClick={handleClick}>
          {isExpanded ? (
            <GoChevronDown className="text-xl stroke-black stroke-1" />
          ) : (
            <GoChevronLeft className=" text-xl  stroke-black stroke-1" />
          )}
        </div>
      </div>
      {isExpanded && (
        <div className="border-t border-gray-400 p-2">{children}</div>
      )}
    </div>
  );
};

export default ExpandablePanel;
