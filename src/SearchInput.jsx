import React, { useState } from 'react';
import axios from 'axios';

function SearchInput() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/search', { keyword });
      setResults(response.data);
    } catch (error) {
      console.error('Search failed', error);
    }
  };

  return (
    <div>
      <h2>Search Problem Statements</h2>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword..."
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((item, idx) => (
          <li key={idx}>{item.statement}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchInput;
