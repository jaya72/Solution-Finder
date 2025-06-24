// ✅ Create this file: FetchYourProblem.jsx

import React, { useState } from 'react';
import axios from 'axios';

function FetchProblemStatements({ onBackToHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/search?q=${searchQuery}`);
      setResults(res.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch results');
      console.error('Search error:', err);
    }
  };

  return (
    <div>
      <h1>Search Problem Statements</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter keyword to search..."
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={onBackToHome}>Back to Home</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {results.length > 0 && (
        <ul>
          {results.map((item, index) => (
            <li key={index}>{item.statement}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchProblemStatements;
