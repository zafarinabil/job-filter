import react from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';
import Filter from './Filter';

function App() {
	return (
		<>
			<div className="container">
				<Header />
				<Filter />
				<Card />
			</div>
		</>
	);
}

export default App;
