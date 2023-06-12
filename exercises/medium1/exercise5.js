// Write a function that takes a sentence string as an argument and returns
// that string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.

// Example:

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.')
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."

function wordToDigit(text) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine'];
  const IS_NUMBER = /\b(one|two|three|four|five|six|seven|eight|nine|zero)\b/gi;

  return text.replace(IS_NUMBER,
    (num) => String(NUMBER_WORDS.indexOf(num.toLowerCase())));
}
