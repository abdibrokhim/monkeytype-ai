import React from 'react';
import { Link } from 'react-router-dom';
import { FaKeyboard, FaCrown, FaInfo, FaCog, FaUser, FaBell, FaSignInAlt, FaCircleNotch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="text-gray-200 py-4 flex justify-between items-center">
      <a className=''>
        <img
          src="./img/logo-o.png"
          alt="logo"
          className='max-w-full max-h-full'
          style={{ width: '250px', height: 'auto' }}
        />
      </a>
      <nav className="flex space-x-4">
        {/* <button
          className="textButton leaderboards view-leaderboards flex items-center space-x-1"
          title="leaderboard"
        >
          <FaCrown className="icon" />
        </button> */}

        <button className="textButton text-black view-about flex items-center space-x-1" aria-label="Shift-click to toggle custom theme" data-balloon-pos="left">
          <FaInfo className="icon" />
        </button>

        {/* <Link
          to="/settings"
          className="textButton view-settings flex items-center space-x-1"
          title="settings"
        >
          <FaCog className="icon" />
        </Link>
        <Link
          to="/account"
          className="textButton hidden account view-account  items-center space-x-1"
        >
          <div className="loading hidden">
            <FaCircleNotch className="fas fa-fw fa-spin fa-circle-notch animate-spin" />
          </div>
          <FaUser className="user" />
          <div className="avatar hidden"></div>
          <div className="text"></div>
          <div className="levelAndBar">
            <div className="level">
              <FaCrown className="crown" />
            </div>
            <div className="expBar"></div>
          </div>
          <FaBell className="bell" />
        </Link> */}
        {/* <Link
          to="/signin"
          className="textButton view-signin flex items-center space-x-1"
          title="sign in"
        >
          <FaSignInAlt className="icon" />
        </Link> */}
      </nav>
    </header>
  );
};

export default Navbar;
