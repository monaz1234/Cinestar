import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  listTheater,
  listFilm,
  listDay,
  listTime,
} from "../../constants/searchbox";
import SelectData from "./SelectData";
import SearchContext from "../../context/SearchContext/SearchContext";

const SearchBox = () => {
  const { searchData, statusData, setStatusData } = useContext(SearchContext);

  const openList = (type, status) => {
    setStatusData((prevState) => ({
      ...prevState,
      [type]: !status,
    }));
  };

  return (
    <div className="xl:p-4 lg:p-3 md:p-2 xs:p-1">
      <div className="relative lg:w-[95%] md:w-[85%] xl:p-4 lg:p-3 md:p-2 xs:p-1 rounded-md grid md:grid-cols-6 items-center gap-4 m-auto bg-blue-100">
        <div className="text-[18px] uppercase font-extrabold">Đặt nhanh</div>
        <div className="relative">
          <div
            className="select-data-btn cursor-pointer"
            onClick={() => openList("theater", statusData.theater)}
          >
            {searchData.theater ? searchData.theater : "1. Chọn rạp"}
            <ChevronDownIcon className="w-4 ml-2" />
          </div>
          {/* List */}
          {statusData.theater && <SelectData list={listTheater} id="theater" />}
        </div>
        <div className="relative">
          <div
            className="select-data-btn"
            onClick={() => openList("film", statusData.film)}
          >
            {searchData.film ? searchData.film :'2. Chọn phim'}
            <ChevronDownIcon className="w-4 ml-2" />
          </div>
          {/* List */}
          {statusData.film && <SelectData list={listFilm} id="film" />}
        </div>
        <div className="relative">
          <div
            className="select-data-btn"
            onClick={() => openList("date", statusData.date)}
          >
            {searchData.date ? searchData.date :'3. Chọn ngày'}
            <ChevronDownIcon className="w-4 ml-2" />
          </div>
          {/* List */}
          {statusData.date && <SelectData list={listDay} id="date" />}
        </div>
        <div className="relative">
          <div
            className="select-data-btn"
            onClick={() => openList("time", statusData.time)}
          >
            {searchData.time ? searchData.time :'4. Chọn suất'}
            <ChevronDownIcon className="w-4 ml-2" />
          </div>
          {/* List */}
          {statusData.time && <SelectData list={listTime} id="time" />}
        </div>

        {/* Button booking */}
        <Button
          text="Đặt ngay"
          className="button bg-cinestar-gold w-[125px] h-[40px] mr-3 group hover:text-white"
          colorChange="bg-cinestar-orange"
        />
      </div>
    </div>
  );
};

export default SearchBox;
