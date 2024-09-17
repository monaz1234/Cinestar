// src/IntroductionPage.js
import React from 'react';

const IntroductionPage = () => {
  return (
<div>
  <div>
    <h2 className="text-white text-center text-4xl mb-[5px] mt-[50px]">Trang giới thiệu</h2>
  </div>

    <div className="relative pt-40 pb-20 pr-40 pl-40">
        <div>
      <img
          src="https://api-website.cinestar.com.vn/media/wysiwyg/CMSPage/Abouts/ht-qc-br.jpg"
          alt="Image description"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center">
          <div className="text-white text-center p-4 bg-black bg-opacity-50 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">HỆ THỐNG CỤM RẠP TRÊN TOÀN QUỐC</h1>
            <p className="text-lg">Cinestar là một trong những hệ thống rạp chiếu phim được yêu thích nhất tại Việt Nam, cung cấp nhiều mô hình giải trí hấp dẫn bao gồm Các Cụm Rạp Chiếu Phim hiện đại, Nhà hát, Khu vui chơi trẻ em Kidzone, Bowling, Billiards, Games, Phòng Gym, Nhà Hàng, và Phố Bia C'Beer. Với mục tiêu trở thành điểm đến giải trí cho mọi gia đình Việt Nam, Cinestar đang được biết đến là cụm rạp ủng hộ phim Việt, góp phần phát triển điện ảnh Việt. Không chỉ chiếu các bộ phim bom tấn quốc tế, Cinestar còn đồng hành cùng các nhà làm phim Việt Nam, đưa những tác phẩm điện ảnh đặc sắc của Việt Nam đến gần hơn với khán giả. </p>
          </div>
        </div>
      </div>
        </div>
</div>

  );
};

export default IntroductionPage;
