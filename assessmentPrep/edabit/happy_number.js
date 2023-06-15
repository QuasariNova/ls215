// A happy number is a number which yields a 1 by repeatedly summing up the
// square of its digits. If such a process results in an endless cycle of
// numbers containing 4, the number is said to be an unhappy number.

// Create a function that accepts a number and determines whether the number is
// a happy number or not. Return true if so, false otherwise.
// Examples

// isHappy(67); // false
// isHappy(89); // false
// isHappy(139); // true
// isHappy(1327); // false
// isHappy(2871); // false
// isHappy(3970); // true

/*
Input: Positive Integer
Output: Boolean
  - Whether it is happy or not

Rules:
  - Repeatedly square digits and sum
  - if sum is 1, it is happy
  - If sum is 4, it is not
  - repeat until it is either 1 or 4 with sum as new number

E
isHappy(67); // false
36 + 49 = 95
81 + 25 = 106
1 + 0 + 36 = 37
9 + 49 = 58
25 + 64 = 89
64 + 81 = 145
1 + 16 + 25 = 42
16 + 4 = 20
4 + 0 = 4 false

isHappy(89); // false
isHappy(139); // true
1 + 9 + 81 = 91
81 + 1 = 82
64 + 4 = 68
36 + 64 = 100
1 + 0 + 0 = 1 true

isHappy(1327); // false
isHappy(2871); // false
isHappy(3970); // true

D
Array of digits

A
Separate digits into an array of digits
Reduce array of digits into sum of squares
if sum is 4, return false
if sum is 1, return true
Otherwise number = sum and repeat
*/

function isHappy(number) {
  while (1) {
    const digits = String(number).split('');
    number = digits.reduce((sum, digit) => sum + (digit ** 2), 0);
    if (number === 1) return true;
    if (number === 4) return false;
  }
}

console.log(isHappy(67)); // false
console.log(isHappy(89)); // false
console.log(isHappy(139)); // true
console.log(isHappy(1327)); // false
console.log(isHappy(2871)); // false
console.log(isHappy(3970)); // true
