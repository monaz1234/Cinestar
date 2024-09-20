// src/routers/AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage'; // Trang chủ
import AboutPage from '../pages/AboutPage/index'; // Trang giới thiệu


export default function AppRouter() {
  return (
    <Routes>
      <Route path=" " element={<HomePage />} /> 
      <Route path="/about" element={<AboutPage />} />

    </Routes>
  );
}
