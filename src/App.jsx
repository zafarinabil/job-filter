// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';
import data from './data/data.json';

function App() {
	const [filters, setFilters] = useState([]);
	const [roles, setRoles] = useState([]);
	const [levels, setLevels] = useState([]);
	const [languages, setLanguages] = useState([]);
	const [tools, setTools] = useState([]);
	const [filteredJobs, setFilteredJobs] = useState(data);
	const [headerHeight, setHeaderHeight] = useState(0);

	const handleFilterChange = (selectedFilters) => {
		setFilters(selectedFilters);
	};

	const handleClearFilters = () => {
		setFilters([]);
	};

	const handleClearSingleFilter = (filterToRemove) => {
		const updatedFilters = filters.filter((filter) => filter !== filterToRemove);
		setFilters(updatedFilters);
	};

	useEffect(() => {
		const uniqueRoles = Array.from(new Set(data.map((job) => job.role)));
		const uniqueLevels = Array.from(new Set(data.map((job) => job.level)));
		const uniqueLanguages = Array.from(new Set(data.map((job) => job.languages).flat()));
		const uniqueTools = Array.from(new Set(data.map((job) => job.tools).flat()));

		setRoles(uniqueRoles);
		setLevels(uniqueLevels);
		setLanguages(uniqueLanguages);
		setTools(uniqueTools);

		const newFilteredJobs = data.filter((job) => {
			return filters.every((filter) => {
				if (filter.startsWith('role-')) {
					return job.role === filter.replace('role-', '');
				} else if (filter.startsWith('level-')) {
					return job.level === filter.replace('level-', '');
				} else if (filter.startsWith('language-')) {
					return job.languages.includes(filter.replace('language-', ''));
				} else if (filter.startsWith('tool-')) {
					return job.tools.includes(filter.replace('tool-', ''));
				}
				return false;
			});
		});

		setFilteredJobs(newFilteredJobs);
	}, [data, filters]);

	return (
		<>
			<div
				className="container"
				style={headerHeight > 60 ? { marginTop: `calc(190px + ${headerHeight}px)` } : { marginTop: '210px' }}
			>
				<div className="topheader"></div>
				<Header
					selectedFilters={filters}
					onClearFilters={handleClearFilters}
					onClearSingleFilter={handleClearSingleFilter}
					onHeaderHeightChange={(height) => setHeaderHeight(height)}
				/>
				<Card
					jobs={filteredJobs}
					roles={roles}
					levels={levels}
					languages={languages}
					tools={tools}
					onFilterChange={handleFilterChange}
					onClearFilters={handleClearFilters}
				/>
			</div>
		</>
	);
}

export default App;
