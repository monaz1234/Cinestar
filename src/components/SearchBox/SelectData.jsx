import React from "react";

const SelectData = ({ list }) => {
  return (
    <div className="bg-gray-100 rounded-sm absolute left-0 md:top-18 lg:top-12 backdrop-blur-xl pl-1 shadow-2xl w-full">
      {list.map((item, index) => (
        <div
          key={index}
          className="hover:bg-gray-300 cursor-pointer py-1 border-b border-gray-300"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SelectData;
