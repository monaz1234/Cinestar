import React from "react";

const ComboBox = () => {
  return (
    <div className="md:hidden flex relative right-0 p-2 text-cinestar-gold border-white border rounded-md font-bold">
      <select className="bg-cinestar-black outline-none cursor-pointer" name="" id="">
        <option value="">Cinestar Hai Bà Trưng</option>
        <option value="">Cinestar Quốc Thanh</option>
      </select>
    </div>
  );
};

export default ComboBox;
