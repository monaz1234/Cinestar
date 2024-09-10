import React from "react";

const Button = ({ icon, text, className, onclick, width, height, colorChange }) => {
  return (
    <div className={className}>
      <div class={`absolute inset-0 ${colorChange} mr-[-1px] transform translate-x-full transition-transform duration-500 group-hover:translate-x-0`}></div>
      {icon && <img src={icon} width={width} height={height} className="mr-2 relative z-10" alt="" />}
      <button onclick={onclick} className="relative z-10">{text}</button>
    </div>
  );
};

export default Button;
