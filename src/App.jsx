import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";

import HeaderTabs from "./components/HeaderTabs/HeaderTabs";

import PackageTabs from "./components/PackageTabs/PackageTabs";

import SearchFilters from "./components/SearchFilters/SearchFilter";

import RouteInfo from "./components/RouteInfo/RouteInfo";

import FareSummary from "./components/FareSummary/FareSummary";

import FlightList from "./components/FlightList/FlightList";

import "./global.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <HeaderTabs />
        <PackageTabs />
        <SearchFilters />
        <RouteInfo />
        <FareSummary />
        <FlightList />
      </div>
    </div>
  );
};

export default App;
