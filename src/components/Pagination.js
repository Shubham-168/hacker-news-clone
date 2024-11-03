

import React from 'react';

const Pagination = ({ page, setPage }) => (
  <div className="pagination">
    <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))}>Previous</button>
    <span>Page {page + 1}</span>
    <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
  </div>
);

export default Pagination;
