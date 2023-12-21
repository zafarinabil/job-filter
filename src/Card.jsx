import React from 'react';
import './Card.css';
import data from './data/data.json'; // Import the data

const Card = ({ filters, onCardButtonClick }) => {
	//test
	const handleClick = () => {
		// Use data from the imported JSON file
		const exampleData = data[0]; // Use the first item as an example

		const cardInfo = {
			role1: exampleData.role,
			level1: exampleData.level,
			languages1: exampleData.languages,
			tools1: exampleData.tools
		};

		onCardButtonClick(cardInfo);
	};
	//test-end
	// Check if filters is an array and not empty before applying the filter
	const filteredJobs =
		filters && filters.length > 0
			? data.filter((job) => {
					// Check if the job matches all selected filters
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
			  })
			: data;
	return (
		<>
			{filteredJobs.map((job) => (
				<div key={job.id} className={`card ${job.featured ? 'featured' : ''}`}>
					<div className="left-card-container">
						<img src={job.logo} alt={job.company} />

						<div className="text-card-container">
							<div className="text-card-header">
								<p className="company">{job.company}</p>
								{job.new && <p className="text-chip">New!</p>}
								{job.featured && <p className="text-chip">Featured</p>}
							</div>

							<h2>{job.position}</h2>

							<div className="text-card-footer">
								<p className="footer-text">{`${job.postedAt} • ${job.contract} • ${job.location}`}</p>
							</div>
						</div>
					</div>

					<div className="right-card-container">
						<button onClick={handleClick}>Click me</button>
						<div onClick={handleClick}>Click me</div>
						<p>{job.role}</p>
						<p>{job.level}</p>
						{job.languages.map((language) => (
							<p key={language}>{language}</p>
						))}
						{job.tools.map((tool) => (
							<p key={tool}>{tool}</p>
						))}
					</div>
				</div>
			))}
		</>
	);
};

export default Card;
