import React, { useState } from "react";
import { useGlobalContext } from "../context/PlanContext";
import AddonTemplate from "./AddonTemplate";

const Addons = () => {
  const { selectPlan, addonMonthlyData, addonYearlyData } = useGlobalContext();

  return (
    <div className="addons">
      <h1>Pick add-ons</h1>
      <p className="pb-2">Addons help enhnace your gaming experience</p>

      {selectPlan === "monthly" &&
        addonMonthlyData.map((add, i) => {
          return <AddonTemplate add={add} key={i} />;
        })}
      {selectPlan === "yearly" &&
        addonYearlyData.map((add, i) => {
          return <AddonTemplate add={add} key={i} />;
        })}
    </div>
  );
};

export default Addons;
