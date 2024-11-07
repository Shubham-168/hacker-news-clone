
import React from 'react';
import './Pagination.css';

const Pagination = ({ page, setPage, totalPages }) => {
  const maxPageNumbersToShow = 5; // Max number of page buttons to show at a time
  const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);

  // Calculate the start and end page numbers for the current range
  let startPage = Math.max(1, page + 1 - halfMaxPageNumbersToShow);
  let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  // Adjust the startPage if there are not enough pages at the end
  if (endPage - startPage + 1 < maxPageNumbersToShow) {
    startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
  }

  // Generate page numbers for the pagination
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => setPage(Math.max(0, page - 1))}
        disabled={page === 0}
        className="pagination-button"
      >
        Previous
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber - 1)}
          className={`pagination-number ${pageNumber === page + 1 ? 'active' : ''}`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
        disabled={page === totalPages - 1}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

