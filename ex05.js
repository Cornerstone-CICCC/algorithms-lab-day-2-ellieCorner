// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(str) {
  const CONSONANTS = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (CONSONANTS.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countConsonants("hello world")); // Expected output: 7
