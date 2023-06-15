// Create a function that takes an integer array and return the biggest between
// positive sum, negative sum, or 0s count. The major is understood as the
// greatest absolute value.

// arr = [1,2,3,4,0,0,-3,-2], the function has to return 10, because:

//     Positive sum = 1+2+3+4 = 10
//     Negative sum = (-3)+(-2) = -5
//     0s count = 2 (there are two zeros in array)

// majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]); // => -27

// majorSum([0, 0, 0, 0, 0, 1, 2, -3]); // => 5
// // Because -3 < 1+2 < 0sCount = 5

/*
Input: Array of integers
  - Can it be sparse?
  - Will it always be an array, what if no input, or more input?
  - Will the array only carry numbers?
  - nested?
  - empty?
Output:
  - The major sum

Rules:
  - A major sum is the greatest value between the sum of the positive numbers,
  negative numbers, and the count of 0s.
  - We check absolute values, but return the raw value

E
majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]); // => -27
majorSum([0, 0, 0, 0, 0, 1, 2, -3]); // => 5
majorSum([1,2,3,4,0,0,-3,-2]); // => 10
majorSum([]); // => 0
majorSum([1, 2, -1, -2, 0, 0, 0]); // => 3
majorSum([1, 1, -1, -2, 0, 0, 0]); // => 3

D
Arrays

A
- Filter positive numbers
- Filter negative numbers
- Filter zeros
- Reduce positive and negative number arrays to their sum
- If abs negative is greater than positive and zero count, return negative
- if positive greater than zero count, return positive
- return 0 count
*/

function majorSum(arr) {
  let positive = arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
  let negative = arr.filter(num => num < 0).reduce((sum, num) => sum + num, 0);
  let zeroes = arr.filter(num => num === 0).length;

  let nAbs = Math.abs(negative);
  if (nAbs > positive && nAbs > zeroes) return negative;
  if (positive > zeroes) return positive;
  return zeroes;
}

console.log(majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0])); // => -27
console.log(majorSum([0, 0, 0, 0, 0, 1, 2, -3])); // => 5
console.log(majorSum([1,2,3,4,0,0,-3,-2])); // => 10
console.log(majorSum([])); // => 0
console.log(majorSum([1, 2, -1, -2, 0, 0, 0])); // => 3
console.log(majorSum([1, 1, -1, -2, 0, 0, 0])); // => 3
