import React from "react";
import { useGlobalContext } from "../context/PlanContext";

const Footer = () => {
  const { selected, setSelected, checkedItems } = useGlobalContext();

  const onNextClickHandler = () => {
    if (checkedItems.length === 0) {
      return;
    }
    if (selected < 4) {
      setSelected((prev) => prev + 1);
    }
  };
  const goBackHandler = () => {
    if (selected <= 1) {
      setSelected(1);
    } else {
      setSelected((prev) => prev - 1);
    }
  };
  const onConfirmHandler = () => {
    setSelected(5);
  };
  return (
    <footer className="footer">
      <div className="foot-buttons">
        {selected !== 1 && selected !== 5 && (
          <button className="btn go-back" onClick={goBackHandler}>
            Go Back
          </button>
        )}
        {selected !== 4 && selected !== 5 && (
          <button className="btn btn-next" onClick={onNextClickHandler}>
            Next Step
          </button>
        )}
        {selected === 4 && selected !== 5 && (
          <button className="btn btn-confirm" onClick={onConfirmHandler}>
            Confirm
          </button>
        )}
      </div>

      <div className="copyright">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/parvathyvd"
          rel="noreferrer"
          target="_blank"
        >
          Parvathy Vazhoor
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
