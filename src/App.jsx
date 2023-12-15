// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';
import Filter from './Filter';
import data from './data/data.json';

function App() {
  const [filters, setFilters] = useState([]);
  const [roles, setRoles] = useState([]);
  const [levels, setLevels] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [tools, setTools] = useState([]);

  const handleFilterChange = (selectedFilters) => {
    setFilters(selectedFilters);
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
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <Filter
          roles={roles}
          levels={levels}
          languages={languages}
          tools={tools}
          onFilterChange={handleFilterChange}
        />
        <Card filters={filters} />
      </div>
    </>
  );
}

export default App;
