// Write a function that displays an 8-pointed star in an nxn grid, where n is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when n is 7).

/*
Input: Odd Integer >= 7
Output: Star logged over n lines

Rules:
  - Input is width/height of star
  - Star is made up '*' characters and spaces
  - Middle of star (n / 2) is n '*' characters
  - Rest of star is 3 '*' spaced with spaces
  - The outer spaces increase by 1 until we reach the middle
  - Inner spaces evenly space the two outside *
  - There is always a * in the middle

E
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

d:
Array of Strings

a:
- Iterate over all numbers from 0 to n / 2, excluding n /2
  - Push Star Pattern to array
    - First space is repeted iterated times
    - Inner spaces repeated (n - 3 - (iterated * 2)) / 2
- Concatenate array with an array with middle and a reversed array of itself
- Iterate over that array, printing each string in sequence
*/

function starRow(row, width) {
  const innerSpaces = ' '.repeat((width - 3 - (row * 2)) / 2);
  const outerSpaces = ' '.repeat(row);
  return `${outerSpaces}*${innerSpaces}*${innerSpaces}*`;
}

// console.log(starRow(0, 9));
// console.log(starRow(0, 7));
// console.log(starRow(2, 9));
// console.log(starRow(2, 7));

function star(width) {
  const top = [];
  const middle = '*'.repeat(width);

  for (let row = 0; row < Math.floor(width / 2); row += 1) {
    top.push(starRow(row, width));
  }

  top.concat([middle], top.slice().reverse())
    .forEach(row => console.log(row));
}

star(7);
star(9);

// 20 minutes
