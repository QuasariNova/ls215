// Created for a study buddy

// Write a function that takes a list of integers, nums, some factors, and an
// integer n that returns a list with up to n elements that have supplied
// factors.

// Example
// listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 3); // => [2, 4, 6]
// listWithFactors([5, 10, 15, 20], 10, 1); // [10, 20]

// ------------------------------------------------------------------------
//                                SECRET
// ------------------------------------------------------------------------
// These are the edge cases not listed by the prompt/examples
// - factors
//   - Integer representing a single factor
//   - Array representing multiple factors
//     - If an array, all factors must be true to keep a value
//   - Is by default 1
//   - Can not be negative
//   - Can not be 0
//
// listWithFactors([3, 5, 6, 9, 10, 12, 15], [3, 5], 7); // => [15]
//
// - n
//   - Can be positive or negative
//     - If negative, we count from the end of the results
//   - Is optional
//     - If left out of function call, will return all results
//   - Can be 0
//     - Return empty array
//
// listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 0); // => []
// listWithFactors([5, 10, 15, 20], 10, -1); // => [20]
// listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2); // => [2, 4, 6, 8, 10]
// listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//                                          => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// listWithFactors([5, 10, 15, 20, 25, 30, 45], [3, 5], -2); // => [30, 45]
//
// - List
//   - Can only contain integers
//   - Will not be sparse
//   - can be empty
//   - Can contain negative numbers
//
// listWithFactors([-2, 4, -8], 2); // => [-2, 4, -8]
// ------------------------------------------------------------------------
//                              END SECRET
// ------------------------------------------------------------------------

// My Solution:
/*
Input:
  - Array of integers, list
    - Can be negative
    - Not sparse
    - Can be empty
  - Integer or Array of Integers, factors
    - Not negative
    - Defaults to 1
  - Integer, n
    - Negative or postive
    - Can be 0
    - Is optional
Output:
  - Array of integers

Rules:
  - Filters input list to a new array that contains just the values that are
    able to factored by factors
  - If n is 0, we return an empty array
  - If n is negative, we return the last n elements that meet the criteria
  - If n is positive, we return the first n elements that meet the criteria
  - If n is not present, we return all elements that meet the criteria

E
listWithFactors([-2, 4, -8], 2); // => [-2, 4, -8]
listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 0); // => []
listWithFactors([5, 10, 15, 20], 10, -1); // => [20]
listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2); // => [2, 4, 6, 8, 10]
listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//                                          => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
listWithFactors([5, 10, 15, 20, 25, 30, 45], [3, 5], -2); // => [30, 45]
listWithFactors([3, 5, 6, 9, 10, 12, 15], [3, 5], 7); // => [15]
listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 3); // => [2, 4, 6]
listWithFactors([5, 10, 15, 20], 10, 1); // => [10, 20]

D
Array

A
- if n is 0, return []
- if factors is a number, reassign it to an array of one element, itself
- Filter list by elements that have all factors as factors
  - Check if every factor can divide the element
- If n is undefined, return filtered list
- If n is negative, return a slice from n
- If n is positive, return a slice from 0 to n
*/

function listWithFactors(list, factors = 1, n) {
  if (n === 0) return [];

  if (typeof factors === 'number') factors = [factors];

  const filtered = list.filter(num => {
    return factors.every(factor => num % factor === 0);
  });

  if (n === undefined) return filtered;
  if (n < 0) return filtered.slice(n);
  return filtered.slice(0, n);
}

console.log(listWithFactors([-2, 4, -8], 2));
//                                                              => [-2, 4, -8]
console.log(listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 0));
//                                                                       => []
console.log(listWithFactors([5, 10, 15, 20], 10, -1));
//                                                                     => [20]
console.log(listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
//                                                         => [2, 4, 6, 8, 10]
console.log(listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//                                          => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(listWithFactors([5, 10, 15, 20, 25, 30, 45], [3, 5], -2));
//                                                                 => [30, 45]
console.log(listWithFactors([3, 5, 6, 9, 10, 12, 15], [3, 5], 7));
//                                                                     => [15]
console.log(listWithFactors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 3));
//                                                                => [2, 4, 6]
console.log(listWithFactors([5, 10, 15, 20], 10, 1));
//                                                                 => [10, 20]
