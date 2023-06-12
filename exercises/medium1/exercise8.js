// Rewrite your recursive fibonacci function so that it computes its results
// without using recursion.

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

function fibonacci(nth) {
  let [last, current] = [1n, 1n];

  for (let idx = 3n; idx <= nth; idx += 1n) {
    [last, current] = [current, current + last];
  }

  return current;
}
