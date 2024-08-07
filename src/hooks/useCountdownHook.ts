import { useCallback, useEffect, useRef, useState } from "react";

const useCountdown = (initialSeconds: number) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const hasTimerEnded = timeLeft <= 0;
  const isRunning = intervalRef.current != null;

  const startCountdown = useCallback(() => {
    if (!hasTimerEnded && !isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }
  }, [hasTimerEnded, isRunning]);

  const resetCountdown = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = null;
  }, []);

  useEffect(() => {
    if (hasTimerEnded && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [hasTimerEnded]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log("\n=== useCountdown (useEffect) ===");
    console.log("initialSeconds: ", initialSeconds);
    console.log("timeLeft: ", timeLeft);
  }, [initialSeconds, timeLeft]);

  return { timeLeft, startCountdown, resetCountdown, setTimeLeft };
};

export default useCountdown;