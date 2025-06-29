// Exercise 9: Write a function `sortByProperty` that takes an array of objects
// and a property name, and returns the array sorted by that property in ascending order.
// Example: sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")
// should return [{name: "Bob", age: 25}, {name: "Alice", age: 30}].

function sortByProperty(arr, order) {
  return arr.slice().sort((a, b) => {
    if (a[order] < b[order]) return -1;
    if (a[order] > b[order]) return 1;
    return 0;
  });
}

console.log(
  sortByProperty(
    [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ],
    "age"
  )
); // Expected output: [{name: "Bob", age: 25}, {name: "Alice", age: 30}]

console.log(
  sortByProperty(
    [
      { name: "Alice", age: 30 },
      { name: "Aaice", age: 80 },
      { name: "Bob", age: 25 },
    ],
    "name"
  )
); // Expected output: [ { name: 'Aaice', age: 80 },{ name: 'Alice', age: 30 },{ name: 'Bob', age: 25 }]
