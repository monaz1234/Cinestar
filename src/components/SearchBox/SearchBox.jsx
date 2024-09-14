import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  listTheater,
  listFilm,
  listDay,
  listTime,
} from "../../constants/searchbox";
import SelectData from "./SelectData";

const SearchBox = () => {
  const [statusData, setStatusData] = useState({
    theater: false,
    film: false,
    date: false,
    time: false,
  });

  const selectData = () => {
    setStatusData((prevState) => ({
      ...prevState, 
      theater: !prevState.theater,
    }));
  };

  return (
    <div className="xl:p-4 lg:p-3 md:p-2 xs:p-1">
      <div className="relative lg:w-[95%] md:w-[85%] xl:p-4 lg:p-3 md:p-2 xs:p-1 rounded-md grid md:grid-cols-6 items-center gap-4 m-auto bg-blue-100">
        <div className="text-[18px] uppercase font-extrabold">Đặt nhanh</div>
        <div className="relative">
          <div className="select-data-btn" onClick={selectData}>
            1. Chọn rạp
            <ChevronDownIcon className="w-4 ml-2" />
          </div>
          {/* List */}
          {statusData.theater && <SelectData list={listTheater} status={statusData.theater} />}
        </div>
        <div className="relative">
          <div className="select-data-btn">
            2. Chọn phim
            <ChevronDownIcon className="w-4 ml-2" />
          </div>
          {/* List */}
          {statusData.film && <SelectData list={listFilm} />}
        </div>
        <div className="relative">
          <div className="select-data-btn">
            3. Chọn ngày
            <ChevronDownIcon className="w-4 ml-2" />
          </div>
          {/* List */}
          {statusData.date && <SelectData list={listDay} />}
        </div>
        <div className="relative">
          <div className="select-data-btn">
            4. Chọn suất
            <ChevronDownIcon className="w-4 ml-2" />
          </div>
          {/* List */}
          {statusData.time && <SelectData list={listTime} />}
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
