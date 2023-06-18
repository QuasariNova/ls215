// Write a function that takes a two-dimensional array as the argument and
// turns it into a flat array with all duplicated elements removed. Treat
// numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one
// that comes first in the result.

// Examples

// flattenAndUnique([]); // []
// flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']

/*
Input: Two Dimensional Array
  - Can there be none array elements inside the top level?
  - Can there be arrays inside the inner arrays?
  - Will there always be one argument?
  - Will the argument always be an array?
  - Will the elements include other data types than integers and strings
  - Can it be sparse, and how do we handle it.
Output: One Dimensional Array
  - Combination of all elements from inner arrays
  - Only keep unique elements
  - numbers and number strings are the same for this purpose

Rules:
  - Empty array, returns Empty array
  - Keep first element of set of uniques(num string comes before number, keep
    string)

E
flattenAndUnique([[1, '3', 'a'], [undefined, 3]); // [1, '3', 'a', undefined]
flattenAndUnique([[], [], []]); // []
flattenAndUnique([[undefined], ['undefined']]); // [undefined, 'undefined'];

D
Array

A
- Flatten array 1 level
- Filter unique values out of array
  - Iterate over array pushing values into new array
  - If value is number, check if either number or string already exists in array
    - If it does, don't push it
  - Check if array already contains value
    - If it does, don't push it
- return new array
*/

function flattenAndUnique(arr) {
  arr = arr.flat(1);
  let result = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    const current = arr[idx];
    if (typeof current === 'number' && result.includes(String(current))) {
      continue;
    }

    if (result.includes(current) || result.includes(Number(current))) continue;

    result.push(current);
  }

  return result;
}

console.log(flattenAndUnique([[1, '3', 'a'], [undefined, 3]])); // [1, '3', 'a', undefined]
console.log(flattenAndUnique([[], [], []])); // []
console.log(flattenAndUnique([[undefined], ['undefined']])); // [undefined, 'undefined'];
console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[0, 'a', NaN, 'NaN']]));
