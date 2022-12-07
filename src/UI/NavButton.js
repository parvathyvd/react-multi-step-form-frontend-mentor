import React from "react";

const NavButton = ({ children, onClick, active }) => {
  return (
    <button className={`btn-round ${active ? "active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default NavButton;
