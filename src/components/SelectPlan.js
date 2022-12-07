import React from "react";
import Card from "../UI/Card";
import { yearly } from "../Data/yearly";
import { useGlobalContext } from "../context/PlanContext";
import PlanMonthly from "./PlanMonthly";
import PlanYearly from "./PlanYearly";

const SelectPlan = () => {
  const { onSelectPlanHandler, selectPlan } = useGlobalContext();
  return (
    <div className="select-plan">
      <h1>Select your plan</h1>
      <p className="pb-2">You have the option of monthly or yearly billing.</p>
      {selectPlan === "monthly" && <PlanMonthly />}
      {selectPlan === "yearly" && <PlanYearly />}
      <div className="plan-toggle">
        <span
          className={selectPlan === "monthly" ? "monthly" : "monthly disabled"}
        >
          Monthly
        </span>
        <span className="plan-radio" onChange={onSelectPlanHandler}>
          <input
            type="radio"
            id="monthly"
            name="plan"
            value="monthly"
            className={
              selectPlan === "monthly" ? "" : "monthly toggle-visibility"
            }
          />
          <input
            type="radio"
            id="yearly"
            name="plan"
            value="yearly"
            className={
              selectPlan === "yearly" ? "" : "yearly toggle-visibility"
            }
          />
        </span>
        <span
          className={selectPlan === "yearly" ? "yearly" : "yearly disabled"}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default SelectPlan;
