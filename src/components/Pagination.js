// src/components/Pagination.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ nonNullStudents, studentsPerPage, currentPage, paginate }) => {
  const totalPages = Math.ceil(nonNullStudents.length / studentsPerPage);

  return (
    <div className="my-4 flex w-full justify-between px-20 items-center">
      <div className="flex justify-center flex-1">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 mx-1 rounded-full bg-white text-gray-500 border border-gray-500  hover:bg-violet-500 hover:text-white"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className=" px-4 mx-1 rounded-full bg-white text-gray-500 border border-gray-500 hover:bg-violet-500 hover:text-white"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <div className="flex items-center justify-end">
        <span className="py-2 px-4 mx-1">
          <button className="px-5 mx-1 border rounded-full">{currentPage}</button>
          of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
