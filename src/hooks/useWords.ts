import { useEffect, useCallback, useState } from "react"; // Import necessary hooks from React
import generateWordDefault from "../modes/generateDefault"; // Import function to generate default words

// Custom hook for managing dynamically generated words
const useWords = (count: number) => {
  const [words, setWords] = useState<string>(""); // Initialize with an empty string
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status

  // Async function to fetch and update words
  const updateWords = useCallback(async () => {
    const generatedWords = await generateWordDefault(count);
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