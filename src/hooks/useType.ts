import { useCallback, useEffect, useRef, useState } from "react";
import { isKeyboardCodeAllowed } from "../utils/helpers";

// Custom hook for handling typing simulation
const useTypings = (enabled: boolean) => {
  const [cursor, setCursor] = useState(0); // Track cursor position
  const [typed, setTyped] = useState<string>(""); // Track currently typed text
  const totalTyped = useRef(0); // Ref to track total characters typed

  // Callback function for handling keydown events
  const keydownHandler = useCallback(
    ({ key, code }: KeyboardEvent) => {
      // Check if typing is enabled and the keyboard code is allowed
      if (!enabled || !isKeyboardCodeAllowed(code)) {
        return;
      }

      // Handle different key events
      switch (key) {
        case "Backspace":
          // Handle backspace key
          setTyped((prev) => prev.slice(0, -1)); // Remove last character from typed text
          setCursor((cursor) => cursor - 1); // Move cursor position back
          totalTyped.current -= 1; // Decrease total typed character count
          break;
        default:
          // Handle other keys (normal typing)
          setTyped((prev) => prev.concat(key)); // Append typed character to typed text
          setCursor((cursor) => cursor + 1); // Move cursor position forward
          totalTyped.current += 1; // Increase total typed character count
      }
    },
    [enabled]
  );

  // Function to clear typed text and reset cursor position
  const clearTyped = useCallback(() => {
    setTyped(""); // Clear typed text
    setCursor(0); // Reset cursor position to start
  }, []);

  // Function to reset the total typed character count
  const resetTotalTyped = useCallback(() => {
    totalTyped.current = 0; // Reset total typed characters to zero
  }, []);

  // Effect to attach keydown event listener when component mounts
  useEffect(() => {
    window.addEventListener("keydown", keydownHandler); // Add keydown event listener

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", keydownHandler); // Remove keydown event listener
    };
  }, [keydownHandler]); // Dependency array ensures keydownHandler is recreated only if it changes

  // Return values and functions accessible to the component using this hook
  return {
    typed, // Currently typed text
    cursor, // Current cursor position
    clearTyped, // Function to clear typed text and reset cursor
    resetTotalTyped, // Function to reset total typed characters count
    totalTyped: totalTyped.current, // Total characters typed (accessible via ref)
  };
};

export default useTypings;
