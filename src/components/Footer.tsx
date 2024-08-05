import React from 'react';

const Footer = () => {
  return (
    <footer className="relative text-center leading-relaxed text-sm text-gray-500">
      <div id="commandLineMobileButton" className="hidden fixed bottom-8 left-8 text-center bg-gray-800 text-white rounded-full w-12 h-12 leading-12 cursor-pointer transition duration-250">
        <i className="fas fa-terminal"></i>
      </div>
      <div className="keyTips transition duration-125 mb-8 leading-8">
        <span className="mx-1">tab</span> and <span className="mx-1">enter</span> - Restart Test
        <br />
        <span className="mx-1">ctrl/cmd</span> + <span className="mx-1">shift</span> + <span className="mx-1">p</span> or <span className="mx-1">esc</span> - Command Line
      </div>
      <div className="leftright grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 user-select-none">
        <div className="left flex flex-col lg:flex-row lg:items-start">
          <button className="textButton flex items-center my-1 text-gray-700 hover:text-black transition" id="contactPopupButton">
            <i className="fas fa-fw fa-envelope mr-2"></i>
            <div className="text">contact</div>
          </button>
          <button className="textButton flex items-center my-1 text-gray-700 hover:text-black transition" id="supportMeButton">
            <i className="fas fa-fw fa-donate mr-2"></i>
            <div className="text">support</div>
          </button>
          <a href="https://github.com/monkeytypegame/monkeytype" className="textButton flex items-center my-1 text-gray-700 hover:text-black transition" target="_blank" rel="noreferrer noopener">
            <i className="fas fa-fw fa-code mr-2"></i>
            <div className="text">github</div>
          </a>
          <a href="https://www.discord.gg/monkeytype" className="textButton flex items-center my-1 text-gray-700 hover:text-black transition" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-fw fa-discord mr-2"></i>
            <div className="text">discord</div>
          </a>
          <a href="https://x.com/monkeytype" className="textButton flex items-center my-1 text-gray-700 hover:text-black transition" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-fw fa-twitter mr-2"></i>
            <div className="text">twitter</div>
          </a>
          <a href="/terms-of-service.html" className="textButton flex items-center my-1 text-gray-700 hover:text-black transition" target="_blank">
            <i className="fas fa-fw fa-file-contract mr-2"></i>
            <div className="text">terms</div>
          </a>
          <a href="/security-policy.html" className="textButton flex items-center my-1 text-gray-700 hover:text-black transition" target="_blank">
            <i className="fas fa-fw fa-shield-alt mr-2"></i>
            <div className="text">security</div>
          </a>
          <a href="/privacy-policy.html" className="textButton flex items-center my-1 text-gray-700 hover:text-black transition" target="_blank">
            <i className="fas fa-fw fa-lock mr-2"></i>
            <div className="text">privacy</div>
          </a>
        </div>
        <div className="right flex flex-col lg:flex-row lg:items-end">
          <button className="current-theme textButton flex items-center my-1 text-gray-700 hover:text-black transition" aria-label="Shift-click to toggle custom theme" data-balloon-pos="left">
            <i className="fas fa-fw fa-palette mr-2"></i>
            <div className="text">serika dark</div>
          </button>
          <button className="currentVersion textButton flex items-center my-1 text-gray-700 hover:text-black transition">
            <i className="fas fa-fw fa-code-branch mr-2"></i>
            <div className="text">version</div>
            <span id="newVersionIndicator" className="hidden ml-2 bg-gray-800 text-white rounded-full px-2">new</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
