// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(str) {
  const lookup = {};
  let maxChar = "";
  let maxCount = 0;

  for (const char of str) {
    lookup[char] = (lookup[char] || 0) + 1;

    if (lookup[char] > maxCount) {
      maxCount = lookup[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"
