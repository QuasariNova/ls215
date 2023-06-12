// Write a function that computes the difference between the square of the sum
// of the first n positive integers and the sum of the squares of the first n
// positive integers.

// Examples:

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

function sumSquareDifference(limit) {
  const range = new Array(limit)
    .fill(1).map((_, idx) => idx + 1);

  const sumSquare = range.reduce((sum, value) => sum + value) ** 2;
  const squareSum = range.reduce((sum, value) => sum + (value ** 2));
  // Could proably just do these both in one iteration

  return sumSquare - squareSum;
}
