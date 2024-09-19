import React from "react";
import { Km2, Km3 } from "../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./promotion.css"

const Promotion = () => {
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true, 
    autoplay: true,
    autoplaySpeed: 3000,
}
  return (
    <div className="flex flex-col items-center w-full">
        <div className="heading text-gray-100 pb-4">Khuyến mãi</div>
        <div className="xs:w-[85%] md:w-[70%] lg:w-[60%]">
            <Slider {...settings}>
                <img src={Km2} alt="" className="xs:h-[280px] md:h-[300px] lg:h-[420px]"/>
                <img src={Km3} alt="" className="xs:h-[280px] md:h-[300px] lg:h-[420px]"/>
            </Slider>
        </div>
    </div>
  );
};

export default Promotion;
