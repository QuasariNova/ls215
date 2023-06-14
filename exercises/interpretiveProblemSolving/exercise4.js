// Write a function that implements the Caesar Cipher. The Caesar Cipher is one
// of the earliest and simplest ways to encrypt plaintext so that a message can
// be transmitted securely. It is a substitution cipher in which each letter in
// a plaintext is substituted by the letter located a given number of positions
// away in the alphabet. For example, if the letter 'A' is right-shifted by 3
// positions, it will be substituted with the letter 'D'. This shift value is
// often referred to as the key. The "encrypted plaintext" (ciphertext) can be
// decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper
// case). Any other character is left as is. The substituted letters are in the
// same letter case as the original letter. If the key value for shifting
// exceeds the length of the alphabet, it wraps around from the beginning.

/*
p
Input: String
  - Will always be a string?
Output: Encrypted string

Rules:
  - Only letters are encrypted
  - Done in place on the string, spaces and punctuation stay
  - Increases the character by key characters
    - Wraps back to the begining of the alphabet
  - Keeps case

e
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt(
  'There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

d
String

a
- Replace all alphabetic characters with their shifted character
  - Convert character to lower case
  - get its 'index'
  - add the shift to it and find out its remainder when divided by 26
  - use the character at the remainders index
  - if original character is uppercase, convert the new character to uppercase
*/

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt(
  'There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

function caesarEncrypt(text, key) {
  return text.replace(/[a-z]/gi, char => ceasarShift(char, key));
}

function ceasarShift(char, key) {
  const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let idx = LETTERS.indexOf(char.toLowerCase());
  idx = (idx + key) % LETTERS.length;

  return /[A-Z]/.test(char) ? LETTERS[idx].toUpperCase() : LETTERS[idx];
}

// console.log(ceasarShift('A', 3));  // D
// console.log(ceasarShift('M', 26)); // M
// console.log(ceasarShift('d', 29)); // g

// 20 minutes
