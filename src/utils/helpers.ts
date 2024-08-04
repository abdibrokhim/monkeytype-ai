// Function to determine if a keyboard code is allowed (letters and whitespaces only)
export const isKeyboardCodeAllowed = (code: string) => {
  return (
    code.startsWith("Key") || // Allow alphabetical keys (e.g., KeyA, KeyB)
    code.startsWith("Digit") || // Allow numeric keys (e.g., Digit1, Digit2)
    code === "Backspace" || // Allow Backspace key
    code === "Space" // Allow Space key
  );
};

// Function to count errors between actual and expected strings
export const countErrors = (actual: string, expected: string) => {
  const expectedCharacters = expected.split(""); // Convert expected string to an array of characters

  return expectedCharacters.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i]; // Get corresponding character from actual string
    if (actualChar !== expectedChar) {
      errors++; // Increment error count if characters don't match
    }
    return errors;
  }, 0); // Start with 0 errors
};

// Function to calculate accuracy percentage based on errors and total characters
export const calculateAccuracyPercentage = (errors: number, total: number) => {
  if (total > 0) {
    const corrects = total - errors; // Calculate number of correct characters
    return (corrects / total) * 100; // Calculate accuracy percentage
  }

  return 0; // Return 0 if total characters is 0 (to avoid division by zero)
};

// Function to format a percentage for display
export const formatPercentage = (percentage: number) => {
  return percentage.toFixed(0) + "%"; // Format percentage to whole number and add percent sign
};

// Function for debugging in development environment
export const debug = (str: string) => {
  if (process.env.NODE_ENV === "development") { // Check if environment is development
    console.debug(str); // Log debug message to console
  }
};
