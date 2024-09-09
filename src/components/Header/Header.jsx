import React from "react";
import {
  CinestarLogo,
  Popcorn,
  SearchIcon,
  TicketIcon,
  UserIcon,
} from "../../assets/index";
import Button from "../Button/Button";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {

  const isSmallScreen = useWindowSize();

  return (
    <div className="bg-cinestar-black flex-wrap py-4 px-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between basis-4/5 md:basis-2/3 gap-3">
          <img src={CinestarLogo} alt="Logo" width={130} height={45} />
          <div className="flex">
            <Button
              icon={TicketIcon}
              className="bg-cinestar-gold w-[125px] h-[40px] button mr-3"
              text="Đặt vé ngay"
            />
            <Button
              icon={Popcorn}
              className="bg-cinestar-purple w-[125px] h-[40px] text-white button"
              text="Đặt bắp nước"
            />
          </div>
          {/* Search bar */}
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              className="hidden md:block rounded-2xl w-50 h-9 pl-3 text-sm w-[300px]"
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
          <Button
            icon={SearchIcon}
            width="24"
            height="24"
            className="bg-white w-[125px] h-[40px] button md:hidden"
            text={isSmallScreen ? "" :"Tìm kiếm"}
          />
        </div>
        {/* Login */}
        <div className="pr-10">
          <a className="text-white flex items-center" href="">
            <img src={UserIcon} alt="user" width={24} height={24} />
            <span className="ml-2 hidden lg:block">Đăng nhập</span>
          </a>
        </div>
      </div>

      {/* Subnav header */}

      <div></div>
    </div>
  );
};

export default Header;
