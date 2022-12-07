import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { addonMonthly, addonYearly } from "../Data/addon";
import { monthly } from "../Data/monthly";
import { yearly } from "../Data/yearly";

const PlanContext = createContext({});

export const PlanContextProvider = ({ children }) => {
  const [selected, setSelected] = useState(1);
  //select plan in the first stage monthly or yearly toggle
  const [selectPlan, setSelectPlan] = useState("monthly");
  //settign the default plan in the select plan as the arcade
  const [checkedPlan, setCheckedPlan] = useState(monthly[0]);
  //select the plan name arcade, advanced, pro in monthly or yearly
  const [selectPlanName, setSelectPlanName] = useState(monthly[0]);
  // step 3 addon monthly data
  const [addonMonthlyData, setAddonMonthlyData] = useState(addonMonthly);
  // step 3 addon yearly data
  const [addonYearlyData, setAddonYearlyData] = useState(addonYearly);
  //step 3 checkbox checked items in the array
  const [checkedItems, setCheckedItems] = useState([]);

  const onClickHandler = (e) => {
    console.log("clickes", e.target.innerText);
    setSelected(+e.target.innerText);
  };

  const onSelectPlanHandler = (e) => {
    console.log("checked on", e.target.value);
    setSelectPlan(e.target.value);
    // e.target.classList.toggle("toggle-visibility");
  };

  const onChoosePlanNameHandler = (name) => {
    console.log(name);
    setSelectPlanName(name);
  };

  const onCheckHandler = (e, add) => {
    const targetChecked = e.target.id;
    let updatedItem;

    console.log("target checked val", targetChecked);
    if (selectPlan === "monthly") {
      const item = addonMonthlyData.findIndex(
        (item) => item.id == targetChecked
      );

      console.log("item clicked on is", item, "toggle");
      let existingItem = addonMonthlyData[item];
      updatedItem = {
        ...existingItem,
        checked: !existingItem.checked,
      };
      console.log("item checked", updatedItem);
      setAddonMonthlyData(
        addonMonthlyData.map((item) =>
          item.id == e.target.id ? updatedItem : item
        )
      );
    } else {
      const item = addonYearlyData.findIndex(
        (item) => item.id == targetChecked
      );

      console.log("item clicked on is", item, "toggle");
      let existingItem = addonYearlyData[item];
      updatedItem = {
        ...existingItem,
        checked: !existingItem.checked,
      };
      console.log("item checked", updatedItem);
      setAddonYearlyData(
        addonYearlyData.map((item) =>
          item.id == e.target.id ? updatedItem : item
        )
      );
    }
  };

  useEffect(() => {
    let checkedAll;
    if (selected === "monthly") {
      checkedAll = addonMonthlyData.filter((item) => {
        return item.checked;
      });
    } else {
      checkedAll = addonYearlyData.filter((item) => {
        return item.checked;
      });
    }
    setCheckedItems([...checkedAll]);
  }, [addonMonthlyData, addonYearlyData]);

  return (
    <PlanContext.Provider
      value={{
        selected,
        setSelected,
        selectPlanName,
        setSelectPlanName,
        onClickHandler,
        selectPlan,
        onSelectPlanHandler,
        checkedPlan,
        setCheckedPlan,
        checkedItems,
        setCheckedItems,
        onChoosePlanNameHandler,
        addonMonthlyData,
        setAddonMonthlyData,
        addonYearlyData,
        setAddonYearlyData,
        monthly,
        yearly,
        onCheckHandler,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(PlanContext);
};
