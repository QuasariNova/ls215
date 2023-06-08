// Write a function that takes a string as an argument and returns true if the
// string contains properly balanced parentheses, false otherwise. Parentheses
// are properly balanced only when '(' and ')' occur in matching pairs, with
// each pair starting with '('.
// Examples

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false

/*
// original
function isBalanced(string) {
  const parentheses = string.replace(/[^()]/g, '');
  let opened = 0;

  for(let idx = 0; idx < parentheses.length; idx += 1) {
    opened = parentheses[idx] === '(' ? opened + 1 : opened - 1;
    if (opened < 0) return false;
  }

  return opened === 0;
}
*/

// Further Exploration:
// Can you refactor the current solution to work with the forEach method? Why
// does our current solution work with a for loop, but not with forEach?

// Our current solution worked with for, because it was a string and it needs
// to exit the loop prior to being done in a case. We can refactor it to do so
// by splitting the string into an array of characters and to keep track if it
// failed during the iterations. Unfortunately, we'd always check every
// character and that is kind of a waste.

function isBalanced(string) {
  const parentheses = string.replace(/[^()]/g, '').split('');
  let opened = 0;
  let good = true;

  parentheses.forEach((char) => {
    opened = char === '(' ? opened + 1 : opened - 1;
    if (opened < 0) good = false;
  });

  return good && opened === 0;
}
