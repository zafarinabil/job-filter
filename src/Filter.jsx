// Filter.jsx
import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ roles, levels, languages, tools, onFilterChange, onClearFilters }) => {
	const [selectedFilters, setSelectedFilters] = useState([]);

	const handleFilterClick = (filterType, value) => {
		const updatedFilters = [...selectedFilters];
		const filterIdentifier = `${filterType}-${value}`;

		const isSelected = updatedFilters.includes(filterIdentifier);

		if (isSelected) {
			const index = updatedFilters.indexOf(filterIdentifier);
			updatedFilters.splice(index, 1);
		} else {
			updatedFilters.push(filterIdentifier);
		}

		setSelectedFilters(updatedFilters);
		onFilterChange(updatedFilters);
	};

	const handleClearFilters = () => {
		setSelectedFilters([]);
		onFilterChange([]);
		onClearFilters();
	};

	return (
		<>
			<div className="filter-container">
				<div className="chips">
					{roles.map((role) => (
						<div key={role} className="chip" onClick={() => handleFilterClick('role', role)}>
							{role}
						</div>
					))}

					{levels.map((level) => (
						<div key={level} className="chip" onClick={() => handleFilterClick('level', level)}>
							{level}
						</div>
					))}

					{languages.map((language) => (
						<div key={language} className="chip" onClick={() => handleFilterClick('language', language)}>
							{language}
						</div>
					))}

					{tools.map((tool) => (
						<div key={tool} className="chip" onClick={() => handleFilterClick('tool', tool)}>
							{tool}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Filter;
