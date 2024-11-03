
import React, { useEffect } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import Pagination from './Pagination';

const Dashboard = ({ user, query, setQuery, page, setPage }) => {
  // Set a default query to fetch initial data on load
  useEffect(() => {
    if (!query) {
      setQuery('react'); // Set an initial query here, such as "react"
    }
  }, [query, setQuery]);

  return (
    <div className="dashboard-container">
      <Header user={user} />
      <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
      <ResultsList query={query} page={page} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Dashboard;
