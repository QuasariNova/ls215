// Write a function that takes a string and returns an object containing the
// following three properties:

//     the percentage of characters in the string that are lowercase letters
//     the percentage of characters that are uppercase letters
//     the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// Examples:

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages(str) {
  const ttl = str.length;
  const lowercase = (str.replace(/[^a-z]/g, '').length / ttl * 100).toFixed(2);
  const uppercase = (str.replace(/[^A-Z]/g, '').length / ttl * 100).toFixed(2);
  const neither = (100 - lowercase - uppercase).toFixed(2);

  return { lowercase, uppercase, neither };
}
