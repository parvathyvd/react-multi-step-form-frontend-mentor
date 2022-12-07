import React from "react";

const Card = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={`card ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Card;
