// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

function validateEmail(str) {
  if (str.includes("@") && str.includes(".")) {
    const atSignIndedx = str.indexOf("@");
    const dotIndex = str.indexOf(".");

    return atSignIndedx !== 0 && dotIndex > atSignIndedx;
  }

  return false;
}

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false
console.log(validateEmail("invalid.email@com")); // Expected output: false
