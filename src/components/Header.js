import React from "react";
import { useGlobalContext } from "../context/PlanContext";
import NavButton from "../UI/NavButton";

const Header = () => {
  const { onClickHandler, selected } = useGlobalContext();
  return (
    <header className="header">
      <NavButton onClick={onClickHandler} active={selected === 1}>
        1
      </NavButton>
      <NavButton onClick={onClickHandler} active={selected === 2}>
        2
      </NavButton>
      <NavButton onClick={onClickHandler} active={selected === 3}>
        3
      </NavButton>
      <NavButton onClick={onClickHandler} active={selected === 4}>
        4
      </NavButton>
    </header>
  );
};

export default Header;
