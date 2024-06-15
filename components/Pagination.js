import React from 'react';
import PropTypes from 'prop-types';


const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage, onPageClick }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxDisplayedPages = 2; // You can adjust this value based on your preference

  const renderPageNumbers = () => {
    const sidePageLimit = Math.floor(maxDisplayedPages / 2);
    const startPage =
      currentPage <= sidePageLimit
        ? 1
        : currentPage >= totalPages - sidePageLimit
        ? totalPages - maxDisplayedPages + 1
        : currentPage - sidePageLimit;

    return pageNumbers
      .slice(startPage - 1, startPage + maxDisplayedPages - 1)
      .map((number) => (
        <span
          key={number}
          onClick={() => onPageClick(number)}
          className={`pagination-number ${currentPage === number ? 'active' : ''}`}
        >
          {number}
        </span>
      ));
  };

  return (
    <div className=" pagination-container d-flex justify-content-between">
      
      <div className=''><p className='text-gray'>Page {" "}{currentPage} of{" "}{totalPages}</p></div> 
      
      
      <div className='pagination-container '>
       {currentPage != 1 && ( // Check if the current page is greater than 1
        <span
          className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={onPrevPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </span>
      )}
      <div className="pagination-pages">
        {renderPageNumbers()}
        {currentPage + Math.floor(maxDisplayedPages / 2) < totalPages && (
          <span className="pagination-ellipsis">...</span>
        )}
        {currentPage + Math.floor(maxDisplayedPages / 2) < totalPages && (
          <span onClick={() => onPageClick(totalPages)} className="pagination-number">
            {totalPages}
          </span>
        )}
      </div>
      {currentPage != totalPages && (
      <span
        className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        {">"}
      </span>
      )}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default Pagination;
