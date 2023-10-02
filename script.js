function firstNonRepeatedChar(str) {
  const charCount = {}; // Object to store character frequencies

  // Count the frequency of each character in the string
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first character with a frequency of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}