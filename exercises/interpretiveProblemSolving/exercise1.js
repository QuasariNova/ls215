// You have a bank of switches before you, numbered from 1 to n. Every switch
// is connected to exactly one light that is initially off. You walk down the
// row of switches and toggle every one of them. You walk back to the beginning
// of the row and start another pass. On this second pass, you toggle switches
// 2, 4, 6, and so on. On the third pass, you go back to the beginning again,
// this time toggling switches 3, 6, 9, and so on. You continue to repeat this
// process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after n repetitions.

// P
// Input: Number
//   - Positive Integer
// Output: Array of Numbers
//   - Switch Number that is on

// Rules:
//   - Have an array of n lights
//   - Lights are initialy off
//   - Iterate over lights n times
//     - Every x light gets its light switch swapped
//   - Returns every light that is on after this
//   - No input? Less than 1?

// Examples:

// lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// lightsOn(); // []
// lightsOn(-1); // []

// D
// Array of bools

// A
// - Create array of booleans n-long
// - Loop from 1 to n
//   - Loop from previous to n where increase is by the previous loop value
//   - flip the switch
// - Iterate over array making note of all the indexs
// - return array of indexs

function lightsOn(switches) {
  if (!Number(switches) || switches < 0) return [];
  const lights = (new Array(switches)).fill(false);

  for (let factor = 1; factor <= switches; factor += 1) {
    for (let idx = factor - 1; idx < switches; idx += factor) {
      lights[idx] = !lights[idx];
    }
  }

  return getTrueIndexes(lights, 1);
}

function getTrueIndexes(arr, offset = 0) {
  const result = [];

  arr.forEach((value, idx) => {
    if (value) result.push(idx + offset);
  });

  return result;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn()); // []
console.log(lightsOn(-1)); // []
