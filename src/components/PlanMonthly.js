import React from "react";
import { useGlobalContext } from "../context/PlanContext";
import { monthly } from "../Data/monthly";
import Card from "../UI/Card";

const PlanMonthly = () => {
  const { onChoosePlanNameHandler, selectPlanName } = useGlobalContext();
  return (
    <>
      {monthly.map((mont) => {
        return (
          <Card
            key={mont.id}
            className={
              selectPlanName === mont ? "d-grid-2 card-selected" : "d-grid-2 "
            }
            onClick={() => onChoosePlanNameHandler(mont)}
          >
            <figure className="icon">{mont.svg}</figure>
            <div className="details">
              <h3>{mont.name}</h3>
              <p className="price">${mont.price}/mo</p>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default PlanMonthly;
