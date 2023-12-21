// Filter.js
import React, { useState, useEffect } from 'react';
import './Filter.css';

const Filter = ({ roles, levels, languages, tools, onFilterChange, cardInfo, onClearButtonClick }) => {
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
	//test
	const { role1, level1, languages1, tools1 } = cardInfo || {};

	const handleClearButtonClick = () => {
		onClearButtonClick();
	};

	const renderCardInfo = () => {
		if (!cardInfo) {
			return null;
		}

		return (
			<div>
				<p>Role: {role1}</p>
				<p>Level: {level1}</p>
				<p>Languages: {languages1.join(', ')}</p>
				<p>Tools: {tools1.join(', ')}</p>
				<button onClick={handleClearButtonClick}>Clear</button>
			</div>
		);
	};
	// const [showClearButton, setShowClearButton] = useState(false);
	/*const handleClearButtonClick = () => {
		setShowClearButton(false);
		onClearButtonClick(); // Notify App.jsx to clear cardInfo
	};*/
	// Update showClearButton based on the presence of cardInfo
	// useEffect(() => {
	// 	setShowClearButton(!!cardInfo);
	// }, [cardInfo]);
	// Display the clear button only when there is information
	// const clearButton = showClearButton && <button onClick={handleClearButtonClick}>Clear</button>;
	// Show the information and clear button only when there is information
	// const content = cardInfo && (
	// 	<p>
	// 		Card Info: {cardInfo} {clearButton}
	// 	</p>
	// );
	//test-end

	return (
		<>
			<div className="filter-container">
				<div style={{ color: '#000' }}>{renderCardInfo()}</div>
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
				<a className="clear" href="#" onClick={handleClearFilters}>
					Clear
				</a>
			</div>
		</>
	);
};

export default Filter;
