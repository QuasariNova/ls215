// Write a function, primeNumberPrinter, that prints all prime numbers present
// as substrings in a given string.

// Example

// primeNumberPrinter("a4bc2k13d"); // [2, 13]

/*
Input: String
  - What if no string is given
  - What if no numbers are in the string
  - What if something else was passed
  - What if more than one argument is passed?
Output: Array of prime numbers

Rules:
  - Numbers in string are defined as a series of consecutive digits. This is
    greedy, individual digits that are next to other digits are numbers
    themselves.
  - If string is empty, or no prime numbers are in the string, return []?
  - Prime numbers are numbers that are integers that are only divisible by
    themselves and one.
  - Do we count duplicate numbers? Like say '2' appears twice in the string, do
    we return an array with 2 twice.
  - Is ordering of the return arrays elements important?
  - Can the string contain negative numbers?

D
Array of Numbers

A
- Match with numbers (use lookahead and behind to force)
  /\d+/g
- Map array of matches to numbers
- Filter array of numbers to prime numbers
*/


function isPrime(num) {
  const sqrt = Math.sqrt(num);
  if (num < 2) return false;
  if (num !== 2 && num % 2 === 0) return false;

  for (let div = 3; div <= sqrt; div += 2) {
    if (num % div === 0) return false;
  }

  return true;
}

// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(5));
// console.log(isPrime(7));
// console.log(isPrime(11));
// console.log(isPrime(13));
// console.log(isPrime(17));
// console.log(isPrime(23));
// console.log(isPrime(31));
// console.log(isPrime(4));
// console.log(isPrime(27));

function primeNumberPrinter(str) {
  let numbers = str.match(/\d+/g) ?? [];
  numbers = numbers.map(Number);

  return numbers.filter(isPrime);
}

console.log(primeNumberPrinter('')); // []
console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
console.log(primeNumberPrinter('Oh noes, no numbers')); // []
