import React from "react";
import { filmList } from "../../constants/movie";
import Movie from "../Movie/Movie";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Now = () => {
  return (
    <div className="w-full py-20 lg:px-20 md:px-5 xs:px-2">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-title tracking-wide text-gray-100 uppercase pb-4">
          Phim đang chiếu
        </div>
        <div className="flex items-center">
          <ChevronLeftIcon className="w-12 text-white cursor-pointer" />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4 w-full">
            <Movie />
            <Movie />
            <Movie />
            <Movie />
          </div>
          <ChevronRightIcon className="w-12 text-white cursor-pointer" />
        </div>
        {/* {
          filmList.map(() => {
            <Movie />
          })
        } */}
      </div>
    </div>
  );
};

export default Now;
