// src/components/StudentTable.js
import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../services/StudentService';
import Pagination from './Pagination';
import User from '../images/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBell, faAngleDown, faSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import RandomImage from './RandomImage';
import { FiFilter } from 'react-icons/fi'; 
import '../App.css';

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 9;

  useEffect(() => {
    const getStudents = async () => {
      const data = await fetchStudents();
      setStudents(data);
    };
    getStudents();
  }, []);

  const nonNullStudents = students.filter(student =>
    Object.values(student).every(value => value !== null && value !== undefined)
  );

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = nonNullStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(nonNullStudents.length / studentsPerPage)) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container my-5 rounded-2xl overflow-hidden border bg-white">
      <div className='border-b flex justify-between'>
        <div className='mx-7'>
          <h1 className="text-2xl font-bold my-3">Students
            <button className='mx-5 px-3 py-1 border-2 rounded-full text-violet-600 border-gray-300 '>{nonNullStudents.length}</button>
          </h1>
        </div>
       
        <div className="relative flex">
          <div className='flex'>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-violet-700 focus-within:text-violet-700 ">
              <button className="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input type="search" name="q" className="py-2 my-4 text-sm text-white bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-gray-100  focus:text-gray-900 border-b-2 border-gray-400" placeholder="Search..." autoComplete="off" />
          </div>
          <div className='mx-5 px-3 pt-5 flex'>
            <FontAwesomeIcon icon={faList} size='md' className='p-1 ml-5 border-2 rounded text-violet-700 border-violet-700' />
            <FontAwesomeIcon icon={faBell} size='xl' className='p-1 mx-8 text-violet-700' />
            <img
              src={User}
              alt={"Profile"}
              className="h-10 w-10 mr-2 rounded-full border-2 border-violet-600"
            />
            <FontAwesomeIcon className='mt-3 h-4 w-4' icon={faAngleDown} />
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
          <div className='grid mx-10 '>
            <label className='text-gray-600 my-1'>Select school</label>
            <select className='border-2 border-gray-300 rounded-lg w-40 p-1'>
              <option value='school1'>Big Ben</option>
              <option value='school2'>School 2</option>
              <option value='school3'>School 3</option>
            </select>
          </div>
          <div className='flex mx-10'>
             <div className='pt-2 px-2 mt-5 border-2 rounded-full hover:cursor-pointer' >
              <FiFilter className='text-2xl mt-1 text-violet-700'/>
             </div>
             <div className='mt-6 ml-5' >
              <button className='text-white bg-violet-700 py-1 px-5 rounded-full hover:cursor-pointer'>
                <FontAwesomeIcon icon={faPlus} className='pr-2'  />  

                Add a student</button>
             </div>
          </div>
        </div>
      <div className="mx-10 my-5 border rounded-lg">
        <table className="min-w-full bg-white text-start rounded-lg">
          <thead className='rounded-lg'>
            <tr className='border-b text-gray-500 rounded-lg '>
            <th className="py-1 px-2 text-start">
              <FontAwesomeIcon icon={faSquare} className="w-3 h-3 border-2 text-white" />
              </th>
              <th className="py-1 text-start">Photo</th>
              <th className="py-1 text-start">ID</th>
              <th className="py-1 text-start">First Name</th>
              <th className="py-1 text-start">Last Name</th>
              <th className="py-1 text-start">Email</th>
              <th className="py-1 text-start">Phone</th>
              <th className="py-1 text-start">Year Group</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map(student => (
              <tr key={student.id} className='py-2 border-b font-bold '>
                <td className="py-1 px-2">
                <FontAwesomeIcon icon={faSquare} className="w-3 h-3 border-2 text-white" />
                </td>
                <td className="py-1 text-center">
                  <RandomImage />
                </td>
                <td className="py-1">{student.id}</td>
                <td className="py-1">{student.firstName}</td>
                <td className="py-1">{student.lastName}</td>
                <td className="py-1">{student.email}</td>
                <td className="py-1">+91{student.phone}</td>
                <td className="py-1">{student.yearGroup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        nonNullStudents={nonNullStudents}
        studentsPerPage={studentsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default StudentTable;
