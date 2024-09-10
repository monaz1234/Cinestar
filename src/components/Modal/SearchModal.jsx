import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SearchModal = () => {
  const { isShowModal, setIsShowModal } = useContext(GlobalContext);

  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isShowModal
          ? "translate-y-0 opacity-100"
          : "-translate-y-10 opacity-30"
      }`}
    >
      {isShowModal && (
        <div className="flex justify-between items-center gap-2">
            <input
              className="w-[96%] flex m-auto rounded-xl h-10 p-4 mt-6 outline-none"
              type="text"
              placeholder="Nhập tên phim"
            />
            <XMarkIcon className="size-7 mt-5 text-white hover:opacity-75 cursor-pointer border rounded-full" onClick={() => setIsShowModal(false)}/>
        </div>
      )}
    </div>
  );
};

export default SearchModal;
