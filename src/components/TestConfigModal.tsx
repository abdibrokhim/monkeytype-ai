// src/components/TestConfigModal.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faHashtag, faQuoteLeft, faStopwatch, faCog } from '@fortawesome/free-solid-svg-icons';

const TestConfigModal: React.FC = () => {
  return (
    <dialog id="mobileTestConfigModal" className="modalWrapper hidden">
      <div className="modal p-4 bg-white rounded-lg shadow-lg">
        <div className="group mb-4">
          <button className="p-2 rounded-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faKeyboard} className="text-gray-700" />
            <span className="sr-only">Punctuation</span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faHashtag} className="text-gray-700" />
            <span className="sr-only">Numbers</span>
          </button>
        </div>
        <div className="group modeGroup mb-4 flex flex-wrap">
          <button data-mode="time" className="p-2 rounded-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faStopwatch} className="text-gray-700" />
            <span className="sr-only">Time</span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-200 active" data-mode="words">
            <FontAwesomeIcon icon={faKeyboard} className="text-gray-700" />
            <span className="sr-only">Words</span>
          </button>
          <button data-mode="quote" className="p-2 rounded-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-gray-700" />
            <span className="sr-only">Quote</span>
          </button>
          <button data-mode="zen" className="p-2 rounded-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faCog} className="text-gray-700" />
            <span className="sr-only">Zen</span>
          </button>
          <button data-mode="custom" className="p-2 rounded-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faCog} className="text-gray-700" />
            <span className="sr-only">Custom</span>
          </button>
        </div>
        <div className="group timeGroup mb-4 hidden">
          <button data-time="15" className="p-2 rounded-lg hover:bg-gray-200">15</button>
          <button data-time="30" className="p-2 rounded-lg hover:bg-gray-200 active">30</button>
          <button data-time="60" className="p-2 rounded-lg hover:bg-gray-200">60</button>
          <button data-time="120" className="p-2 rounded-lg hover:bg-gray-200">120</button>
          <button data-time="custom" className="p-2 rounded-lg hover:bg-gray-200">Custom</button>
        </div>
        <div className="group wordsGroup mb-4 hidden">
          <button data-words="10" className="p-2 rounded-lg hover:bg-gray-200">10</button>
          <button data-words="25" className="p-2 rounded-lg hover:bg-gray-200">25</button>
          <button data-words="50" className="p-2 rounded-lg hover:bg-gray-200">50</button>
          <button data-words="100" className="p-2 rounded-lg hover:bg-gray-200">100</button>
          <button data-words="custom" className="p-2 rounded-lg hover:bg-gray-200">Custom</button>
        </div>
        <div className="group quoteGroup mb-4 hidden">
          <button data-quoteLength="-1" className="p-2 rounded-lg hover:bg-gray-200">All</button>
          <button data-quoteLength="0" className="p-2 rounded-lg hover:bg-gray-200">Short</button>
          <button data-quoteLength="1" className="p-2 rounded-lg hover:bg-gray-200">Medium</button>
          <button data-quoteLength="2" className="p-2 rounded-lg hover:bg-gray-200">Long</button>
          <button data-quoteLength="3" className="p-2 rounded-lg hover:bg-gray-200">Thicc</button>
          <button id="quote-search-button" data-quoteLength="-2" className="p-2 rounded-lg hover:bg-gray-200">Search</button>
        </div>
        <div className="group customGroup mb-4 hidden">
          <button className="p-2 rounded-lg hover:bg-gray-200">Change</button>
        </div>
      </div>
    </dialog>
  );
};

export default TestConfigModal;
