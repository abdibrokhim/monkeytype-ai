// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <dialog id="mobileTestConfigModal" className={`modalWrapper ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal bg-white p-6 rounded-lg shadow-lg">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="group mb-4">
          <button className="punctuation px-4 py-2 border rounded">Punctuation</button>
          <button className="numbers px-4 py-2 border rounded ml-2">Numbers</button>
        </div>
        <div className="group modeGroup mb-4">
          <button data-mode="time" className="px-4 py-2 border rounded">Time</button>
          <button data-mode="words" className="active px-4 py-2 border rounded">Words</button>
          <button data-mode="quote" className="px-4 py-2 border rounded">Quote</button>
          <button data-mode="zen" className="px-4 py-2 border rounded">Zen</button>
          <button data-mode="custom" className="px-4 py-2 border rounded">Custom</button>
        </div>
        <div className="group timeGroup mb-4">
          <button data-time="15" className="px-4 py-2 border rounded">15</button>
          <button data-time="30" className="active px-4 py-2 border rounded ml-2">30</button>
          <button data-time="60" className="px-4 py-2 border rounded">60</button>
          <button data-time="120" className="px-4 py-2 border rounded">120</button>
          <button data-time="custom" className="px-4 py-2 border rounded">Custom</button>
        </div>
        <div className="group wordsGroup mb-4 hidden">
          <button data-words="10" className="px-4 py-2 border rounded">10</button>
          <button data-words="25" className="px-4 py-2 border rounded ml-2">25</button>
          <button data-words="50" className="px-4 py-2 border rounded ml-2">50</button>
          <button data-words="100" className="px-4 py-2 border rounded ml-2">100</button>
          <button data-words="custom" className="px-4 py-2 border rounded ml-2">Custom</button>
        </div>
        <div className="group quoteGroup mb-4 hidden">
          <button data-quoteLength="-1" className="px-4 py-2 border rounded">All</button>
          <button data-quoteLength="0" className="px-4 py-2 border rounded ml-2">Short</button>
          <button data-quoteLength="1" className="px-4 py-2 border rounded ml-2">Medium</button>
          <button data-quoteLength="2" className="px-4 py-2 border rounded ml-2">Long</button>
          <button data-quoteLength="3" className="px-4 py-2 border rounded ml-2">Thicc</button>
          <button id="quote-search-button" data-quoteLength="-2" className="px-4 py-2 border rounded ml-2">Search</button>
        </div>
        <div className="group customGroup hidden mb-4">
          <button className="customChange px-4 py-2 border rounded">Change</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
