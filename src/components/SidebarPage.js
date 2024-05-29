// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faCog, faSignOut,faUserPlus, faChartColumn, faCalendarAlt, faArrowLeft, faAngleLeft, faAngleRight, faAnglesRight, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo-sp.png';
import active from '../images/active-icon.png';

const Sidebar = () => {
  return (
    <div className="w-auto h-full bg-[#6754b3] text-violet-300 flex flex-col justify-between px-5">
      <div className='mt-10'>
       <img src={logo} className='w-12 h-12' alt='logo' />
      </div>
      <div className='pb-36'>
      <ul className="mt-5 flex-grow">

          {/* <FontAwesomeIcon className='absolute mt-5 text-white' icon={faAngleRight} /> */}
          <img src={active} className='absolute w-2 h-2 mt-5 text-bold' alt='active' />

      <li className="p-4 text-white hover:text-white hover:cursor-pointer">
          <FontAwesomeIcon icon={faUserPlus} />
        </li>
        <li className="p-4 hover:text-white hover:cursor-pointer">
          <FontAwesomeIcon icon={faUserGraduate} />
        </li>
        <li className="p-4 hover:text-white hover:cursor-pointer">
          <FontAwesomeIcon icon={faChartColumn} />
        </li>
        <li className="p-4 hover:text-white hover:cursor-pointer">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </li>
        <li className="p-4 hover:text-white hover:cursor-pointer">
          <FontAwesomeIcon icon={faCog} />
        </li>
      </ul>
      </div>
      <div className='p-4 mb-10 hover:cursor-pointer hover:text-white'>
      <FontAwesomeIcon icon={faSignOut} size='lg' className=''/>
      </div>
    </div>
  );
};

export default Sidebar;
