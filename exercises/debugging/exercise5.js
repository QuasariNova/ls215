// We are assigned the task to implement a range function that returns an array
// of integers beginning and ending with specified start and end numbers. When
// only a single argument is provided, that argument should be used as the
// ending number and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an error
// saying Maximum call stack size exceeded? Can you fix the code, so it runs
// without error and satisfies the requirements?

function range(start, end) {
  const range = [];

  if (end === undefined) [start, end] = [0, start]; // new

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Stack overflow from this shadowing the other range
// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));

// Further Exploration
// There are two reasons why the following is not a working solution. Can you
// spot them?

// function range(start, end) {
//   if (!end) { // 0 is falsy
//     start = 0;
//     end = start; // we assign end to 0 instead of what start should of been
//   }

//   // ...
// }
