// src/routers/AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage'; // Trang chủ
import AboutPage from '../pages/AboutPage/index'; // Trang giới thiệu
// import NowPage from '@/components/Now/Now'; // Trang "Now" có thể điều chỉnh
// import NotFoundPage from '@/pages/NotFoundPage'; // Trang 404

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/about" element={<AboutPage />} />

    </Routes>
  );
}
