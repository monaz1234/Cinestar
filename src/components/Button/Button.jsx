import React from "react";

const Button = ({ icon, text, className, onClick, width, height, colorChange }) => {
  return (
    <div className={className} onClick={onClick}>
      <div className={`absolute inset-0 ${colorChange} mr-[-1px] transform translate-x-full transition-transform duration-500 group-hover:translate-x-0`}></div>
      {icon && <img src={icon} width={width} height={height} className="sm:mr-2 relative z-10" alt="" />}
      <div className="relative z-10">{text}</div>
    </div>
  );
};

export default Button;
