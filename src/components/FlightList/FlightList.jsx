import React from "react";
import FlightCard from "../FlightCard/FlightCard";
import "./FlightList.css";

const sampleFlights = [
  {
    airline: { name: "IndiGo", logo: "https://flywith.virginatlantic.com/content/dam/HelpCentre/partner-airlines/logos/indigo%20logo.png" },
    code: "6E-512",
    depart: "08:30",
    arrive: "11:00",
    duration: "2h 30m",
    price: "12,500",
  },
  {
    airline: { name: "Air India", logo: "https://logowik.com/content/uploads/images/air-india-new-20247358.logowik.com.webp" },
    code: "AI-202",
    depart: "14:00",
    arrive: "16:50",
    duration: "2h 50m",
    price: "13,100",
  },
  {
    airline: { name: "SpiceJet", logo: "https://tse4.mm.bing.net/th/id/OIP.W2gmDDCxFs_139ZPLRqGjwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" },
    code: "SG-404",
    depart: "18:20",
    arrive: "21:00",
    duration: "2h 40m",
    price: "11,800",
  },

  {
    airline: { name: "GoAir", logo: "https://logodix.com/logo/1938529.jpg" },
    code: "G8-303",
    depart: "06:15",
    arrive: "08:45",
    duration: "2h 30m",
    price: "10,500",
  },
  {
    airline: { name: "Vistara", logo: "https://tse4.mm.bing.net/th/id/OIP.1ANmmc5u5fXWN7qcZ4u-uAHaE9?rs=1&pid=ImgDetMain&o=7&rm=3" },
    code: "VI-707",
    depart: "12:30",
    arrive: "15:10",
    duration: "2h 40m",
    price: "12,200",
  }
];

const FlightList = () => {
  return (
    <div className="flight-grid">
      <div>
        <h3>Departure Flights</h3>
        {sampleFlights.map((f, index) => (
          <FlightCard key={index} {...f} />
        ))}
      </div>

      <div>
        <h3>Return Flights</h3>
        {sampleFlights.map((f, index) => (
          <FlightCard key={index} {...f} />
        ))}
      </div>
    </div>
  );
};

export default FlightList;
