// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name
// from the way in which it's encoded. It was already used by the ancient
// Greeks.

// In the Rail Fence cipher, the message is written downwards on successive
// "rails" of an imaginary fence, then moving up when we get to the bottom
// (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT
// ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN

// To decrypt a message you take the zig-zag shape and fill the ciphertext
// along the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// If you now read along the zig-zag shape you can read the original message.

/*
Encode:
  Input: String
    - Spaces are ignored
  Output: String
    - Is a concatenation of the three fenced strings

  Rules:
    - Encode is made up of 3 strings, alternating back and forth
    - first string is every fourth character starting from the first
    - second string is every odd character
    - third string is every fourth character starting from the third character
    - After the string is seperated into three strings, concatenate them into
      one string '(first)(second)(third)'

  E
  console.log(encode('WE ARE DISCOVERED FLEE AT ONCE'));
  // WECRLTEERDSOEEFEAOCAIVDEN
  console.log(encode('Hello')); // Hoell
  console.log(encode('Launch School')) // LchanhcoluSo
  console.log(encode('Pow')); // Pow

  D
  Arrays

  A
  - Remove any space characters from string
  - Create three strings
  - Iterate over nonspaced string
    - If index is divisible by 4, add to first string
    - index is odd, add to second string
    - index - 2 is divisible by 4, add to third string
  - concatenate all three strings together and return

Decode:
  Input: String
    - A combination of three strings
  Output: String
    - Won't have spaces of our original

  Rules:
    - Str needs to be split into 3 parts
    - middle is twice as big as either side
    - Place characters first, second, third, second until out of chars

  E
  console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN'));
  // WEAREDISCOVEREDFLEEATONCE
  console.log(deconde('Hoell')); // Hello
  console.log(deconde('LchancholuSo')); // LaunchSchool
  console.log(decode('Pow')); // Pow

  D
  Arrays

  A
  - Split string into characters
  - Determine 1/4th the strings length, this is the first string array
  - Determine 1/3rd the strings length, this is the third string array
  - The remaining string is the second string array
  - Iterate over original strings length
    - idx divisible by four, remove the first character from the first array
      and add it to the result string
    - idx odd?, remove the first char from the second array and add it to the
      result string
    - otherwise, remove the first char from the third array and add it to the
      result string
  - return result string
*/

function encode(str) {
  str = str.replace(/\s/g, '');
  const [out1, out2, out3] = [[], [], []];

  for (let idx = 0; idx < str.length; idx += 1) {
    if (idx % 4 === 0) {
      out1.push(str[idx]);
    } else if (idx % 2 === 1) {
      out2.push(str[idx]);
    } else {
      out3.push(str[idx]);
    }
  }

  return out1.concat(out2, out3).join('');
}

console.log(encode('WE ARE DISCOVERED FLEE AT ONCE'));
// WECRLTEERDSOEEFEAOCAIVDEN
console.log(encode('Hello')); // Hoell
console.log(encode('Launch School')); // LchancholuSo
console.log(encode('Pow')); // Pow

function decode(str) {
  const second = str.split('');
  const first = second.splice(0, Math.ceil(str.length / 4));
  const charsLeft = second.length;
  const third = charsLeft > 1 ? second.splice(-Math.ceil(charsLeft / 3)) : [];

  let result = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (idx % 4 === 0) {
      result += first.shift();
    } else if (idx % 2 === 1) {
      result += second.shift();
    } else {
      result += third.shift();
    }
  }

  return result;
}

console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN'));
// WEAREDISCOVEREDFLEEATONCE
console.log(decode('Hoell')); // Hello
console.log(decode('LchanhcoluSo')); // LaunchSchool
console.log(decode('Pow')); // Pow
console.log(decode('Hi')); // Hi
console.log(decode('Hoal')); // Hola
console.log(decode('I')); // I

// 40 minutes
