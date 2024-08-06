import { useEffect, useCallback, useState } from "react"; // Import necessary hooks from React
import generateWordDefault from "../modes/generateDefault"; // Import function to generate default words
import generateWithPunct from "../modes/generateWithPunct";
import generateWithNums from "../modes/generateWithNums";

import useMode from "./useMode"; // Import custom hook for managing modes

// Custom hook for managing dynamically generated words
const useWords = (count: number) => {
  const [words, setWords] = useState<string>(""); // Initialize with an empty string
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status

  const { selectedMode, topic } = useMode();

  // Async function to fetch and update words
  const updateWords = useCallback(async () => {
    // if mode is null, generate default words

    if (selectedMode === null) {
      console.log("=== default mode ===");
      const generatedWords = await generateWordDefault(count);
      setWords(generatedWords);
    }

    if (selectedMode === 1) {
      console.log("=== punctuation mode ===");
      const generatedWords = await generateWithPunct(topic);
      setWords(generatedWords);
    }

    if (selectedMode === 2) {
      console.log("=== numbers mode ===");
      const generatedWords = await generateWithNums(topic);
      setWords(generatedWords);
    }
    
    // TODO: next based on the mode we should select the next function to call

    // available modes: 1. punctuation, 2. numbers
    // available functions: 1. generateWithPunct, 2. generateWithNums

  }, []); // Recreate callback only if count changes

  // Fetch words when the component mounts or count changes
  useEffect(() => {
    setLoading(true);
    updateWords();
    setLoading(false);
  }, [selectedMode]);

  // Return generated words and update function
  return { words, updateWords, setWords, loading };
};

export default useWords;