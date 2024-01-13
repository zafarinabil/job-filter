// Card.jsx
import React from 'react';
import './Card.css';
import Filter from './Filter';

const Card = ({ jobs, roles, levels, languages, tools, onFilterChange, onClearFilters }) => {
	return (
		<>
			{jobs.map((job) => (
				<div key={job.id} className={`card${job.featured ? ' featured' : ''}`}>
					<div className="left-card-container">
						<img src={job.logo} alt={job.company} />

						<div className="text-card-container">
							<div className="text-card-header">
								<p className="company">{job.company}</p>
								<div className="roundedchips-container">
									{job.new && <p className="roundedchip">NEW!</p>}
									{job.featured && (
										<p className={`roundedchip${job.featured ? ' featured' : ''}`}>FEATURED</p>
									)}
								</div>
							</div>

							<h2>{job.position}</h2>

							<div className="text-card-footer">
								<p className="footer-text">{`${job.postedAt} \u00A0 • \u00A0 ${job.contract} \u00A0 • \u00A0 ${job.location}`}</p>
							</div>
						</div>
					</div>
					<div className="divider"></div>
					<div className="right-card-container">
						<Filter
							roles={[job.role]}
							levels={[job.level]}
							languages={job.languages}
							tools={job.tools}
							onFilterChange={onFilterChange}
							onClearFilters={onClearFilters}
						/>
					</div>
				</div>
			))}
		</>
	);
};

export default Card;
