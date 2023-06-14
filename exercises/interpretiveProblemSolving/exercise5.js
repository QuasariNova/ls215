// The Vigenere Cipher encrypts alphabetic text using polyalphabetic
// substitution. It uses a series of Caesar Ciphers based on the letters of a
// keyword. Each letter of the keyword is treated as a shift value. For
// instance, the letter 'B' corresponds to a shift value of 1, and the letter
// 'd' corresponds to a shift value of 3. In other words, the shift value used
// for a letter is equal to its index value in the alphabet. This means that
// the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase
// letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by
// applying the current shift value to a Caesar Cipher for that particular
// character. To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// Notice that in the example, the key isn't moved forward if the character
// isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only
// encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the
// keyword doesn't matter—in other words, the resulting encryption won't change
// depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

/*
Input: String text, String keyword
  - Keyword is not case sensitive
Output: Encrypted string

Rules:
  - Only alphabetic characters get changed
  - Changes happen in place on string(nonalpha characters stay)
  - Each keyword character stands for a different shift
    - based on the index of the letter(a:0, z:25), not case sensitive
    - Shift wraps around
  - The shifts are applied in order over and over again
    - Skips non alpha characters

E
vigenereEncrypt('Pineapples don't go on pizzas!', 'meat');
// Bmnxmtpeqw dhz'x gh ar pbldal!

vignereEncrypt('Hi', 'aBc'); // Hj
vignereEncrypt('Hello', 'bB'); // Ifmmp
vignereEncrypt('Launch School', ''); // ?
vignereEncrypt('Launch School'); // ?
vignereEncrypt('Launch School', [1]); // ?

D
Text Replace: String
Key: Array of Numbers

A
- Map characters in keyword to array of indexes
- Replace all alphabetic characters with shifted character keeping track of how
  many have changed
  - Find correct shift value
  - convert character to lowercase
  - shift lowercase character
  - increase change count
  - use lowercase if original is lowercase, otherwise use uppercase
*/

function makeEncrypter(keyword) {
  const LETTERS = [...'abcdefghijklmnopqrstuvwxyz'];
  const key = [...keyword.toLowerCase()].map(letter => LETTERS.indexOf(letter));

  let times = 0;
  return function(char) {
    let idx = LETTERS.indexOf(char.toLowerCase());
    idx = (idx + key[times % key.length]) % LETTERS.length;

    times += 1;
    return /[A-Z]/.test(char) ? LETTERS[idx].toUpperCase() : LETTERS[idx];
  };
}

// let encrypter = makeEncrypter('AbBa');
// console.log(encrypter('z') === 'z');
// console.log(encrypter('z') === 'a');
// console.log(encrypter('Y') === 'Z');
// console.log(encrypter('Y') === 'Y');

function vigenereEncrypt(text, keyword) {
  return text.replace(/[a-z]/gi, makeEncrypter(keyword));
}

console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereEncrypt('Hi', 'aBc')); // Hj
console.log(vigenereEncrypt('Hello', 'bB')); // Ifmmp

// 25 minutes
