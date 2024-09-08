import React from "react";
import { CinestarLogo, Popcorn, TicketIcon, UserIcon } from "../../assets/index";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="bg-cinestar-black flex-wrap py-4">
      <div className="flex">
        <div className="">
          <img src={CinestarLogo} alt="Logo" width={130} height={45} />
          <div className="flex">
            <Button icon={TicketIcon} className="bg-cinestar-gold w-[125px] h-[40px] text-[14px]" text="Đặt vé ngay"/>
            <Button icon={Popcorn} className="bg-cinestar-purple w-[125px] h-[40px]" text="Đặt bắp nước"/>
          </div>
          <input type="search" name="" id="" />
        </div>
        {/* Login */}
        <div className="">
          <a className="text-white flex items-center" href="">
            <img src={UserIcon} alt="user" width={24} height={24} />
            <span className="ml-2">Đăng nhập</span>
          </a>
        </div>
      </div>

      {/* Subnav header */}

      <div></div>
    </div>
  );
};

export default Header;
