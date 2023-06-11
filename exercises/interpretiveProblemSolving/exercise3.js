// A collection of spelling blocks has two letters per block, as shown in this
// list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.

// Write a function that takes a word string as an argument, and returns true
// if the word can be spelled using the set of blocks, or false otherwise. You
// can consider the letters to be case-insensitive when you apply the rules.

/*
Input: String word
  - Case does not matter
  - Empty? Probably not
Output: Boolean
  - Whether the string is valid without reusing blocks

Rules:
  - Blocks have two letters each, there are 13 blocks
  - Words can not have more than one block
    - Returns false if they do

Examples:
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

DataStructure:
String
Object for blocks, key is letter, value is regex

A
- Convert string to lowercase
- For each character in the string, match string with regex.
    - If more than one match comes up return false
- Return true
*/

const BLOCKS = { b: /[bo]/, o: /[bo]/, x: /[xk]/, k: /[xk]/,
  d: /[dq]/, q: /[dq]/, c: /[cp]/, p: /[cp]/, n: /[na]/,
  a: /[na]/, g: /[gt]/, t: /[gt]/, r: /[re]/, e: /[re]/,
  f: /[fs]/, s: /[fs]/, j: /[jw]/, w: /[jw]/, h: /[hu]/,
  u: /[hu]/, v: /[vi]/, i: /[vi]/, l: /[ly]/, y: /[ly]/,
  z: /[zm]/, m: /[zm]/ };

function isBlockWord(word) {
  word = word.toLowerCase();
  if (!/^[a-z]+$/g.test(word)) return false;


  for (let idx = 0; idx < word.length - 1; idx += 1) {
    const regex = BLOCKS[word[idx]];
    if (regex.test(word.slice(idx + 1))) return false;
  }

  return true;
}

console.log(isBlockWord('BATCH'));          // true
console.log(isBlockWord('BUTCH'));          // false
console.log(isBlockWord('jest'));           // true
console.log(isBlockWord('aPpLe'));          // false
console.log(isBlockWord('LIME'));           // true
console.log(isBlockWord('BKDPAGEFJUVYM'));  // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

// 18 minutes
