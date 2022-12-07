import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PlanContextProvider } from "./context/PlanContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PlanContextProvider>
      <App />
    </PlanContextProvider>
  </React.StrictMode>
);
