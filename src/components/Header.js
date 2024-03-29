// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center md:p-28 p-10 bg-transparent z-10">
      <div className="flex items-center">
        <h1 className="text-white md:text-lg text-sm md:font-bold"><span className='text-gray-300'>Navneet</span> Yadav</h1>
      </div>
      <nav className='text-white'>
        <ul className="flex">
          <li className="md:mx-10 mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="md:mx-10 mx-2">
            <Link to="/work">Work</Link>
          </li>
          <li className="md:mx-10 mx-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
