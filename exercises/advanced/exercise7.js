// With a linear search, we would have to sequentially go through each of the
// items until we found the search item 'Pizzeria'. In a binary search,
// however, the following sequence happens:

//     Retrieve the middle value from the data (assume truncation to integer)
//       --> 'Eat a Lot'.
//     If the middle value is equal to 'Pizzeria', stop the search.
//     If the middle value is less than 'Pizzeria':
//         Discard the lower half, including the middle value -->
//           ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us',
//            'Eat a Lot'].
//         Repeat the process from the top, using the upper half as the
//            starting data -->
//            ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
//     If the middle value is greater than 'Pizzeria', do the same as the
//       previous step, but with opposite halves.

// Implement a binarySearch function that takes an array and a search item as
// arguments, and returns the index of the search item if found, or -1
// otherwise. You may assume that the array argument will always be sorted.

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

/*
Original:
function binarySearch(arr, target) {
  if (!arr.length) return -1;

  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) return mid;

  const split = arr[mid] < target ? arr.slice(mid + 1) : arr.slice(0, mid);
  let newIndex = binarySearch(split, target);
  if (newIndex === -1) return -1;

  return arr[mid] < target ? mid + 1 + newIndex : newIndex;
}
*/

// I want to refactor as procedural, as it doesn't feel right as a recursive
// function

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low;
    if (arr[mid] === target) return mid;

    if (arr[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}
