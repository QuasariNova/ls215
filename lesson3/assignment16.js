// You are given a list of numbers in a "short-hand" range where only the
// significant part of the next number is written because we know the numbers
// are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14,
// 21]). Some people use different separators for their ranges (ex. "1-3, 1-2",
// "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]).
// Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

//     "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
//     "1-3, 1-2" --> 1, 2, 3, 11, 12
//     "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
//     "104-2" --> 104, 105, ... 112
//     "104-02" --> 104, 105, ... 202
//     "545, 64:11" --> 545, 564, 565, .. 611

/*
Input: String
  - comma separated numbers and ranges(', ')
  - Ranges signified by '-', ':', or '..'
    - Ranges Are inclusive
  - Will always start with a number or range?
Output: Array of numbers

Rules:
  - Can't be negative?
  - Numbers are always increasing
  - Numbers after the first can be shortened.
    - It means the next number with the same last digits as the shorthand
    - Can have 0s prepended
  - Ranges are all integers between the first and last number

E
console.log(sequence("1, 3, 7, 2, 4, 1")); // --> 1, 3, 7, 12, 14, 21
console.log(sequence("1-3, 1-2")); // --> 1, 2, 3, 11, 12
console.log(sequence("1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(sequence("104-2")); // --> 104, 105, ... 112
console.log(sequence("104-02")); // -> 104, 105, ... 202
console.log(sequence("545, 64:11")); // --> 545, 564, 565, .. 611

Data Structure:
  - Nested array of ranges
    - If there is no range for a particular element, we make a range of one

A:
- Split string into number/range segments
- Map string array to range arrays [first, last], keeping track of previous
  number to calculate new number
  - To calculate new number, take numString and generate a number that is 10 to
    the power of the length of the numString.
    - Parse the integer from numString and compare to the previous number
      - if it is larger, then that is our next umber
      - if it is smaller, get the remainder of previous number divided by our
        generated number.
        - If our remainder is less than our integer from numString, we subtract
          it from our integer and then add it to the previous number, this is
          our next number
        - If the remainder is greater than our integer from numString, we add
          our generated number to the integer from numstring and then subtract
          the remainder from it and add that to the previous number. This is
          our next number.
  - If only one number is present as the element, the new element is array with
    two elements of that number
- Reduce array of arrays to single array
  - Build ranges for each element and concatenate
- return reduced array
*/

function nextNumber(previous, numString) {
  let parse = parseInt(numString, 10);
  if (parse > previous) return parse;

  const powerOfTen = Math.pow(10, numString.length);
  const remainder = previous % powerOfTen;
  if (parse <= remainder) parse += powerOfTen;

  return previous + (parse - remainder);
}

// console.log(nextNumber(1, '3'));    // 3
// console.log(nextNumber(3, '1'));    // 11
// console.log(nextNumber(104, '2'));  // 112
// console.log(nextNumber(104, '02')); // 202
// console.log(nextNumber(1, '1'));    // 11

function createRangeConverter() {
  let previous = -1;

  return function(rangeStr) {
    let arr = rangeStr.split(/-|:|\.\./)
      .map(numStr => {
        previous = nextNumber(previous, numStr);
        return previous;
      });
    if (arr.length === 1) arr[1] = arr[0];
    if (arr.length > 2) arr = [arr[0], arr[arr.length - 1]];
    return arr;
  };
}

function generateRange(first, last) {
  let nums = [];

  for (let value = first; value <= last; value += 1) {
    nums.push(value);
  }

  return nums;
}

function sequence(string) {
  let ranges = string.split(', ');
  ranges = ranges.map(createRangeConverter());
  return ranges.reduce((acc, range) => acc.concat(generateRange(...range)), []);
}

console.log(sequence("1, 3, 7, 2, 4, 1")); // --> 1, 3, 7, 12, 14, 21
console.log(sequence("1-3, 1-2")); // --> 1, 2, 3, 11, 12
console.log(sequence("1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(sequence("104-2")); // --> 104, 105, ... 112
console.log(sequence("104-02")); // -> 104, 105, ... 202
console.log(sequence("545, 64:11")); // --> 545, 564, 565, .. 611

// 40 mins
