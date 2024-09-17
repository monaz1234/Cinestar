// src/IntroductionPage.js
import React from 'react';

const IntroductionPage = () => {
  return (
<div className="relative pt-40 pb-20 pr-40 pl-40">
<h2 className="text-white text-center text-4xl pb-50">
  Trang giới thiệu
</h2>
  <img
    src="https://api-website.cinestar.com.vn/media/wysiwyg/CMSPage/Abouts/ht-qc-br.jpg"
    alt="Image description"
    className="w-full h-[300px] md:h-[400px] object-cover"
  />
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <div className="text-white text-center p-4 bg-black bg-opacity-50 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Title Here</h1>
      <p className="text-lg">Your content goes here. This is an example of overlay content.</p>
    </div>
  </div>
</div>

  );
};

export default IntroductionPage;
