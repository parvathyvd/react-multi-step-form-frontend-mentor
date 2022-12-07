import React from "react";
import { useGlobalContext } from "../context/PlanContext";
import { yearly } from "../Data/yearly";
import Card from "../UI/Card";

const PlanYearly = () => {
  const { onChoosePlanNameHandler, selectPlanName } = useGlobalContext();

  return (
    <>
      {yearly.map((year) => {
        return (
          <Card
            key={year.id}
            className={
              selectPlanName === year ? "d-grid-2 card-selected" : "d-grid-2 "
            }
            onClick={() => onChoosePlanNameHandler(year)}
          >
            <figure className="icon">{year.svg}</figure>
            <div className="details">
              <h3>{year.name}</h3>
              <p className="price">${year.price}/yr</p>
              <span className="free">2 months free</span>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default PlanYearly;
