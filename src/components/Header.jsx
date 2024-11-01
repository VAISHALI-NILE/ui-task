import React from "react";
import "./Header.css";

function Header({ setFilter, filter }) {
  const handleFilter = (filterValue) => {
    setFilter(filterValue);
  };

  const getButtonStyle = (buttonFilter) => ({
    backgroundColor: buttonFilter === filter ? "#d1c4e9" : "transparent",
  });

  return (
    <div className="header">
      <h1>Employees</h1>
      <div className="filter-group">
        <button
          style={getButtonStyle("all")}
          className="filter"
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          style={getButtonStyle("active")}
          className="filter"
          onClick={() => handleFilter("active")}
        >
          Active
        </button>
        <button
          style={getButtonStyle("inactive")}
          className="filter"
          onClick={() => handleFilter("inactive")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}

export default Header;
