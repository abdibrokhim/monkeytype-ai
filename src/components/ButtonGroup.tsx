import React, { useState, useEffect, useRef } from "react";
import useMode from "../hooks/useMode";
import useTimer from "../hooks/useTimer";
import useColors from "../hooks/useColors";
import useEngine from "../hooks/useEngine";

const ButtonGroup = ({
  onUpdateTimer: handleRestart,
} : {
  onUpdateTimer: () => void;
}) => {
  // State to track the selected mode and time
  const [selectedMode, setSelectedMode] = useState<number | null>(null);
  // const [selectedTime, setSelectedTime] = useState<number | null>(1);

  // State to track the visibility of the dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const [topic, setTopic] = useState("");

  const { handleModeSubmit } = useMode();
  const { selectedTime, setSelectedTime, resetTimer } = useTimer();

  const buttonRef = useRef<HTMLButtonElement>(null);

  // const { updateTimer } = useEngine();

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
    console.log("=== handleTimeClick ===");
    setSelectedTime(time);
    // resetTimer(time);
    buttonRef.current?.blur();
    handleRestart();
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
    console.log("topic: ", topic);
  };

  // Handle submit
  const handleSubmit = () => {
    console.log("=== handleSubmit ===");
    console.log("submitted: ", topic);
    console.log("selectedMode: ", selectedMode);
    console.log("selectedTime: ", selectedTime);
    handleModeSubmit(selectedMode, topic);
  };


  return (
    <div className="flex flex-row space-x-1 justify-center items-center">
      <div className="relative flex space-x-1 justify-center">
        <button
          className={`px-3 py-1 text-xs ${
            selectedMode === 1 ? 'bg-[var(--black-color)] text-[var(--white-color)]' : 'bg-[var(--gray-200-color)] text-[var(--gray-500-color)] group hover:bg-[var(--gray-500-color)] hover:text-[var(--gray-200-color)]'
          } group hover:bg-[var(--black-color)] rounded`}
          aria-label="Shift-click to toggle custom theme"
          data-balloon-pos="left"
          onClick={() => handleModeClick(1)}
        >
          <i className="fas fa-fw fa-at mr-2"></i>
          punctuation
        </button>
        <button
          className={`px-3 py-1 text-xs ${
            selectedMode === 2 ? 'bg-[var(--black-color)] text-[var(--white-color)]' : 'bg-[var(--gray-200-color)] text-[var(--gray-500-color)] group hover:bg-[var(--gray-500-color)] hover:text-[var(--gray-200-color)]'
          } group hover:bg-[var(--black-color)] rounded`}
          aria-label="Shift-click to toggle custom theme"
          data-balloon-pos="left"
          onClick={() => handleModeClick(2)}
        >
          <i className="fas fa-fw fa-hashtag mr-2"></i>
          numbers
        </button>
        {showDropdown && (
          <div className="absolute left-0 mt-8 w-72 p-4 bg-[var(--white-color)] text-black text-xs rounded shadow-md z-50">
            <div className="flex flex-row gap-2 justify-center items-center">
              <input
                type="text"
                value={topic}
                onChange={handleInputChange}
                placeholder="enter topic..."
                className="w-full px-2 py-1 border rounded focus:outline-none focus:none focus:border-[var(--black-color)] ouline-none "
              />
              <button
                disabled={!topic}
                className={`px-3 py-1 rounded bg-[var(--gray-200-color)] text-[var(--black-color)] ${
                  !topic ? 'cursor-not-allowed' : 'group hover:bg-[var(--black-color)] hover:text-[var(--white-color)]'
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
          ref={buttonRef}
          className={`px-3 py-1 text-xs ${
            selectedTime === 15 ? 'bg-[var(--black-color)] text-[var(--white-color)]' : 'bg-[var(--gray-200-color)] text-[var(--gray-500-color)] group hover:bg-[var(--gray-500-color)] hover:text-[var(--gray-200-color)]'
          } group hover:bg-[var(--black-color)] rounded`}
          onClick={() => handleTimeClick(15)}
        >
          15s
        </button>
        <button
          ref={buttonRef}
          className={`px-3 py-1 text-xs ${
            selectedTime === 30 ? 'bg-[var(--black-color)] text-[var(--white-color)]' : 'bg-[var(--gray-200-color)] text-[var(--gray-500-color)] group hover:bg-[var(--gray-500-color)] hover:text-[var(--gray-200-color)]'
          } group hover:bg-[var(--black-color)] rounded`}
          onClick={() => handleTimeClick(30)}
        >
          30s
        </button>
        <button
          ref={buttonRef} 
          className={`px-3 py-1 text-xs ${
            selectedTime === 45 ? 'bg-[var(--black-color)] text-[var(--white-color)]' : 'bg-[var(--gray-200-color)] text-[var(--gray-500-color)] group hover:bg-[var(--gray-500-color)] hover:text-[var(--gray-200-color)]'
          } group hover:bg-[var(--black-color)] rounded`}
          onClick={() => handleTimeClick(45)}
        >
          45s
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;