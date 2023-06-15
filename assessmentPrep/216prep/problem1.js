// A distinct string is a string that is present only once in an array.

// Given an array of strings, arr, and an integer, k, return the kth distinct
// string present in arr. If there are fewer than k distinct strings, return an
// empty string "".

// Note that the result string is the one encountered earliest in the array.

// Example

// distinctString(["d","b","c","b","c","a"], 2); // "a"

/*
Input: Array of strings, integer k
  - Will it always have at least 1 string?
  - Will the array only have strings?
  - What if k is not supplied?
  - What if an array is not supplied?
  - What if k is not positive?
  - case sensitive?
Output: String
  - The kth distint string or empty string
  - Earliest k distint string

Rules:
  - Distinct string is a string that only appears once in an array
  - An array may have more than one distinct string
  - If there are less than k distinct strings, return ''

E
distinctString(["d","b","c","b","c","a"], 2); // "a"
distinctString(['a', , 'a', , 'b'], 1); // 'b'
distinctString([1, 2, 3, 'super', 'Super', 'sUper'], 3); // "sUper"
distinctString([], 1); // ''

D
Object of strings and array

A
- Iterate over array and fill out object with strings and their count
- Filter array to strings that only appear once
- If filtered array is less than k, return ''
- else return the kth string
*/

function stringCount(strings) {
  const counts = {};

  strings.forEach(string => {
    if (typeof string !== 'string') return;
    if (!(string in counts)) counts[string] = 0;
    counts[string] += 1;
  });

  return counts;
}

function distinctString(strings, kth) {
  let counts = stringCount(strings);
  strings = strings.filter(str => counts[str] === 1);

  if (strings.length < kth) return '';
  return strings[kth - 1];
}

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(['a', , 'a', , 'b'], 1)); // 'b'
console.log(distinctString([1, 2, 3, 'super', 'Super', 'sUper'], 3)); // "sUper"
console.log(distinctString([], 1)); // ''
