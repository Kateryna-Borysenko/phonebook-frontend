import React, { useState } from 'react';
import s from './Pagination.module.css';

const Pagination = ({ totalRecords, pageLimit, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalRecords / pageLimit);
  const [pageNumber, setPageNumber] = useState(currentPage);

  const handlePageChange = page => {
    if (page < 1 || page > totalPages) {
      return;
    }
    setPageNumber(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={pageNumber === i ? s.active : ''}>
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>,
      );
    }
    return pageNumbers;
  };

  return (
    <ul className={s.pagination}>
      <li>
        <button onClick={() => handlePageChange(1)} disabled={pageNumber === 1}>
          {'<<'}
        </button>
      </li>
      <li>
        <button
          onClick={() => handlePageChange(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          {'<'}
        </button>
      </li>
      {renderPageNumbers()}
      <li>
        <button
          onClick={() => handlePageChange(pageNumber + 1)}
          disabled={pageNumber === totalPages}
        >
          {'>'}
        </button>
      </li>
      <li>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={pageNumber === totalPages}
        >
          {'>>'}
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
