import { useCallback, useEffect, useRef, useState } from "react";

// Custom hook for countdown functionality
const useCountdown = (seconds: number) => {
  // State to keep track of the remaining time
  const [timeLeft, setTimeLeft] = useState(seconds);

  // Reference to store the interval ID
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Boolean to check if the timer has ended
  const hasTimerEnded = timeLeft <= 0;

  // Boolean to check if the timer is currently running
  const isRunning = intervalRef.current != null;

  // Function to start the countdown
  const startCountdown = useCallback(() => {
    // Only start if the timer hasn't ended and isn't already running
    if (!hasTimerEnded && !isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }
  }, [hasTimerEnded, isRunning]);

  // Function to reset the countdown
  const resetCountdown = useCallback(() => {
    // Clear the existing interval if it exists
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Set the interval reference to null
    intervalRef.current = null;
    // Reset the time left to the initial value
    setTimeLeft(seconds);
  }, [seconds]);

  // Effect to clear the interval when the countdown reaches 0
  useEffect(() => {
    if (hasTimerEnded && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [hasTimerEnded]);

  // Effect to clear the interval when the component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Return the current time left, and functions to start and reset the countdown
  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdown;
