import './Card.css';

const Card = () => {
	return (
		<>
			<div className="card">
				<img src="./images/photosnap.svg" alt="photosnap" />

				<div className="card-mini">
					<div className="top-heading">
						<p className="company">Photosnap</p>
						<p className="p-heading">New!</p>
						<p className="p-heading">Featured</p>
					</div>

					<h2> Senior Frontend Developer</h2>

					<div className="down-heading">
						<p className="p-under-heading">1d ago</p>
						<p className="p-under-heading">Full Time</p>
						<p className="p-under-heading">USA only</p>
					</div>
				</div>

				<div className="right-heading">
					<p>Frontend</p>
					<p>Senior</p>
					<p>HTML</p>
					<p>CSS</p>
					<p>JavaScript</p>
				</div>
			</div>
		</>
	);
};

export default Card;
