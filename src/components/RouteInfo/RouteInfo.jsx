import React from "react";
import "./RouteInfo.css";

const RouteInfo = () => {
  return (
    <div className="route-info-card">
      <div>
        <p className="label">From</p>
        <p className="value">Mumbai (BOM)</p>
      </div>

      <div>
        <p className="label">To</p>
        <p className="value">Dubai (DXB)</p>
      </div>

      <div>
        <p className="label">Departure</p>
        <p className="value">22 Feb 2025</p>
      </div>

      <div>
        <p className="label">Return</p>
        <p className="value">26 Feb 2025</p>
      </div>
    </div>
  );
};

export default RouteInfo;
