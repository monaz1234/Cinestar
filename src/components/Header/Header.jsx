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
import ComboBox from "../Cbbox/ComboBox";

const Header = () => {
  const isSmallScreen = useWindowSize();

  return (
    <div className="bg-cinestar-black flex-wrap py-4 px-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between basis-4/5 gap-3">
          <img src={CinestarLogo} alt="Logo" width={130} height={45} />
          <div className="flex">
            <Button
              icon={TicketIcon}
              className="button md:button bg-cinestar-gold w-[125px] h-[40px] mr-3 hidden"
              text="Đặt vé ngay"
            />
            <Button
              icon={Popcorn}
              className="button md:button bg-cinestar-purple w-[125px] h-[40px] text-white hidden"
              text="Đặt bắp nước"
            />
          </div>
          {/* Search bar */}
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              className="hidden md:block rounded-2xl h-9 pl-3 text-sm w-[280px]"
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
          />
          {/* Combobox */}
        </div>
        {/* Login */}
        <div className="">
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
