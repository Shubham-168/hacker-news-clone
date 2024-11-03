
import React, { useEffect, useState } from 'react';
import { getNews } from '../services/api';

const ResultsList = ({ query, page }) => {
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data on initial load or when query/page changes
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getNews(query || 'react', page, sortBy); // Default to "react" if no query
        setResults(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setResults([]); // Set an empty array to prevent any rendering issues
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page, sortBy]);

  return (
    <div className="results-list">
      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        results.map((item) => (
          <a key={item.objectID} href={item.url} target="_blank" rel="noopener noreferrer">
            <h3>{item.title}</h3>
            <p>{item.points} points | {item.num_comments} comments</p>
          </a>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default ResultsList;
