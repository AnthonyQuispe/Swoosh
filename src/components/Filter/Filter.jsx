import { useState } from "react";
import "./Filter.scss";

export default function Filter({ onApplyFilters, setShowFilter }) {
  const [filters, setFilters] = useState({
    sortBy: null,
    sport: null,
    experience: null,
  });

  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value, // Toggle filter
    }));
  };

  return (
    <div className="filter">
      <div className="filter-header">
        <button
          className="filter-header-buttons"
          onClick={() => setShowFilter(false)}
        >
          Close
        </button>
        <h2 className="filter-header-title">Filters</h2>
        <button
          className="filter-header-buttons"
          onClick={() =>
            setFilters({ sortBy: null, sport: null, experience: null })
          }
        >
          Reset
        </button>
      </div>

      <div className="filter-section">
        <p className="filter-section-title">Sort By</p>
        <div className="filter-section-button-container">
          {["Players", "Distance", "Time"].map((option) => (
            <button
              key={option}
              onClick={() => handleFilterChange("sortBy", option)}
              className={
                filters.sortBy === option
                  ? "filter-section-button filter-section-button--active"
                  : "filter-section-button"
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <p className="filter-section-title">Sport</p>
        <div className="filter-section-button-container">
          {["Basketball", "Soccer", "Football"].map((option) => (
            <button
              key={option}
              onClick={() => handleFilterChange("sport", option)}
              className={
                filters.sport === option
                  ? "filter-section-button filter-section-button--active"
                  : "filter-section-button"
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <p className="filter-section-title">Experience</p>
        <div className="filter-section-button-container">
          {["Beginner", "Intermediate", "Expert"].map((option) => (
            <button
              key={option}
              onClick={() => handleFilterChange("experience", option)}
              className={
                filters.experience === option
                  ? "filter-section-button filter-section-button--active"
                  : "filter-section-button"
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button className="filter-submit" onClick={() => onApplyFilters(filters)}>
        Apply
      </button>
    </div>
  );
}
