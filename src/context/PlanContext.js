import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { addonMonthly, addonYearly } from "../Data/addon";
import { monthly } from "../Data/monthly";
import { yearly } from "../Data/yearly";

const PlanContext = createContext({});

export const PlanContextProvider = ({ children }) => {
  //personal info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

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
    setSelected(+e.target.innerText);
  };

  const onSelectPlanHandler = (e) => {
    setSelectPlan(e.target.value);
  };

  const onChoosePlanNameHandler = (name) => {
    // console.log(name);
    setSelectPlanName(name);
  };

  const onCheckHandler = (e, add) => {
    const targetChecked = e.target.id;
    let updatedItem;

    if (selectPlan === "monthly") {
      const item = addonMonthlyData.findIndex(
        (item) => item.id == targetChecked
      );

      let existingItem = addonMonthlyData[item];
      updatedItem = {
        ...existingItem,
        checked: !existingItem.checked,
      };
      setAddonMonthlyData(
        addonMonthlyData.map((item) =>
          item.id == e.target.id ? updatedItem : item
        )
      );
    } else {
      const item = addonYearlyData.findIndex(
        (item) => item.id == targetChecked
      );

      let existingItem = addonYearlyData[item];
      updatedItem = {
        ...existingItem,
        checked: !existingItem.checked,
      };
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
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        error,
        setError,
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
