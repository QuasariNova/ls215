// The Luhn formula is a simple checksum formula used to validate a variety of
// identification numbers, such as credit card numbers and Canadian Social
// Insurance Numbers.

// The formula verifies a number against its included check digit, which is
// usually appended to a partial number to generate the full number. This
// number must pass the following test:

//     Counting from the rightmost digit and moving left, double the value of
// every second digit
//     For any digit that thus become 10 or more, subtract 9 from the result
//         1111 becomes 2121
//         8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 ->
//           16 - 9 = 7)
//     Add all these digits together
//         1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
//         8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

// If the total (the checksum) ends in 0 (put another way, if the total modulo
// 10 is congruent to 0), then the number is valid according to the Luhn
// Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it
// comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid
// per the Luhn formula. This should treat, for example, "2323 2005 7766 3554"
// as valid. You can ignore all non-numeric characters in the input string.

/*
Input: String of numbers
  - May have none number characters, can ignore
  - Can be empty string?
    - false?
Output: True or False

Rules:
  - Doubles every other digit, from right to left, starting with the second
    digit.
    - If doubled digit is > 10, subtract 9
  - Add digits together to get sum
    - If sum is divisible by 10, return true
    - If sum is not, return false

E
console.log(luhn('1111'));                       // false
console.log(luhn('2022'));                       // true
console.log(luhn(''));                           // false
console.log(luhn('2323 2005 7766 3554'));        // true
console.log(luhn('asdf'));                       // false
console.log(luhn());                             // false

D
Array of Numbers

A
- Remove nondigit characters with replacement
- if string is empty, return false
- Split string into array of Numbers
- Reverse array
- Transform array of number so that every second number is doubled
  - If doubled number > 10, subtract 9 from it
- Reduce array into sum
- Return if sum is divisible by 10
*/

function toLuhnArray(numString) {
  return [...numString].reverse().map((value, idx) => {
    if (idx % 2 === 1) {
      value *= 2;
      if (value >= 10) value -= 9;
    }
    return Number(value);
  });
}

console.log(toLuhnArray('2323 2005 7766 3554'));

function luhn(numString) {
  if (typeof numString !== 'string') return false;

  numString = numString.replace(/\D/g, '');
  if (!numString) return false;

  const numArray = toLuhnArray(numString);

  const sum = numArray.reduce((acc, value) => acc + value);
  return sum % 10 === 0;
}

console.log(luhn('1111'));                       // false
console.log(luhn('2022'));                       // true
console.log(luhn(''));                           // false
console.log(luhn('2323 2005 7766 3554'));        // true
console.log(luhn('asdf'));                       // false
console.log(luhn());                             // false

// 20 Minutes
