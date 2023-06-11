// Write a function that rotates the last n digits of a number. For the
// rotation, rotate by one digit to the left, moving the first digit to the end.

// Examples:

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

function rotateRightmostDigits(number, digit) {
  const digits = String(number).split('');

  const rightMost = digits.splice(-digit);
  return parseInt(digits.concat(rotateArray(rightMost)).join(''), 10);
}

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat([arr[0]]);
}
