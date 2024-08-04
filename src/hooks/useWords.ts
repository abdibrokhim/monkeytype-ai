import { faker } from "@faker-js/faker"; // Import faker library for generating random data
import { useCallback, useState } from "react"; // Import necessary hooks from React

// Function to generate a specified number of lowercase words using faker
const generateWords = (count: number) => {
  var words = faker.word.words(count).toLowerCase(); // Generate 'count' number of random words in lowercase
  console.log("-----------------");
  console.log('generated words: ', words);
  console.log("-----------------");
  return words;
};


// Custom hook for managing dynamically generated words
const useWords = (count: number) => {
  const [words, setWords] = useState<string>(generateWords(count)); // State to hold generated words

  // Callback function to update generated words when count changes
  const updateWords = useCallback(() => {
    setWords(generateWords(count)); // Generate new words based on current count and update state
  }, []); // Recreate callback only if count changes

  // Return generated words and update function
  return { words, updateWords, setWords };
};

export default useWords;