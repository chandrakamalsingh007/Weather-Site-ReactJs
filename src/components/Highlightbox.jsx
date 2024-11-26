import React from "react";

const HighlightBox = ({ title, value, Icon }) => {
  return (
    <div className="bg-gradient-to-br from-[#4B5563] to-[#374151] text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[200px] h-[100px] flex flex-col justify-between">
      <div className="text-md font-semibold text-gray-300">{title}</div>
      <div className="flex items-center justify-between">
        <Icon className="text-blue-400 text-3xl" />
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default HighlightBox;
