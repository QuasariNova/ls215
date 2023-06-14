// Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

// p
// Input: odd positive? integer
//   - Will always be an odd integer
// Output: Log a diamond of n x n size

// Rules:
//   - Diamond is made up of * characters
//   - Middle of diamond is n *s
//   - Height of diamond is n
//   - From top to middle, diamond uses odd numbers from 1 to n for *
//   - Bottom is inverse of top
//   - Each row is centered with spaces [(n - x) / 2 on each side]
//     - Really only need left spaces

// E
diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// d
// Array of Strings

// a
// - for input n
// - Create empty array to hold our strings
// - Iterate over every odd number from 1 to n
//   - push a string of odd number '*' prepended by appropriate spaces
// - Copy all but the last element of the array
// - Reverse the copy
// - concatenate the copy to the original array
// - Iterate over array and log each string

function toStarRow(stars, oddNumber) {
  const spaces = ' '.repeat(Math.floor((oddNumber - stars) / 2));
  return spaces + '*'.repeat(stars);
}

function diamond(oddNumber) {
  let diamond = [];

  for (let stars = 1; stars <= oddNumber; stars += 2) {
    diamond.push(toStarRow(stars, oddNumber));
  }

  diamond = diamond.concat(diamond.slice(0, -1).reverse());

  diamond.forEach(row => console.log(row));
}

// 16 minutes
