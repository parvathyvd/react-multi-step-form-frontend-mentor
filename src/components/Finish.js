import React from "react";
import { useGlobalContext } from "../context/PlanContext";

const Finish = () => {
  const { selectPlanName, selectPlan, checkedItems } = useGlobalContext();
  const checkedPrices = checkedItems.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  const getTotal = () => {
    return selectPlanName.price + parseInt(checkedPrices);
  };
  return (
    <div className="finish">
      <h1>Finishing up</h1>
      <p className="pb-2">
        Double check everything looks OK beforer confirming.
      </p>
      <article className="final">
        <div className="plan-detail">
          <div className="plan-detail-item">
            <h3>
              {selectPlanName.name}({selectPlan})
            </h3>
            <span className="change">Change</span>
          </div>
          <span className="price">
            ${selectPlanName.price} {selectPlan === "monthly" ? "/mo" : "/yr"}
          </span>
        </div>
        <div className="checkedItems">
          {checkedItems.map((item) => {
            console.log(item);
            return (
              <div className="checkItem" key={item.id}>
                <p>{item.desc}</p>
                <span className="price">
                  +${item.price}
                  {selectPlan === "monthly" ? "/mo" : "/yr"}
                </span>
              </div>
            );
          })}
        </div>
      </article>
      <div className="total-price">
        <p>Total({selectPlan === "monthly" ? "per month" : "per year"})</p>
        <span>
          +${getTotal()}
          {selectPlan === "monthly" ? "mo" : "yr"}
        </span>
      </div>
    </div>
  );
};

export default Finish;
