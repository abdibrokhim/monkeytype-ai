import { useEffect, useCallback, useState } from "react"; // Import necessary hooks from React
import generateWordDefault from "../modes/generateDefault"; // Import function to generate default words

// Custom hook for managing dynamically generated words
const useWords = (count: number) => {
  const [words, setWords] = useState<string>(""); // Initialize with an empty string
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status
  const [mode, setMode] = useState<number | null>(null);

  // Async function to fetch and update words
  const updateWords = useCallback(async () => {
    // if mode is null, generate default words
    const generatedWords = await generateWordDefault(count);
    
    // TODO: next based on the mode we should select the next function to call
    
    // available modes: 1. punctuation, 2. numbers
    // available functions: 1. generateWithPunct, 2. generateWithNums

    setWords(generatedWords);
  }, []); // Recreate callback only if count changes

  // Fetch words when the component mounts or count changes
  useEffect(() => {
    setLoading(true);
    updateWords();
    setLoading(false);
  }, []);

  // Return generated words and update function
  return { words, updateWords, setWords, loading };
};

export default useWords;