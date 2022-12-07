import React from "react";
import { useGlobalContext } from "../context/PlanContext";

const Footer = () => {
  const {
    selected,
    setSelected,
    selectPlan,
    addonSelectedTemplate,
    setAddonSelectedTemplate,
    checkedItems,
  } = useGlobalContext();

  const onNextClickHandler = () => {
    if (checkedItems.length === 0) {
      return;
    }
    if (selected < 4) {
      setSelected((prev) => prev + 1);
    }
  };
  return (
    <footer className="footer">
      <div className="foot-buttons">
        {selected !== 1 && <button className="btn go-back">Go Back</button>}
        <button
          className={selected !== 4 ? "btn btn-next" : "btn btn-confirm"}
          onClick={onNextClickHandler}
        >
          {selected === 4 ? "Confirm" : "Next Step"}
        </button>
      </div>

      <div className="copyright">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </footer>
  );
};

export default Footer;
