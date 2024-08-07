import { useEffect, useCallback, useState } from "react";
import generateWordDefault from "../modes/generateDefault";
import generateWithPunct from "../modes/generateWithPunct";
import generateWithNums from "../modes/generateWithNums";

const useWords = (count: number, selectedMode: number | null, topic: string) => {
  const [words, setWords] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const updateWords = useCallback(async () => {
    setLoading(true);
    let generatedWords: string;

    if (selectedMode === null) {
      console.log("=== default mode ===");
      generatedWords = await generateWordDefault(count);
    } else if (selectedMode === 1) {
      console.log("=== punctuation mode ===");
      generatedWords = await generateWithPunct(topic);
    } else if (selectedMode === 2) {
      console.log("=== numbers mode ===");
      generatedWords = await generateWithNums(topic);
    } else {
      generatedWords = "";
    }

    setWords(generatedWords);
    setLoading(false);
    console.log("=== useWords (updateWords) ===");
    console.log("words: ", generatedWords);
  }, [selectedMode, topic]);

  useEffect(() => {
    updateWords();
  }, [updateWords]);

  return { words, updateWords, setWords, loading };
};

export default useWords;