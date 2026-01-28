import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="brand">TravelPro</h2>

      <div className="menu-section">
        <p className="section-title">MAIN</p>
        <ul>
          <li className="active">Dashboard</li>
          <li>Leads</li>
          <li>Itineraries</li>
          <li>Reports</li>
        </ul>
      </div>

      <div className="menu-section">
        <p className="section-title">USER CONTROL</p>
        <ul>
          <li>Users</li>
          <li>Roles</li>
          <li>Permissions</li>
        </ul>
      </div>

      <div className="menu-section">
        <p className="section-title">MISC</p>
        <ul>
          <li>Settings</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
