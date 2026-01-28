import React from "react";
import "./FareSummary.css";

const FareSummary = () => {
  return (
    <div className="fare-summary-card">
      <div>
        <p className="fare-title">Departure Flight</p>
        <p className="fare">₹ 12,500</p>
      </div>

      <div>
        <p className="fare-title">Return Flight</p>
        <p className="fare">₹ 10,800</p>
      </div>

      <div className="total-box">
        <p className="fare-title">Total Fare</p>
        <p className="total-amount">₹ 23,300</p>
      </div>
    </div>
  );
};

export default FareSummary;
