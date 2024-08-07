import { useEffect, useState, useCallback } from 'react';
import useWords from './useWords';

const NUMBER_OF_WORDS = 12;

const useMode = () => {
    const [selectedMode, setSelectedMode] = useState<number | null>(null);
    const [topic, setTopic] = useState("");
    const { words, updateWords, setWords, loading } = useWords(NUMBER_OF_WORDS, selectedMode, topic);

    const handleModeSubmit = useCallback((mode: number | null, newTopic: string) => {
        console.log("=== handleModeSubmit ===");
        console.log("mode: ", mode);
        console.log("topic: ", newTopic);
        setSelectedMode(mode);
        setTopic(newTopic);
    }, []);

    useEffect(() => {
        console.log("=== useMode (useEffect) ===");
        console.log("mode: ", selectedMode);
        console.log("topic: ", topic);
        // updateWords();
    }, [selectedMode, topic]);

    return { selectedMode, setSelectedMode, topic, setTopic, handleModeSubmit, words, updateWords, setWords, loading };
}

export default useMode;