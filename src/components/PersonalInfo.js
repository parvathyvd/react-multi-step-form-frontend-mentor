import React, { useState } from "react";
import { useGlobalContext } from "../context/PlanContext";

const PersonalInfo = () => {
  const { name, setName, email, setEmail, phone, setPhone, error } =
    useGlobalContext();
  return (
    <div className="personal-info">
      <h1>Personal info</h1>
      <p className="pb-2">
        Please provide your name, email address, and phone number.
      </p>
      <form className="form-personal">
        <div className="label-error">
          <label htmlFor="name">Name</label>
          {error && name.trim() === "" && (
            <span className="error">This field is required</span>
          )}
        </div>

        <input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={error && name.trim().length <= 3 && "red-border"}
        />
        <div className="label-error">
          <label htmlFor="email">Email Address</label>
          {error && email.trim() === "" && (
            <span className="error">This field is required</span>
          )}
        </div>
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error && email.trim().length <= 5 && "red-border"}
        />
        <div className="label-error">
          <label htmlFor="phone">Phone Number</label>
          {error && phone.trim() === "" && (
            <span className="error">This field is required</span>
          )}
        </div>
        <input
          type="number"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={error && phone.trim().length <= 6 && "red-border"}
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
