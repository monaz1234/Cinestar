import React from "react";

const Button = ({ icon, text, className }) => {
  return (
    <div className={className}>
      {icon && <img src={icon} alt="" />}
      <button>{text}</button>
    </div>
  );
};

export default Button;
