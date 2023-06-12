// Write a function that takes an array as an argument and sorts that array
// using the bubble sort algorithm described above. The sorting should be done
// "in-place" — that is, the function should mutate the array. You may assume
// that the array contains at least two elements.

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

function bubbleSort(arr) {
  let end = arr.length - 1;
  let swapped;
  do {
    swapped = false;
    for (let current = 0; current < end; current += 1) {
      if (arr[current] > arr[current + 1]) {
        swap(arr, current, current + 1);
        swapped = true;
      }
    }

    end -= 1;
  } while (swapped);
}

function swap(arr, idxa, idxb) {
  const hold = arr[idxa];
  arr[idxa] = arr[idxb];
  arr[idxb] = hold;
}
