import React from "react";

const Button = ({ icon, text, className, onclick, width, height }) => {
  return (
    <div className={className}>
      {icon && <img src={icon} width={width} height={height} className="mr-2" alt="" />}
      <button onclick={onclick}>{text}</button>
    </div>
  );
};

export default Button;
