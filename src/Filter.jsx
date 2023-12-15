// Filter.js
import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ roles, levels, languages, tools, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterClick = (filterType, value) => {
    const updatedFilters = [...selectedFilters];
    const filterIdentifier = `${filterType}-${value}`;

    // Check if the filter is already selected
    const isSelected = updatedFilters.includes(filterIdentifier);

    if (isSelected) {
      // If selected, remove the filter
      const index = updatedFilters.indexOf(filterIdentifier);
      updatedFilters.splice(index, 1);
    } else {
      // If not selected, add the filter
      updatedFilters.push(filterIdentifier);
    }

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
    onFilterChange([]); // Notify the parent component about the cleared filters
  };

  return (
    <>
      <div className="filter-container">
        <div className="chips">
          {/* Roles */}
          {roles.map((role) => (
            <div
              key={role}
              className={`chip ${selectedFilters.includes(`role-${role}`) ? 'selected' : ''}`}
              onClick={() => handleFilterClick('role', role)}
            >
              {role}
            </div>
          ))}

          {/* Levels */}
          {levels.map((level) => (
            <div
              key={level}
              className={`chip ${selectedFilters.includes(`level-${level}`) ? 'selected' : ''}`}
              onClick={() => handleFilterClick('level', level)}
            >
              {level}
            </div>
          ))}

          {/* Languages */}
          {languages.map((language) => (
            <div
              key={language}
              className={`chip ${selectedFilters.includes(`language-${language}`) ? 'selected' : ''}`}
              onClick={() => handleFilterClick('language', language)}
            >
              {language}
            </div>
          ))}

          {/* Tools */}
          {tools.map((tool) => (
            <div
              key={tool}
              className={`chip ${selectedFilters.includes(`tool-${tool}`) ? 'selected' : ''}`}
              onClick={() => handleFilterClick('tool', tool)}
            >
              {tool}
            </div>
          ))}
        </div>
        {/* <a className="clear" href="#" onClick={handleClearFilters}>
          Clear
        </a> */}
      </div>
    </>
  );
}

export default Filter;
