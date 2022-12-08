import React from "react";
import { useGlobalContext } from "../context/PlanContext";

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <h1>Personal info</h1>
      <p className="pb-2">
        Please provide your name, email address, and phone number.
      </p>
      <form className="form-personal">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="e.g. Stephen King" required />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          required
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
