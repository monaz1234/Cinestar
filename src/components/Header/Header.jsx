import React, { useContext, useState } from "react";
import {
  CinestarLogo,
  Popcorn,
  SearchIcon,
  TicketIcon,
  UserIcon,
} from "../../assets/index";
import Button from "../Button/Button";
import useWindowSize from "../../hooks/useWindowSize";
import ComboBox from "../Cbbox/ComboBox";
import GlobalContext from "../../context/GlobalContext";
import SearchModal from "../Modal/SearchModal";
import { listTheater, subnav } from "../../constants/header";

const Header = () => {
  const isSmallScreen = useWindowSize();
  const { isShowModal, setIsShowModal } = useContext(GlobalContext);

  const showModal = () => {
    setIsShowModal((prev) => !prev);
  };

  return (
    <div className="bg-cinestar-black flex-wrap py-4 xs:px-2 md:px-5 lg:px-20 fixed w-full left-0">
      <div className="flex items-center justify-between border-b border-white border-opacity-20 pb-4">
        <div className="flex items-center justify-between basis-4/5 gap-3">
          <img src={CinestarLogo} alt="Logo" width={130} height={45} />
          <div className="flex">
            <Button
              icon={TicketIcon}
              className="button md:button bg-cinestar-gold w-[125px] h-[40px] mr-3 hidden group hover:text-white"
              text="Đặt vé ngay"
              colorChange="bg-cinestar-blue"
            />
            <Button
              icon={Popcorn}
              className="button md:button bg-cinestar-purple w-[125px] h-[40px] text-white hidden group"
              text="Đặt bắp nước"
              colorChange="bg-cinestar-orange"
            />
          </div>
          {/* Search bar */}
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              className="hidden md:block rounded-2xl h-10 pl-3 text-sm w-[280px]"
              placeholder="Tìm kiếm"
            />
            <img
              src={SearchIcon}
              width={24}
              height={24}
              className="relative -left-7 font-semibold z-10"
              alt="search-icon"
            />
          </div>
          {/* Button responsive */}
          <ComboBox />
          <Button
            icon={SearchIcon}
            width="24"
            height="24"
            className="bg-white min-w-[80px] w-[125px] h-[40px] button md:hidden"
            text={isSmallScreen ? "" : "Tìm kiếm"}
            onClick={showModal}
          />
        </div>
        {/* Login */}
        <div className="">
          <a className="text-white flex items-center" href="">
            <img src={UserIcon} alt="user" width={24} height={24} />
            <span className="ml-2 hidden lg:block hover:text-cinestar-gold hover:transition-all">
              Đăng nhập
            </span>
          </a>
        </div>
      </div>

      {/* Subnav header */}
      <div className="flex justify-between w-full mt-4">
        {subnav.map((item, index) => (
          <div
            className={`flex font-bold text-white cursor-pointer group hover:text-cinestar-gold hover:transition-all hover:duration-200 ${item.icon ? "after:h-10 after:w-5 after:relative after:left-4 bg-red-700" : ""} `}
            key={index}
          >
            {item.icon && (
              <item.icon className="w-5 h-5 text-white group-hover:text-cinestar-gold" />
            )}
            <span>{item.name}</span>

            {/* Hiển thị listTheater khi hover */}
            {item.icon && (
              <div className="hidden group-hover:flex text-white absolute z-10 bg-cinestar-black flex-wrap mt-10 border border-white border-opacity-50 rounded-md w-[90%]">
                {listTheater.map((theater, theaterIndex) => (
                  <div key={theaterIndex} className="basis-1/3 px-1 py-2 hover:text-cinestar-gold">
                    {theater}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Search modal */}
      <SearchModal />
      <div></div>
    </div>
  );
};

export default Header;
