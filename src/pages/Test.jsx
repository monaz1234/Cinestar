import React from "react";
import { Link, Outlet } from "react-router-dom";

const Test = () => {
  return (
    <div>
      <Link to="Test2">
        <div className="flex items-center justify-center w-full h-[300px] bg-cinestar-gold">
          <div>AAA</div>
        </div>
      </Link>
      <Outlet />
    </div>
  );
};

export default Test;
