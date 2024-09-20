import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import FooterTest from "../components/FooterTest/FooterTest";

const MainLayout = () => {
  return (
    <div className="bg-cinestar-black xs:px-1 md:px-2">
      <Header />
      <Outlet />
      <FooterTest />
    </div>
  );
};

export default MainLayout;
