import React, { useEffect, useState } from 'react';
import { FaInfo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { auth } from '../db/firebaseConfig';
import { signOut,onAuthStateChanged } from 'firebase/auth';
const Navbar = () => {
  const navigate  = useNavigate()
  const[isLoggedIn,setIsLoggedIn] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setIsLoggedIn(!user)
    } )
    return () => unsubscribe()
  },[] )

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogin = () => {
    navigate('/login')
  }

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
        <button onClick={handleLogin} className='text-black ml-8 mt-1.5 bg-transparent hover:bg-black hover:text-white transition-colors duration-200 px-4 py-2 rounded-md  ' >
          Login
        </button>
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