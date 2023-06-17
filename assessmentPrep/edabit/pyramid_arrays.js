// Given a number n, return an array containing several arrays. Each array
// increments in size, from range 1 to n inclusive, contaning its length as the
// elements.
// Examples

// console.log(pyramidArrays(1)); // [[1]]

// console.log(pyramidArrays(3)); // [[1], [2, 2], [3, 3, 3]]

// console.log(pyramidArrays(5));
// [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

// Notes

// n will be a positive integer.

/*
Input: Number (n)
  - Always integer?
  - n >= 1
  - What if no argument given?
  - More than one?
Output: A nested array of n length
  - Each inner array progressively goes from 1 to n having that many elements
    with that value

Rules:
  - n is inclusive

E
// console.log(pyramidArrays()); // ? []
// console.log(pyramidArrays(0)); // ? []
// console.log(pyramidArrays(1)); // [[1]]
// console.log(pyramidArrays(2)); // [[1], [2, 2]]
// console.log(pyramidArrays(3)); // [[1], [2, 2], [3, 3, 3]]

// console.log(pyramidArrays(5));
// [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

D:
Array

A:
- Check if input > 0, else return []
- Create an array of n elements
- Fill array with something, anything
- Map array
  - At each index, create an Array of index + 1 length and fill it with the
    integer value index + 1.
- return transformed array
*/

function pyramidArrays(n) {
  if (n < 1 || n === undefined) return [];
  const arr = new Array(n);

  return arr.fill(1).map((_, idx) => (new Array(idx + 1)).fill(idx + 1));
}

console.log(pyramidArrays()); // ? []
console.log(pyramidArrays(0)); // ? []
console.log(pyramidArrays(1)); // [[1]]
console.log(pyramidArrays(2)); // [[1], [2, 2]]
console.log(pyramidArrays(3)); // [[1], [2, 2], [3, 3, 3]]

console.log(pyramidArrays(5));
// [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
