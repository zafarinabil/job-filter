// Header.jsx
import React from 'react';
import './Header.css';

const Header = ({ selectedFilters, onClearFilters }) => {
	const getFilterValue = (filter) => {
		return filter.replace(/^[^-]+-/, '');
	};

	const handleClearFilters = (event) => {
		event.preventDefault();
		onClearFilters();
	};

	return (
		<>
			<div className="header-container">
				<div className="filter-result">
					{selectedFilters.map((filter) => (
						<div key={filter} className="selected-filter">
							{getFilterValue(filter)}
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

export default Header;
