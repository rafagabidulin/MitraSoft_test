import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({ postsPerPage, numberOfPosts, handlePageChange, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(numberOfPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className='justify-content-center'>
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          active={currentPage === number}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
