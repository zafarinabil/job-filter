import React from 'react';
import './Card.css';
import data from './data/data.json'; // Import the data

const Card = ({ filters }) => {
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
					<img src={job.logo} alt={job.company} />

					<div className="card-mini">
						<div className="top-heading">
							<p className="company">{job.company}</p>
							{job.new && <p className="p-heading">New!</p>}
							{job.featured && <p className="p-heading">Featured</p>}
						</div>

						<h2>{job.position}</h2>

						<div className="down-heading">
							<p className="p-under-heading">{job.postedAt}</p>
							<p className="p-under-heading">{job.contract}</p>
							<p className="p-under-heading">{job.location}</p>
						</div>
					</div>

					<div className="right-heading">
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
