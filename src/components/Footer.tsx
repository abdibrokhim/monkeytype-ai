import React from 'react';

const Footer = () => {
  return (
    <footer className="relative text-center leading-relaxed text-sm text-gray-500 text-xs">
      <div className="leftright grid grid-cols-2 lg:grid-cols-[1fr_auto] lg:gap-[300px] gap-[100px] user-select-none items-start justify-start">
        <div className="left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <a href="mailto:abdibrokhim@gmail.com" className="textButton flex items-center justify-start lg:justify-start my-1 text-gray-700 hover:text-black transition" target="_blank" rel="noreferrer noopener">
            <i className="fas fa-fw fa-envelope mr-2"></i>
            <div className="text">contact</div>
          </a>
          <a href="https://buymeacoffee.com/abdibrokhim/" className="textButton flex items-center justify-start lg:justify-start my-1 text-gray-700 hover:text-black transition" target="_blank" rel="noreferrer noopener">
            <i className="fas fa-fw fa-donate mr-2"></i>
            <div className="text">support</div>
          </a>
          <a href="https://github.com/abdibrokhim/monkeytype-ai/" className="textButton flex items-center justify-start lg:justify-start my-1 text-gray-700 hover:text-black transition" target="_blank" rel="noreferrer noopener">
            <i className="fas fa-fw fa-code mr-2"></i>
            <div className="text">github</div>
          </a>
          <a href="https://discord.gg/nVtmDUN2sR" className="textButton flex items-center justify-start lg:justify-start my-1 text-gray-700 hover:text-black transition" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-fw fa-discord mr-2"></i>
            <div className="text">discord</div>
          </a>
          <a href="https://linkedin.com/in/abdibrokhim" className="textButton flex items-center justify-start lg:justify-start text-gray-700 hover:text-black transition" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-fw fa-linkedin mr-2"></i>
            <div className="text">linkedin</div>
          </a>
        </div>
        <div className="right grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0">
          <button className="current-theme textButton flex items-center justify-start text-gray-700 hover:text-black transition" aria-label="Shift-click to toggle custom theme" data-balloon-pos="left">
            <i className="fas fa-fw fa-palette mr-2"></i>
            <div className="text">serika light</div>
          </button>
          <a href='https://github.com/abdibrokhim/monkeytype-ai' target="_blank" rel="noreferrer noopener" className="currentVersion textButton flex items-center justify-start text-gray-700 hover:text-black transition">
            <i className="fas fa-fw fa-code-branch mr-2"></i>
            <div className="text">version</div>
            <span id="newVersionIndicator" className="ml-2 bg-gray-800 text-white rounded-full px-2">0.1</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;