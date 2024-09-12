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
  // const [data, setData] = useState({
  //   theater: "",
  //   film: "",
  //   date: "",
  //   time: "",
  // });
  const [statusData, setStatusData] = useState({
    theater: false,
    film: false,
    date: false,
    time: false,
  });

  const theaterRef = useRef(null);
  const filmRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);


  const selectData = () => {
    // setStatusData((prevState) => ({
    //   // ...prevState, // Giữ lại các giá trị khác trong state
    //   theater: !prevState.theater, // Đảo ngược giá trị theater
    // }));

    setStatusData((prevState) => ({
      theater: !prevState.theater,
      film: !prevState.film,
      date: !prevState.date,
      time: !prevState.time,
    }));

    getPosition(theaterRef);
  };

  const getPosition = (ref) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      console.log('X:', rect.x, 'Y:', rect.y);
      console.log('Width:', rect.width, 'Height:', rect.height);
      console.log('Top:', rect.top, 'Left:', rect.left);
      return rect.x;
    }
  };

  return (
    <div>
      <div className="bg-gray-100 rounded-md hidden md:flex gap-3 p-5 lg:w-[95%] xl:w-[85%] mx-auto justify-between items-center">
        <div className="font-bold text-[18px] uppercase">Đặt nhanh</div>
        <div className="select-data" onClick={selectData} ref={theaterRef}>
          1. Chọn rạp
          <ChevronDownIcon className="w-4 md:ml-2" />
        </div>
        <div className="select-data" ref={filmRef}>
          2. Chọn phim
          <ChevronDownIcon className="w-4 ml-2" />
        </div>
        <div className="select-data" ref={dateRef}>
          3. Chọn ngày
          <ChevronDownIcon className="w-4 ml-2" />
        </div>
        <div className="select-data" ref={timeRef}>
          4. Chọn suất
          <ChevronDownIcon className="w-4 ml-2" />
        </div>
        <Button
          className="button md:button bg-cinestar-gold w-[125px] h-[40px] mr-3 group hover:text-white"
          text="Đặt ngay"
          colorChange="bg-cinestar-orange"
        />
      </div>
      {statusData.theater && <SelectData list={listTheater} style={{ marginLeft: `${getPosition(theaterRef)}px` }} />}
      {statusData.film && <SelectData list={listFilm} style={{ marginLeft: `${getPosition(filmRef)}px` }} />}
      {statusData.date && <SelectData list={listDay} style={{ marginLeft: `${getPosition(dateRef)}px` }} />}
      {statusData.time && <SelectData list={listTime} style={{ marginLeft: `${getPosition(timeRef)}px` }} />}
    </div>
  );
};

export default SearchBox;
