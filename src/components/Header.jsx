import React, { useState } from 'react';
import { FaInfo } from 'react-icons/fa';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="text-gray-200 py-4 flex justify-between items-center">
      <a href="/" className=''>
        <img
          src="/logo-o.png"
          alt="logo"
          className='max-w-full max-h-full'
          style={{ width: '250px', height: 'auto' }}
        />
      </a>
      <nav className="flex space-x-4 relative">
        <button
          className="textButton text-[var(--black-color)] view-about flex justify-center items-center space-x-1"
          aria-label="Shift-click to toggle custom theme"
          data-balloon-pos="left"
          onClick={toggleDropdown}
        >
          <FaInfo className="icon" />
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-6 w-72 p-4 bg-[var(--white-color)] text-[var(--black-color)] text-xs rounded shadow-md z-50">
            <i className="fa-solid fa-quote-left mr-2"></i>
            inspired by <a href="https://monkeytype.com/" className="text-black font-bold underline" target="_blank" rel="noopener noreferrer">monkeytype.com</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;