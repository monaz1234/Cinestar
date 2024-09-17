import React from "react";
import { FilmTest1, PlayTrailerIcon } from "../../assets";
import Button from "../Button/Button";

const Movie = () => {
  return (
    <div className="flex flex-col w-full p-2">
      {/* Poster */}
      <div className="basis-3/4 cursor-pointer">
        <img src={FilmTest1} alt="poster" className="rounded-md" />
      </div>
      {/* Info */}
      <div className="basis-1/4 pt-2 w-full">
        <div className="text-center text-xl pb-2 text-white cursor-pointer">
          Ăn cướp và đồng bọn
        </div>
        <div className="flex justify-between">
          <div className="flex items-center cursor-pointer relative">
            <img
              src={PlayTrailerIcon}
              alt="play-trailer"
            />
            <span className="ml-2 text-white relative after:transition-all after:duration-300 after:ease-in-out after:absolute after:left-0 after:top-6 after:w-0 hover:after:w-full after:border-b-2 after:border-cinestar-gold ">
              Xem trailer
            </span>
          </div>
          <Button
            className="button bg-cinestar-gold w-[125px] h-[40px] font-title text-[14px] group hover:text-white hover:duration-300"
            text="Đặt vé"
            colorChange="bg-cinestar-orange"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
