import React, { useState } from "react";

const ButtonGroup: React.FC = () => {
  // State to track the selected mode and time
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Handle mode button click
  const handleModeClick = (mode: string) => {
    setSelectedMode(mode);
  };

  // Handle time button click
  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-row space-x-1 justify-center items-center">
      <div className="flex space-x-1 justify-center">
        <button
            className={`px-3 py-1 text-xs ${
                selectedMode === 'Punctuation'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black group hover:bg-black hover:text-white'
                } group hover:bg-black rounded`}
            onClick={() => handleModeClick('Punctuation')}
            >
                <i className="fas fa-fw fa-at mr-2"></i>
            Punctuation
        </button>
        <button
          className={`px-3 py-1 text-xs ${
            selectedMode === 'Numbers'
            ? 'bg-black text-white'
            : 'bg-gray-200 text-black group hover:bg-black hover:text-white'
            } group hover:bg-black rounded`}
          onClick={() => handleModeClick('Numbers')}
        >
            <i className="fas fa-fw fa-hashtag mr-2"></i>
          Numbers
        </button>
      </div>

      <div className="flex space-x-1 justify-center">
        <button
          className={`px-3 py-1 text-xs ${
            selectedTime === '15s'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-black group hover:bg-black hover:text-white'
          } group hover:bg-black rounded`}
          onClick={() => handleTimeClick('15s')}
        >
          15s
        </button>
        <button
          className={`px-3 py-1 text-xs ${
            selectedTime === '30s'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-black group hover:bg-black hover:text-white'
          } group hover:bg-black rounded`}
          onClick={() => handleTimeClick('30s')}
        >
          30s
        </button>
        <button
          className={`px-3 py-1 text-xs ${
            selectedTime === '45s'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-black group hover:bg-black hover:text-white'
          } group hover:bg-black rounded`}
          onClick={() => handleTimeClick('45s')}
        >
          45s
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;