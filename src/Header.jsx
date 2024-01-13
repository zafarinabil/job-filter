// Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ selectedFilters, onClearFilters, onClearSingleFilter, onHeaderHeightChange }) => {
	const [headerHeight, setHeaderHeight] = useState(0);

	const getFilterValue = (filter) => {
		return filter.replace(/^[^-]+-/, '');
	};

	const handleClearFilters = (event) => {
		event.preventDefault();
		onClearFilters();
	};

	const handleClearSingleFilter = (filter) => {
		onClearSingleFilter(filter);
	};

	useEffect(() => {
		const header = document.getElementById('header-container');

		setHeaderHeight(header.offsetHeight);

		onHeaderHeightChange(header.offsetHeight);
	}, [selectedFilters, onHeaderHeightChange]);

	return (
		<>
			<div
				className="header-container"
				id="header-container"
				style={{ display: selectedFilters.some((filter) => getFilterValue(filter)) ? 'flex' : 'none' }}
			>
				<div className="filter-result">
					{selectedFilters.map((filter) => (
						<div className="clear-container" key={filter}>
							<div className="selected-filter">{getFilterValue(filter)}</div>
							<div className="clearfilter" onClick={() => handleClearSingleFilter(filter)}>
								X
							</div>
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
