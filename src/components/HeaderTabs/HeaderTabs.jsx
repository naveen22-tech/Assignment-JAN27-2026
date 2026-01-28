import React from "react";
import "./HeaderTabs.css";

const HeaderTabs = () => {
  return (
    <div className="header-tabs">
      <button className="active">Indian Holidays</button>
      <button className="in-active">International Holidays</button>
    </div>
  );
};

export default HeaderTabs;
