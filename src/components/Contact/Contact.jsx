import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { FbIcon, ZaloIcon } from "../../assets";

const Contact = () => {
  return <div className="py-20">
    <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 px-4">
        <div className="grid grid-rows-3 gap-4">
            <div className="heading text-gray-100 text-center flex m-auto">Liên hệ với chúng tôi</div>
            <div className="relative">
                <img src={FbIcon} alt="" className="absolute left-0 -top-20 z-[2] lg:w-[230px] lg:h-[254px] md:w-[176px] md:h-[189px]" />
                <a className="bg-purple-blue-gradient absolute left-14 w-[65%] lg:h-[100px] xs:h-[100px] md:h-[70px] rounded-md flex items-center justify-end text-white ">
                    <span className="heading text-white pr-5 md:text-[24px]">Facebook</span>
                </a>
            </div>
            <div className="relative">
                <img src={ZaloIcon} alt="" className="absolute right-0 -top-[2rem] z-[2] lg:w-[237px] lg:h-[186px] md:w-[179px] md:h-[138px]" />
                <a className="bg-purple-blue-gradient absolute right-24 w-[65%] lg:h-[100px] xs:h-[100px] md:h-[70px] rounded-md flex items-center justify-start text-white ">
                    <span className="heading text-white pl-5 md:text-[24px]">Zalo</span>
                </a>
            </div>
        </div>
        {/* Feedback */}
        <div className="w-full flex justify-center">
            <form className="bg-cinestar-blue rounded-md text-white w-[90%] px-3">
                <div className="heading text-[24px] py-4">Thông tin liên hệ</div>
                <div className="flex items-center pb-4"><EnvelopeIcon className="text-yellow-300 size-5 mr-2"/> marketing.cinestar@gmail.com</div>
                <div className="flex items-center pb-4"><PhoneIcon className="text-yellow-300 size-5 mr-2"/>028 7300 8881</div>
                <div className="flex items-center pb-4"><MapPinIcon className="text-yellow-300 size-5 mr-2" />135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM</div>
                <div className="py-3">
                    <input type="text" className="w-full rounded-md pl-2 outline-none text-black h-[40px]" placeholder="Nhập họ và tên" />
                </div>
                <div className="py-3">
                    <input type="text" className="w-full rounded-md pl-2 outline-none text-black h-[40px]" placeholder="Nhập email"/>
                </div>
                <div className="py-3">
                    <textarea className="w-full rounded-md pl-2 outline-none text-black pt-2 min-h-[200px]" style={{ resize: 'none' }} placeholder="Nhập thông tin phản ánh"></textarea>
                </div>
            </form>
        </div>
    </div>
  </div>;
};

export default Contact;
