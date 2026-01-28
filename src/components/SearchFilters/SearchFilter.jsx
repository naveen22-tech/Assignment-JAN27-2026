import React from "react";
import "./SearchFilter.css";

const SearchFilters = () => {
  return (
    <div className="search-filter-card">
      <div className="filter-row">

        <div className="filter-item">
          <label>Destination City</label>
          <input type="text" placeholder="e.g. Dubai" />
        </div>

        <div className="filter-item">
          <label>Start Date</label>
          <input type="date" />
        </div>

        <div className="filter-item">
          <label>Passengers</label>
          <select>
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>Family (4)</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Hotel Standard</label>
          <select>
            <option>3 ★</option>
            <option>4 ★</option>
            <option>5 ★</option>
          </select>
        </div>

        <div className="filter-item checkbox-group">
          <label>Add-ons</label>
          <div className="checkboxes">
            <label><input type="checkbox" /> Lunch</label>
            <label><input type="checkbox" /> Dinner</label>
          </div>
        </div>

        <div className="search-btn">
          <button>Search</button>
        </div>

      </div>
    </div>
  );
};

export default SearchFilters;
