import React from "react";
import "./PackageTabs.css";

const PackageTabs = () => {
  return (
    <div className="package-tabs">
      <button className="active">Package With Flights</button>
      <button className="in-active">Package Without Flights</button>
    </div>
  );
};

export default PackageTabs;
