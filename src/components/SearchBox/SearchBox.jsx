import React, { useEffect, useState } from "react";
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

  const selectData = () => {
    setStatusData(prevState => ({
      ...prevState,  // Giữ lại các giá trị khác trong state
      theater: !prevState.theater // Đảo ngược giá trị theater
    }));
  };
  
  useEffect(() => {
    console.log(listTheater);
  }, [])

  return (
    <div className="bg-gray-100 rounded-md hidden md:flex gap-3 p-5 w-[95%] mx-auto justify-between items-center">
      <div className="font-bold text-[18px] uppercase">Đặt nhanh</div>
      <div className="select-data" onClick={selectData}>
        1. Chọn rạp
        <ChevronDownIcon className="w-4 md:ml-2" />
      </div>
      {statusData.theater && <SelectData list={listTheater} />}
      <div className="select-data">
        2. Chọn phim
        <ChevronDownIcon className="w-4 ml-2" />
      </div>
      <div className="select-data">
        3. Chọn ngày
        <ChevronDownIcon className="w-4 ml-2" />
      </div>
      <div className="select-data">
        4. Chọn suất
        <ChevronDownIcon className="w-4 ml-2" />
      </div>
      <Button
        className="button md:button bg-cinestar-gold w-[125px] h-[40px] mr-3 group hover:text-white"
        text="Đặt ngay"
        colorChange="bg-cinestar-orange"
      />
    </div>
  );
};

export default SearchBox;
