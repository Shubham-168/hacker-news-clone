
import { useEffect } from 'react';

const useSearchHistory = () => {
  const addSearchHistory = (query) => {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history.push({ query, timestamp: new Date().toISOString() });
    localStorage.setItem('searchHistory', JSON.stringify(history));
  };

  return addSearchHistory;
};

export default useSearchHistory;
