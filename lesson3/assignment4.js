// The following are all legal version numbers:

// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0

// Write a function that takes any two version numbers in this format and
// compares them, with the result of this comparison showing whether the first
// is less than, equal to, or greater than the second version:

//     If version1 > version2, we should return 1.
//     If version1 < version2, we should return -1.
//     If version1 === version2, we should return 0.
//     If either version number contains characters other than digits and the .
//       character, we should return null.

// Here is an example of version number ordering:

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

/*
P
Input: String, String
  - Numbers separated by .
  - . not necessary
  - Can it end with a .?
  - Can we assume that both arguments will always be strings?
Output: Number representing comparison
  - +1 if left is greater than right
  - -1 if left is less than right
  - 0 if left equals right
  - If input invalid return null

Rules:
  - Version numbers are one or more integers separated by a .
  - If a section is not included in a number compared to another, assume that
    integer is 0
  - Comparison is done left to right

E

console.log(compareVersions('0.1', '1'));         // -1
console.log(compareVersions('1.a', '1'));         // null
console.log(compareVersions('1.1', '1'));         // 1
console.log(compareVersions('1.2', '1.2.0.0'));   // 0
console.log(compareVersions('.0', '1.23.9'));     // null
console.log(compareVersions('3.5', '1.'));        // null

D
Array of Numbers

A
  - Test if string inputs are valid
    - Return null if not
  - Split strings by '.' into two arrays of strings
  - transform each array of strings into arrays of numbers
  - Iterate over the largest array and compare its values to the other array
    - If a particular index does not exist, assume the value is 0
    - If left array value is greater than right array value, return 1
    - if left array value is lower than right array value, return -1
  - Return 0
*/

function versionToNumbers(version) {
  return version.split('.')
    .map(Number);
}

// console.log(versionToNumbers('1.23.0.1'));

function compareVersions(version1, version2) {
  const regex = /^\d+(\.\d+)*$/;
  if (!regex.test(version1) || !regex.test(version2)) return null;

  const left = versionToNumbers(version1);
  const right = versionToNumbers(version2);

  const count = left.length > right.length ? left.length : right.length;

  for (let idx = 0; idx < count; idx += 1) {
    const [leftValue, rightValue] = [left[idx] ?? 0, right[idx] ?? 0];
    if (leftValue > rightValue) return 1;
    if (leftValue < rightValue) return -1;
  }

  return 0;
}

console.log(compareVersions('0.1', '1'));         // -1
console.log(compareVersions('1.a', '1'));         // null
console.log(compareVersions('1.1', '1'));         // 1
console.log(compareVersions('1.2', '1.2.0.0'));   // 0
console.log(compareVersions('.0', '1.23.9'));     // null
console.log(compareVersions('3.5', '1.'));        // null

// Timed this took me 25 minutes
