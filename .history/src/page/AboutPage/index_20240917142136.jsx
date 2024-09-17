// src/IntroductionPage.js
import React from 'react';

const IntroductionPage = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Chào mừng đến với Trang Giới Thiệu</h1>
        <p className="text-lg text-gray-600 mb-8">
          Đây là nơi bạn có thể viết về công ty, tổ chức hoặc sản phẩm của mình. 
          Cung cấp một cái nhìn tổng quan về những gì bạn làm và lý do bạn khác biệt.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tầm nhìn và sứ mệnh</h2>
          <p className="text-md text-gray-600">
            Chúng tôi hướng đến việc cung cấp các giải pháp tốt nhất cho khách hàng.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Giá trị cốt lõi</h2>
          <ul className="list-disc list-inside text-left mx-auto">
            <li className="text-md text-gray-600">Chất lượng</li>
            <li className="text-md text-gray-600">Đổi mới</li>
            <li className="text-md text-gray-600">Khách hàng là trung tâm</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default IntroductionPage;
