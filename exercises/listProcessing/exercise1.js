// Write a function that takes one argument, a positive integer, and returns
// the sum of its digits. Do this without using for, while, or do...while loops
// - instead, use a series of method calls to perform the sum.

// Examples:

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

// 1. Convert Number to string
// 2. Convert string into an array of digit strings
// 3. Reduce Array of digits to sum.

function sum(number) {
  return String(number).split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}
