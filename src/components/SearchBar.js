import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSearchHistory from '../hooks/useSearchHistory';

const SearchBar = ({ query, setQuery, setPage }) => {
  const [input, setInput] = useState(query || '');
  const [sortBy, setSortBy] = useState('relevance');
  const navigate = useNavigate();
  const addSearchHistory = useSearchHistory();

  const handleSearch = () => {
    setQuery(input);
    setPage(0); // Reset to the first page on new search
    addSearchHistory(input);
    navigate(`/dashboard?query=${input}&sortBy=${sortBy}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search news..."
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="relevance">Relevance</option>
        <option value="popularity">Popularity</option>
        <option value="date">Date</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
