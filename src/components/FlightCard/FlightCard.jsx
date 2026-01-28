import React from "react";
import "./FlightCard.css";

const FlightCard = ({ airline, code, depart, arrive, duration, price }) => {
  return (
    <div className="flight-card">
      <div className="airline-info">
        <img src={airline.logo} alt="logo" />
        <div>
          <h4>{airline.name}</h4>
          <p>{code}</p>
        </div>
      </div>

      <div className="time-info">
        <p className="big">{depart}</p>
        <p className="duration">{duration}</p>
        <p className="big">{arrive}</p>
      </div>

      <div className="price-info">
        <p className="amount">₹ {price}</p>
        <p className="rules">Baggage 7kg | Refundable</p>
      </div>
    </div>
  );
};

export default FlightCard;
