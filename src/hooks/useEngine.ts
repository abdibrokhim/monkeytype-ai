import { useCallback, useEffect, useState } from "react";
import { countErrors, debug } from "../utils/helpers";
import useTypings from "./useType";
import useTimer from "./useTimer";
import useColors from "./useColors";
import useMode from "./useMode";
import completeWord from "../modes/completeWord";

export type State = "start" | "run" | "finish";

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  // const { selectedTime, timeLeft, startCountdown, resetCountdown, setTimeLeft } = useTimer();
  const { selectedMode, topic, words, updateWords, setWords, loading } = useMode();
  const { cursor, typed, clearTyped, totalTyped, resetTotalTyped } = useTypings(state !== "finish");
  const [errors, setErrors] = useState(0);
  const { appTheme } = useColors();
  const { selectedTime, timeLeft, startCountdown, resetCountdown, setTimeLeft, resetTimer } = useTimer();
  
  const isStarting = state === "start" && cursor > 0;
  const areWordsFinished = cursor === words.length;
  
  useEffect(() => {
    console.log("=== useEngine (useEffect) ===");
    console.log("new words: ", words);
  }, [words]);

  const updateTimer = useCallback(() => {
    console.log("=== useEngine (updateTimer) ===");
    console.log("selectedTime: ", selectedTime);
    resetTimer(selectedTime);
    console.log("timeLeft: ", timeLeft);
  }, [selectedTime, resetTimer, ]);

  const restart = useCallback(() => {
    debug("restarting...");
    resetCountdown();
    resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  const sumErrors = useCallback(() => {
    debug(`cursor: ${cursor} - words.length: ${words.length}`);
    const wordsReached = words.substring(0, Math.min(cursor, words.length));
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountdown();
    }
  }, [isStarting, startCountdown]);

  useEffect(() => {
    if (!timeLeft && state === "run") {
      debug("time is up...");
      setState("finish");
      sumErrors();
    }
  }, [timeLeft, state, sumErrors]);

  useEffect(() => {
    if (areWordsFinished) {
      debug("words are finished...");
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [clearTyped, areWordsFinished, sumErrors]);

  useEffect(() => {
    const handleMistake = async () => {
      const wordsArray = words.split(" ");
      const typedArray = typed.split(" ");
      const cursorWordIndex = typedArray.length - 1;
      const currentWord = wordsArray[cursorWordIndex];
      const userTypedWord = typedArray[cursorWordIndex];

      if (currentWord && userTypedWord && userTypedWord !== currentWord && userTypedWord.length > 0) {
        // Check if the typed word is different from the current word and not empty
        if (!currentWord.startsWith(userTypedWord)) {
          // Only regenerate if there's a typo
          const newWordPart = await completeWord(userTypedWord); // using gpt-4o
          // const newWordPart = await completeWordFalcon(userTypedWord); // using falcon
          if (newWordPart !== ".") {
            wordsArray[cursorWordIndex] = userTypedWord + newWordPart;
            setWords(wordsArray.join(" "));
          }
        }
      }
    };

    handleMistake();
  }, [typed, words, ]);

  return { state, words, typed, errors, restart, timeLeft, totalTyped, loading, appTheme, updateTimer };
};

export default useEngine;