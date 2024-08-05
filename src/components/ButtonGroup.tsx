import React, { useState } from "react";

const ButtonGroup: React.FC = () => {
    // State to track the selected button
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    // Handle button click
    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className="flex space-x-1 justify-center">
            {['Punctuation', 'Numbers', '15s', '30s', '45s'].map((label) => (
                <button
                    key={label}
                    className={`px-3 py-1 text-sm ${
                        selectedButton === label
                            ? 'bg-yellow-500 text-yellow-900'
                            : 'bg-gray-200 text-yellow-900 group-hover:bg-yellow-300'
                    } group hover:bg-yellow-400 rounded`}
                    onClick={() => handleButtonClick(label)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default ButtonGroup;
