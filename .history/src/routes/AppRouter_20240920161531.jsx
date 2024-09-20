// src/routers/AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage.jsx'; // Trang chủ
import AboutPage from '../pages/AboutPage/index'; // Trang giới thiệu


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/about" element={<HomePage />} /> 
     

    </Routes>
  );
}
