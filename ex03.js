// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function getSum(n) {
  if (n < 0) return 0;
  return n + getSum(n - 1);
}

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = getSum(n);
  const currentSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - currentSum;
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3
