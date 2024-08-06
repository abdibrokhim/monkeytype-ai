import { useState } from 'react';

const useMode = (mode: number) => {
    const [selectedMode, setSelectedMode] = useState<number | null>(null);

    const handleModeClick = (mode: number) => {
        if (selectedMode === mode) {
            setSelectedMode(null);
        } else {
            setSelectedMode(mode);
        }
    };

    return { selectedMode, handleModeClick };

}

export default useMode;