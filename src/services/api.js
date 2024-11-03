

import axios from 'axios';

export const getNews = async (query, page, sortBy) => {
  try {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search`, {
      params: {
        query: query || 'react', // Set default query to "react" to ensure results
        page: page || 0,
        tags: sortBy === 'popularity' ? 'story' : '',
        hitsPerPage: 10,
      },
    });
    console.log("API Response:", response.data.hits); // Log the API response
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching news:", error);
    return []; // Return an empty array on error
  }
};
