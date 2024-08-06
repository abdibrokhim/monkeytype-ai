import React from 'react';

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white text-xl font-bold"></a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/monkeytypegame/monkeytype" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.discord.gg/monkeytype" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord"></i>
          </a>
          <a href="https://x.com/monkeytype" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
