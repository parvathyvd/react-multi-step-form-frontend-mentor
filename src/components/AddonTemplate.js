import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/PlanContext";
import Card from "../UI/Card";

const AddonTemplate = ({ add }) => {
  const {
    selectPlan,
    setChecked,
    checked,
    setCheckedItems,
    checkedItems,
    onCheckHandler,
  } = useGlobalContext();

  return (
    <Card key={add.id} className="d-grid-3">
      <input
        type="checkbox"
        id={add.id}
        name={add.title}
        value={add.title}
        onChange={(e) => onCheckHandler(e, add)}
        checked={add.checked}
      />
      <div className="info">
        <h3>{add.title}</h3>
        <span>{add.desc}</span>
      </div>
      <span className="perfee">
        +${add.price}
        {selectPlan === "monthly" ? "/mo" : "/yr"}
      </span>
    </Card>
  );
};

export default AddonTemplate;
