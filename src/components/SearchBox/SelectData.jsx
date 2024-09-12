import React from "react";

const SelectData = ({ list, style }) => {
  return (
    <div className="relative">
      <ul className="w-[150px] bg-gray-200 sm:text-[12px] md:text-[13px] lg:text-[14px] absolute" style={style}>
        {list.map((item, index) => (
          <li key={index} className="flex justify-center items-center list-none hover:bg-gray-300 min-h-[50px] cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectData;
