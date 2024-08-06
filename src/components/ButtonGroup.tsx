import React, { useState } from "react";

const ButtonGroup: React.FC = () => {
  // State to track the selected mode and time
  const [selectedMode, setSelectedMode] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<number | null>(1);

  // State to track the visibility of the dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const [topic, setTopic] = useState("");

  // Handle mode button click
  const handleModeClick = (mode: number) => {
    if (selectedMode === mode) {
      setShowDropdown(!showDropdown);
      // entered in default mode; 30 random words
      setSelectedMode(null);
    } else {
      setSelectedMode(mode);
      setShowDropdown(true);
    }
    console.log("selectedMode: ", selectedMode);
  };

  // Handle time button click
  const handleTimeClick = (time: number) => {
    setSelectedTime(time);
    console.log("selectedTime: ", selectedTime);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
    console.log("topic: ", topic);
  };

  // Handle submit
  const handleSubmit = () => {
    console.log("=== Submitted ===");
    console.log("submitted: ", topic);
    console.log("selectedMode: ", selectedMode);
    console.log("selectedTime: ", selectedTime);
  };

  return (
    <div className="flex flex-row space-x-1 justify-center items-center">
      <div className="relative flex space-x-1 justify-center">
        <button
          className={`px-3 py-1 text-xs ${
            selectedMode === 1 ? 'bg-black text-white' : 'bg-gray-200 text-black group hover:bg-black hover:text-white'
          } group hover:bg-black rounded`}
          aria-label="Shift-click to toggle custom theme"
          data-balloon-pos="left"
          onClick={() => handleModeClick(1)}
        >
          <i className="fas fa-fw fa-at mr-2"></i>
          punctuation
        </button>
        <button
          className={`px-3 py-1 text-xs ${
            selectedMode === 2 ? 'bg-black text-white' : 'bg-gray-200 text-black group hover:bg-black hover:text-white'
          } group hover:bg-black rounded`}
          aria-label="Shift-click to toggle custom theme"
          data-balloon-pos="left"
          onClick={() => handleModeClick(2)}
        >
          <i className="fas fa-fw fa-hashtag mr-2"></i>
          numbers
        </button>
        {showDropdown && (
          <div className="absolute left-0 mt-8 w-72 p-4 bg-white text-black text-xs rounded shadow-md z-50">
            <label className="block text-black font-bold mb-2">enter topic:</label>
            <div className="flex flex-row gap-2 justify-center items-center">
              <input
                type="text"
                value={topic}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded focus:outline-none focus:none focus:border-black ouline-none "
              />
              <button
                disabled={!topic}
                className={`px-3 py-1 rounded bg-gray-200 text-black ${
                  !topic ? 'cursor-not-allowed' : 'group hover:bg-black hover:text-white'
                }`}
                onClick={handleSubmit}
              >
                <i className="fa-solid fa-arrow-up"></i>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-1 justify-center">
        <button
          className={`px-3 py-1 text-xs ${
            selectedTime === 1 ? 'bg-black text-white' : 'bg-gray-200 text-black group hover:bg-black hover:text-white'
          } group hover:bg-black rounded`}
          onClick={() => handleTimeClick(1)}
        >
          15s
        </button>
        <button
          className={`px-3 py-1 text-xs ${
            selectedTime === 2 ? 'bg-black text-white' : 'bg-gray-200 text-black group hover:bg-black hover:text-white'
          } group hover:bg-black rounded`}
          onClick={() => handleTimeClick(2)}
        >
          30s
        </button>
        <button
          className={`px-3 py-1 text-xs ${
            selectedTime === 3 ? 'bg-black text-white' : 'bg-gray-200 text-black group hover:bg-black hover:text-white'
          } group hover:bg-black rounded`}
          onClick={() => handleTimeClick(3)}
        >
          45s
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;