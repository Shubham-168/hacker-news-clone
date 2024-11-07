import React, { useEffect, useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import Pagination from './Pagination';
import { getNews } from '../services/api';

const Dashboard = ({ user, query, setQuery, page, setPage }) => {
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0); // Keep track of total pages

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNews(query, page);
      setResults(data.hits || []);
      setTotalPages(data.nbPages || 0); // Set total pages based on API response
      
    };

    fetchData();
  }, [query, page]);

  return (
    <div className="dashboard-container">
      <Header user={user} />
      <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
      <ResultsList results={results} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Dashboard;
