import { useCallback, useEffect, useState } from "react";
import { countErrors, debug } from "../utils/helpers";
import useCountdown from "./useCountdownHook";
import useTypings from "./useType";
import useWords from "./useWords";
import completeWord from "../modes/completeWord";
import completeWordFalcon from "../modes/falcon";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { timeLeft, startCountdown, resetCountdown } = useCountdown(COUNTDOWN_SECONDS);
  const { words, updateWords, setWords, loading } = useWords(NUMBER_OF_WORDS);
  const { cursor, typed, clearTyped, totalTyped, resetTotalTyped } = useTypings(state !== "finish");
  const [errors, setErrors] = useState(0);

  const isStarting = state === "start" && cursor > 0;
  const areWordsFinished = cursor === words.length;

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
  }, [clearTyped, areWordsFinished, updateWords, sumErrors]);

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
  }, [typed, words, setWords]);

  return { state, words, typed, errors, restart, timeLeft, totalTyped, loading };
};

export default useEngine;