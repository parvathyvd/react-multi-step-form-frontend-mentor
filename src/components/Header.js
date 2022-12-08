import React from "react";
import { useGlobalContext } from "../context/PlanContext";
import NavButton from "../UI/NavButton";

const Header = () => {
  const { onClickHandler, selected } = useGlobalContext();
  return (
    <header className="header">
      <div className="navigation">
        <NavButton onClick={onClickHandler} active={selected === 1}>
          1
        </NavButton>
        <div className="nav-info d-mobile-hide">
          <span className="light">STEP 1</span>
          <span>YOUR INFO</span>
        </div>
      </div>
      <div className="navigation">
        <NavButton onClick={onClickHandler} active={selected === 2}>
          2
        </NavButton>
        <div className="nav-info d-mobile-hide">
          <span className="light">STEP 2</span>
          <span>SELECT PLAN</span>
        </div>
      </div>
      <div className="navigation">
        <NavButton onClick={onClickHandler} active={selected === 3}>
          3
        </NavButton>
        <div className="nav-info d-mobile-hide">
          <span className="light">STEP 3</span>
          <span>ADD-ONS</span>
        </div>
      </div>
      <div className="navigation">
        <NavButton
          onClick={onClickHandler}
          active={selected === 4 || selected === 5}
        >
          4
        </NavButton>
        <div className="nav-info d-mobile-hide">
          <span className="light">STEP 4</span>
          <span>SUMMARY</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
