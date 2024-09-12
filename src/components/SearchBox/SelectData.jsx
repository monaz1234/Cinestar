import React from "react";

const SelectData = ({ list }) => {
  return (
    <div>
      <ul className="w-[150px] bg-gray-100">
        {list.map((item, index) => (
          <li key={index} className="list-none hover:bg-gray-300 min-h-[100px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectData;
